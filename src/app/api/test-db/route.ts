import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        // Simple connection test
        const count = await prisma.earlyAccessSubmission.count();
        return NextResponse.json({
            success: true,
            message: 'Database connected!',
            submissionsCount: count
        });
    } catch (error) {
        console.error('Database connection error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({
            success: false,
            error: errorMessage,
            details: String(error)
        }, { status: 500 });
    }
}
