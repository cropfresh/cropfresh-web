import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    try {
        // Check admin password
        const authHeader = request.headers.get('authorization');
        const password = authHeader?.replace('Bearer ', '');

        if (password !== process.env.ADMIN_PASSWORD) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        // Get all submissions count
        const totalSubmissions = await prisma.earlyAccessSubmission.count();

        // Get submissions by role
        const submissionsByRole = await prisma.earlyAccessSubmission.groupBy({
            by: ['role'],
            _count: {
                role: true,
            },
        });

        // Get recent submissions (last 10)
        const recentSubmissions = await prisma.earlyAccessSubmission.findMany({
            take: 10,
            orderBy: {
                createdAt: 'desc',
            },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                location: true,
                role: true,
                createdAt: true,
            },
        });

        // Get daily submissions for last 7 days
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const dailySubmissions = await prisma.$queryRaw<
            Array<{ date: Date; count: bigint }>
        >`
      SELECT 
        "createdAt"::date as date,
        COUNT(*) as count
      FROM early_access_submissions
      WHERE "createdAt" >= ${sevenDaysAgo}
      GROUP BY "createdAt"::date
      ORDER BY date ASC
    `;

        // Get total page views
        const totalPageViews = await prisma.pageView.count();

        // Get page views by page
        const pageViewsByPage = await prisma.pageView.groupBy({
            by: ['page'],
            _count: {
                page: true,
            },
            orderBy: {
                _count: {
                    page: 'desc',
                },
            },
            take: 10,
        });

        // Get form interaction stats
        const formInteractions = await prisma.formInteraction.groupBy({
            by: ['action'],
            _count: {
                action: true,
            },
        });

        const formStats = {
            started: formInteractions.find((f) => f.action === 'started')?._count.action || 0,
            submitted: formInteractions.find((f) => f.action === 'submitted')?._count.action || 0,
            abandoned: formInteractions.find((f) => f.action === 'abandoned')?._count.action || 0,
        };

        const conversionRate = formStats.started > 0
            ? ((formStats.submitted / formStats.started) * 100).toFixed(2)
            : 0;

        return NextResponse.json({
            submissions: {
                total: totalSubmissions,
                byRole: submissionsByRole.map((r) => ({
                    role: r.role,
                    count: r._count.role,
                })),
                recent: recentSubmissions,
                daily: dailySubmissions.map((d) => ({
                    date: d.date,
                    count: Number(d.count),
                })),
            },
            analytics: {
                totalPageViews,
                pageViewsByPage: pageViewsByPage.map((p) => ({
                    page: p.page,
                    count: p._count.page,
                })),
                formStats: {
                    ...formStats,
                    conversionRate: `${conversionRate}%`,
                },
            },
        });
    } catch (error) {
        console.error('Admin stats error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch statistics' },
            { status: 500 }
        );
    }
}
