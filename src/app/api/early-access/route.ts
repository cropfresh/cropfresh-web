import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

export const dynamic = 'force-dynamic';

// Validation schema
const earlyAccessSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().regex(/^[0-9]{10}$/, 'Phone must be exactly 10 digits'),
    location: z.string().min(2, 'Location must be at least 2 characters'),
    role: z.enum(['farmer', 'retailer', 'logistics', 'investor', 'other'] as const, {
        message: 'Invalid role selected',
    }),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate input data
        const validationResult = earlyAccessSchema.safeParse(body);

        if (!validationResult.success) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Validation failed',
                    details: validationResult.error.flatten().fieldErrors
                },
                { status: 400 }
            );
        }

        const data = validationResult.data;

        // Check for duplicate email
        const existingSubmission = await prisma.earlyAccessSubmission.findUnique({
            where: { email: data.email },
        });

        if (existingSubmission) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'This email has already been registered for early access.',
                },
                { status: 409 }
            );
        }

        // Get IP address and User Agent for analytics
        const ipAddress = request.headers.get('x-forwarded-for') ||
            request.headers.get('x-real-ip') ||
            'unknown';
        const userAgent = request.headers.get('user-agent') || 'unknown';

        // Create submission
        const submission = await prisma.earlyAccessSubmission.create({
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                location: data.location,
                role: data.role,
                ipAddress: ipAddress.split(',')[0].trim(), // Get first IP if multiple
                userAgent,
            },
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Successfully registered for early access!',
                data: {
                    id: submission.id,
                    email: submission.email,
                },
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Early access submission error:', error);

        return NextResponse.json(
            {
                success: false,
                error: 'An error occurred while processing your request. Please try again.',
            },
            { status: 500 }
        );
    }
}

// GET endpoint to check if email exists (optional)
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');

        if (!email) {
            return NextResponse.json(
                { error: 'Email parameter is required' },
                { status: 400 }
            );
        }

        const submission = await prisma.earlyAccessSubmission.findUnique({
            where: { email },
            select: { id: true, createdAt: true },
        });

        return NextResponse.json({
            exists: !!submission,
            registeredAt: submission?.createdAt,
        });
    } catch (error) {
        console.error('Email check error:', error);
        return NextResponse.json(
            { error: 'An error occurred' },
            { status: 500 }
        );
    }
}
