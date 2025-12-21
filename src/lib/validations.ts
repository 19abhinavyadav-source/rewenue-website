import { z } from "zod";

// Indian phone number validation
const indianPhoneRegex = /^[6-9]\d{9}$/;

export const registrationSchema = z.object({
    // Restaurant Details
    restaurantName: z
        .string()
        .min(2, "Restaurant name must be at least 2 characters")
        .max(100, "Restaurant name must be less than 100 characters"),
    cuisineType: z.string().min(1, "Please select a cuisine type"),
    restaurantType: z.string().min(1, "Please select a restaurant type"),
    city: z.string().min(1, "Please select a city"),
    locality: z
        .string()
        .min(2, "Locality must be at least 2 characters")
        .max(100, "Locality must be less than 100 characters"),
    fullAddress: z.string().max(500, "Address must be less than 500 characters").optional().or(z.literal("")),

    // Contact Information
    ownerName: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(100, "Name must be less than 100 characters"),
    designation: z.string().max(50, "Designation must be less than 50 characters").optional().or(z.literal("")),
    phone: z
        .string()
        .transform((val) => val.replace(/\s/g, ""))
        .refine((val) => indianPhoneRegex.test(val), {
            message: "Please enter a valid 10-digit Indian phone number",
        }),
    email: z.string().email("Please enter a valid email address"),
    whatsapp: z
        .string()
        .transform((val) => val.replace(/\s/g, ""))
        .refine((val) => val === "" || indianPhoneRegex.test(val), {
            message: "Please enter a valid 10-digit phone number",
        })
        .optional()
        .or(z.literal("")),

    // Additional Information
    seatingCapacity: z.string().min(1, "Please select seating capacity"),
    averageCheck: z.string().min(1, "Please select average check size"),
    currentOffers: z.string().max(1000, "Current offers must be less than 1000 characters").optional().or(z.literal("")),
    howDidYouHear: z.string().optional().or(z.literal("")),
    additionalNotes: z.string().max(2000, "Notes must be less than 2000 characters").optional().or(z.literal("")),
});

export type RegistrationInput = z.infer<typeof registrationSchema>;

export const contactSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(100, "Name must be less than 100 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z
        .string()
        .max(15, "Phone number is too long")
        .optional()
        .or(z.literal("")),
    restaurantName: z
        .string()
        .max(100, "Restaurant name must be less than 100 characters")
        .optional()
        .or(z.literal("")),
    subject: z.string().max(100, "Subject must be less than 100 characters").optional().or(z.literal("")),
    message: z
        .string()
        .min(10, "Message must be at least 10 characters")
        .max(5000, "Message must be less than 5000 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;
