import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { registrationSchema } from "@/lib/validations";
import { sendNewRegistrationNotification, sendRegistrationConfirmation } from "@/lib/email";
import { ZodError } from "zod";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate input
        const validatedData = registrationSchema.parse(body);

        // Save to database
        const registration = await prisma.restaurantRegistration.create({
            data: {
                restaurantName: validatedData.restaurantName,
                cuisineType: validatedData.cuisineType,
                restaurantType: validatedData.restaurantType,
                city: validatedData.city,
                locality: validatedData.locality,
                fullAddress: validatedData.fullAddress || null,
                ownerName: validatedData.ownerName,
                designation: validatedData.designation || null,
                phone: validatedData.phone,
                email: validatedData.email,
                whatsapp: validatedData.whatsapp || null,
                seatingCapacity: validatedData.seatingCapacity,
                averageCheck: validatedData.averageCheck,
                currentOffers: validatedData.currentOffers || null,
                howDidYouHear: validatedData.howDidYouHear || null,
                additionalNotes: validatedData.additionalNotes || null,
            },
        });

        console.log(`✅ New registration saved: ${registration.restaurantName} (ID: ${registration.id})`);

        // Send notification emails (fire and forget - don't block response)
        Promise.all([
            sendNewRegistrationNotification({
                restaurantName: validatedData.restaurantName,
                ownerName: validatedData.ownerName,
                email: validatedData.email,
                phone: validatedData.phone,
                city: validatedData.city,
                locality: validatedData.locality,
                cuisineType: validatedData.cuisineType,
                restaurantType: validatedData.restaurantType,
            }),
            sendRegistrationConfirmation({
                email: validatedData.email,
                restaurantName: validatedData.restaurantName,
                ownerName: validatedData.ownerName,
            }),
        ]).catch((error) => {
            console.error("Email sending failed:", error);
        });

        return NextResponse.json(
            {
                success: true,
                message: "Registration submitted successfully",
                id: registration.id,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Registration error:", error);

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
        { message: "Registration endpoint - Use POST to submit" },
        { status: 405 }
    );
}
