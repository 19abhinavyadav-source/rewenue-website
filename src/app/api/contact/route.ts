import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validations";
import { sendContactNotification } from "@/lib/email";
import { ZodError } from "zod";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate input
        const validatedData = contactSchema.parse(body);

        // Save to database
        const submission = await prisma.contactSubmission.create({
            data: {
                name: validatedData.name,
                email: validatedData.email,
                phone: validatedData.phone || null,
                restaurantName: validatedData.restaurantName || null,
                subject: validatedData.subject || null,
                message: validatedData.message,
            },
        });

        console.log(`✅ New contact submission saved: ${validatedData.name} (ID: ${submission.id})`);

        // Send notification email (fire and forget)
        sendContactNotification({
            name: validatedData.name,
            email: validatedData.email,
            phone: validatedData.phone,
            restaurantName: validatedData.restaurantName,
            subject: validatedData.subject,
            message: validatedData.message,
        }).catch((error) => {
            console.error("Email sending failed:", error);
        });

        return NextResponse.json(
            {
                success: true,
                message: "Message sent successfully",
                id: submission.id,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Contact submission error:", error);

        if (error instanceof ZodError) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Validation failed",
                    errors: error.issues.map((issue) => ({
                        field: issue.path.join("."),
                        message: issue.message,
                    })),
                },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong. Please try again later.",
            },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json(
        { message: "Contact endpoint - Use POST to submit" },
        { status: 405 }
    );
}
