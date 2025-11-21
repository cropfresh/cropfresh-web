import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
    try {
        const { formName, action, fieldName } = await request.json();

        if (!formName || !action) {
            return NextResponse.json(
                { error: 'formName and action are required' },
                { status: 400 }
            );
        }

        // Validate action
        const validActions = ['started', 'field_filled', 'submitted', 'abandoned'];
        if (!validActions.includes(action)) {
            return NextResponse.json(
                { error: 'Invalid action' },
                { status: 400 }
            );
        }

        // Create form interaction record
        await prisma.formInteraction.create({
            data: {
                formName,
                action,
                fieldName: fieldName || null,
            },
        });

        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error) {
        console.error('Form interaction tracking error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to track form interaction' },
            { status: 500 }
        );
    }
}
