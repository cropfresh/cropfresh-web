import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
    try {
        const { page } = await request.json();

        if (!page || typeof page !== 'string') {
            return NextResponse.json(
                { error: 'Page parameter is required' },
                { status: 400 }
            );
        }

        // Get IP address and User Agent
        const ipAddress = request.headers.get('x-forwarded-for') ||
            request.headers.get('x-real-ip') ||
            'unknown';
        const userAgent = request.headers.get('user-agent') || 'unknown';

        // Create page view record
        await prisma.pageView.create({
            data: {
                page,
                ipAddress: ipAddress.split(',')[0].trim(),
                userAgent,
            },
        });

        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error) {
        console.error('Page view tracking error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to track page view' },
            { status: 500 }
        );
    }
}
