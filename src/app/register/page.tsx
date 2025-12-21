"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

type FormData = {
    // Step 1: Restaurant Details
    restaurantName: string;
    cuisineType: string;
    restaurantType: string;
    city: string;
    locality: string;
    fullAddress: string;

    // Step 2: Contact Information
    ownerName: string;
    designation: string;
    phone: string;
    email: string;
    whatsapp: string;

    // Step 3: Additional Information
    seatingCapacity: string;
    averageCheck: string;
    currentOffers: string;
    howDidYouHear: string;
    additionalNotes: string;
};

const initialFormData: FormData = {
    restaurantName: "",
    cuisineType: "",
    restaurantType: "",
    city: "",
    locality: "",
    fullAddress: "",
    ownerName: "",
    designation: "",
    phone: "",
    email: "",
    whatsapp: "",
    seatingCapacity: "",
    averageCheck: "",
    currentOffers: "",
    howDidYouHear: "",
    additionalNotes: "",
};

const cuisineOptions = [
    "Multi-Cuisine",
    "North Indian",
    "South Indian",
    "Pan-Asian",
    "Chinese",
    "Italian",
    "Continental",
    "Mediterranean",
    "Japanese",
    "Thai",
    "Mexican",
    "American",
    "Seafood",
    "Barbecue & Grill",
    "Café",
    "Bakery & Desserts",
    "Other",
];

const restaurantTypeOptions = [
    "Fine Dining",
    "Premium Casual Dining",
    "Casual Dining",
    "Café & Coffee Shop",
    "Lounge & Bar",
    "Rooftop Restaurant",
    "Bistro",
    "Pub & Brewery",
    "Other",
];

const cityOptions = [
    "Mumbai",
    "Delhi NCR",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Goa",
    "Chandigarh",
    "Lucknow",
    "Kochi",
    "Other",
];

const hearAboutOptions = [
    "Google Search",
    "Social Media",
    "Referral from another restaurant",
    "Bank Partner",
    "Industry Event",
    "News/Press",
    "Other",
];

export default function RegisterPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const totalSteps = 3;

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof FormData]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const validateStep = (step: number): boolean => {
        const newErrors: Partial<FormData> = {};

        if (step === 1) {
            if (!formData.restaurantName.trim()) {
                newErrors.restaurantName = "Restaurant name is required";
            }
            if (!formData.cuisineType) {
                newErrors.cuisineType = "Please select your cuisine type";
            }
            if (!formData.restaurantType) {
                newErrors.restaurantType = "Please select your restaurant type";
            }
            if (!formData.city) {
                newErrors.city = "Please select your city";
            }
            if (!formData.locality.trim()) {
                newErrors.locality = "Locality is required";
            }
        }

        if (step === 2) {
            if (!formData.ownerName.trim()) {
                newErrors.ownerName = "Contact name is required";
            }
            if (!formData.phone.trim()) {
                newErrors.phone = "Phone number is required";
            } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ""))) {
                newErrors.phone = "Please enter a valid 10-digit Indian phone number";
            }
            if (!formData.email.trim()) {
                newErrors.email = "Email is required";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                newErrors.email = "Please enter a valid email address";
            }
        }

        if (step === 3) {
            if (!formData.seatingCapacity) {
                newErrors.seatingCapacity = "Please select your seating capacity";
            }
            if (!formData.averageCheck) {
                newErrors.averageCheck = "Please select your average check size";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
        }
    };

    const handlePrev = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateStep(currentStep)) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                // Handle validation errors from server
                if (result.errors) {
                    const serverErrors: Partial<FormData> = {};
                    result.errors.forEach((err: { field: string; message: string }) => {
                        serverErrors[err.field as keyof FormData] = err.message;
                    });
                    setErrors(serverErrors);
                    console.error("Validation errors:", result.errors);
                } else {
                    console.error("Registration failed:", result.message);
                    alert(result.message || "Something went wrong. Please try again.");
                }
                return;
            }

            console.log("Registration successful:", result);
            setIsSubmitted(true);
        } catch (error) {
            console.error("Registration error:", error);
            alert("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className={styles.page}>
                <div className={styles.successContainer}>
                    <div className={styles.successIcon}>
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                    </div>
                    <h1 className={styles.successTitle}>Application Submitted!</h1>
                    <p className={styles.successDescription}>
                        Thank you for your interest in partnering with Rewenue. Our team will
                        review your application and get back to you within 48 hours.
                    </p>
                    <div className={styles.successActions}>
                        <a
                            href={`https://wa.me/919876543210?text=Hi, I just submitted my restaurant registration for ${encodeURIComponent(formData.restaurantName)}. Looking forward to hearing from you!`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsappButton}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Message Us on WhatsApp
                        </a>
                        <Link href="/" className={styles.homeButton}>
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {/* Left Side - Form Info */}
                <div className={styles.infoSection}>
                    <Link href="/" className={styles.backLink}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                        Back to Home
                    </Link>

                    <div className={styles.infoContent}>
                        <h1 className={styles.infoTitle}>
                            Partner With <span>Rewenue</span>
                        </h1>
                        <p className={styles.infoDescription}>
                            Join India's premium dining network and start welcoming verified,
                            high-spending cardholders to your restaurant.
                        </p>

                        <div className={styles.benefits}>
                            <div className={styles.benefit}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <div>
                                    <strong>Zero Registration Fee</strong>
                                    <span>No upfront costs to join</span>
                                </div>
                            </div>
                            <div className={styles.benefit}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <div>
                                    <strong>Zero Platform Commission</strong>
                                    <span>Keep 100% of your earnings</span>
                                </div>
                            </div>
                            <div className={styles.benefit}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <div>
                                    <strong>Go Live in 48 Hours</strong>
                                    <span>Quick and easy onboarding</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.infoFooter}>
                        <p>
                            Questions? <a href="/contact">Contact us</a> or call{" "}
                            <a href="tel:+919876543210">+91 98765 43210</a>
                        </p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className={styles.formSection}>
                    <div className={styles.formCard}>
                        {/* Progress Bar */}
                        <div className={styles.progress}>
                            <div className={styles.progressSteps}>
                                {[1, 2, 3].map((step) => (
                                    <div
                                        key={step}
                                        className={`${styles.progressStep} ${step === currentStep ? styles.active : ""
                                            } ${step < currentStep ? styles.completed : ""}`}
                                    >
                                        <div className={styles.progressNumber}>
                                            {step < currentStep ? (
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            ) : (
                                                step
                                            )}
                                        </div>
                                        <span className={styles.progressLabel}>
                                            {step === 1 && "Restaurant"}
                                            {step === 2 && "Contact"}
                                            {step === 3 && "Details"}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.progressBar}>
                                <div
                                    className={styles.progressFill}
                                    style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                                />
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            {/* Step 1: Restaurant Details */}
                            {currentStep === 1 && (
                                <div className={styles.formStep}>
                                    <h2 className={styles.stepTitle}>Restaurant Details</h2>
                                    <p className={styles.stepDescription}>
                                        Tell us about your restaurant
                                    </p>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="restaurantName" className={styles.label}>
                                            Restaurant Name <span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="restaurantName"
                                            name="restaurantName"
                                            value={formData.restaurantName}
                                            onChange={handleInputChange}
                                            className={`${styles.input} ${errors.restaurantName ? styles.inputError : ""}`}
                                            placeholder="Enter your restaurant name"
                                        />
                                        {errors.restaurantName && (
                                            <span className={styles.error}>{errors.restaurantName}</span>
                                        )}
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="cuisineType" className={styles.label}>
                                                Cuisine Type <span className={styles.required}>*</span>
                                            </label>
                                            <select
                                                id="cuisineType"
                                                name="cuisineType"
                                                value={formData.cuisineType}
                                                onChange={handleInputChange}
                                                className={`${styles.select} ${errors.cuisineType ? styles.inputError : ""}`}
                                            >
                                                <option value="">Select cuisine</option>
                                                {cuisineOptions.map((option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.cuisineType && (
                                                <span className={styles.error}>{errors.cuisineType}</span>
                                            )}
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="restaurantType" className={styles.label}>
                                                Restaurant Type <span className={styles.required}>*</span>
                                            </label>
                                            <select
                                                id="restaurantType"
                                                name="restaurantType"
                                                value={formData.restaurantType}
                                                onChange={handleInputChange}
                                                className={`${styles.select} ${errors.restaurantType ? styles.inputError : ""}`}
                                            >
                                                <option value="">Select type</option>
                                                {restaurantTypeOptions.map((option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.restaurantType && (
                                                <span className={styles.error}>{errors.restaurantType}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="city" className={styles.label}>
                                                City <span className={styles.required}>*</span>
                                            </label>
                                            <select
                                                id="city"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className={`${styles.select} ${errors.city ? styles.inputError : ""}`}
                                            >
                                                <option value="">Select city</option>
                                                {cityOptions.map((option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.city && (
                                                <span className={styles.error}>{errors.city}</span>
                                            )}
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="locality" className={styles.label}>
                                                Locality / Area <span className={styles.required}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="locality"
                                                name="locality"
                                                value={formData.locality}
                                                onChange={handleInputChange}
                                                className={`${styles.input} ${errors.locality ? styles.inputError : ""}`}
                                                placeholder="e.g., Bandra West"
                                            />
                                            {errors.locality && (
                                                <span className={styles.error}>{errors.locality}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="fullAddress" className={styles.label}>
                                            Full Address
                                        </label>
                                        <textarea
                                            id="fullAddress"
                                            name="fullAddress"
                                            value={formData.fullAddress}
                                            onChange={handleInputChange}
                                            className={styles.textarea}
                                            placeholder="Complete restaurant address"
                                            rows={2}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Contact Information */}
                            {currentStep === 2 && (
                                <div className={styles.formStep}>
                                    <h2 className={styles.stepTitle}>Contact Information</h2>
                                    <p className={styles.stepDescription}>
                                        How can we reach you?
                                    </p>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="ownerName" className={styles.label}>
                                                Contact Person Name <span className={styles.required}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="ownerName"
                                                name="ownerName"
                                                value={formData.ownerName}
                                                onChange={handleInputChange}
                                                className={`${styles.input} ${errors.ownerName ? styles.inputError : ""}`}
                                                placeholder="Your full name"
                                            />
                                            {errors.ownerName && (
                                                <span className={styles.error}>{errors.ownerName}</span>
                                            )}
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="designation" className={styles.label}>
                                                Designation
                                            </label>
                                            <input
                                                type="text"
                                                id="designation"
                                                name="designation"
                                                value={formData.designation}
                                                onChange={handleInputChange}
                                                className={styles.input}
                                                placeholder="e.g., Owner, Manager"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone" className={styles.label}>
                                            Phone Number <span className={styles.required}>*</span>
                                        </label>
                                        <div className={styles.phoneInput}>
                                            <span className={styles.phonePrefix}>+91</span>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
                                                placeholder="98765 43210"
                                                maxLength={10}
                                            />
                                        </div>
                                        {errors.phone && (
                                            <span className={styles.error}>{errors.phone}</span>
                                        )}
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="email" className={styles.label}>
                                            Email Address <span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                                            placeholder="you@restaurant.com"
                                        />
                                        {errors.email && (
                                            <span className={styles.error}>{errors.email}</span>
                                        )}
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="whatsapp" className={styles.label}>
                                            WhatsApp Number
                                            <span className={styles.optional}>(if different)</span>
                                        </label>
                                        <div className={styles.phoneInput}>
                                            <span className={styles.phonePrefix}>+91</span>
                                            <input
                                                type="tel"
                                                id="whatsapp"
                                                name="whatsapp"
                                                value={formData.whatsapp}
                                                onChange={handleInputChange}
                                                className={styles.input}
                                                placeholder="Same as phone if blank"
                                                maxLength={10}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Additional Information */}
                            {currentStep === 3 && (
                                <div className={styles.formStep}>
                                    <h2 className={styles.stepTitle}>Additional Information</h2>
                                    <p className={styles.stepDescription}>
                                        Help us understand your restaurant better
                                    </p>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="seatingCapacity" className={styles.label}>
                                                Seating Capacity <span className={styles.required}>*</span>
                                            </label>
                                            <select
                                                id="seatingCapacity"
                                                name="seatingCapacity"
                                                value={formData.seatingCapacity}
                                                onChange={handleInputChange}
                                                className={`${styles.select} ${errors.seatingCapacity ? styles.inputError : ""}`}
                                            >
                                                <option value="">Select capacity</option>
                                                <option value="1-30">1-30 seats</option>
                                                <option value="31-60">31-60 seats</option>
                                                <option value="61-100">61-100 seats</option>
                                                <option value="101-150">101-150 seats</option>
                                                <option value="150+">150+ seats</option>
                                            </select>
                                            {errors.seatingCapacity && (
                                                <span className={styles.error}>{errors.seatingCapacity}</span>
                                            )}
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="averageCheck" className={styles.label}>
                                                Average Check (per person) <span className={styles.required}>*</span>
                                            </label>
                                            <select
                                                id="averageCheck"
                                                name="averageCheck"
                                                value={formData.averageCheck}
                                                onChange={handleInputChange}
                                                className={`${styles.select} ${errors.averageCheck ? styles.inputError : ""}`}
                                            >
                                                <option value="">Select range</option>
                                                <option value="500-800">₹500 - ₹800</option>
                                                <option value="800-1200">₹800 - ₹1,200</option>
                                                <option value="1200-1800">₹1,200 - ₹1,800</option>
                                                <option value="1800-2500">₹1,800 - ₹2,500</option>
                                                <option value="2500+">₹2,500+</option>
                                            </select>
                                            {errors.averageCheck && (
                                                <span className={styles.error}>{errors.averageCheck}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="currentOffers" className={styles.label}>
                                            Current Offers with Banks/Cards
                                        </label>
                                        <textarea
                                            id="currentOffers"
                                            name="currentOffers"
                                            value={formData.currentOffers}
                                            onChange={handleInputChange}
                                            className={styles.textarea}
                                            placeholder="Do you have any existing partnerships with banks or card providers? (optional)"
                                            rows={2}
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="howDidYouHear" className={styles.label}>
                                            How did you hear about us?
                                        </label>
                                        <select
                                            id="howDidYouHear"
                                            name="howDidYouHear"
                                            value={formData.howDidYouHear}
                                            onChange={handleInputChange}
                                            className={styles.select}
                                        >
                                            <option value="">Select option</option>
                                            {hearAboutOptions.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="additionalNotes" className={styles.label}>
                                            Additional Notes
                                        </label>
                                        <textarea
                                            id="additionalNotes"
                                            name="additionalNotes"
                                            value={formData.additionalNotes}
                                            onChange={handleInputChange}
                                            className={styles.textarea}
                                            placeholder="Anything else you'd like us to know?"
                                            rows={3}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Form Actions */}
                            <div className={styles.formActions}>
                                {currentStep > 1 && (
                                    <button
                                        type="button"
                                        onClick={handlePrev}
                                        className={styles.prevButton}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="15 18 9 12 15 6" />
                                        </svg>
                                        Previous
                                    </button>
                                )}

                                {currentStep < totalSteps ? (
                                    <button
                                        type="button"
                                        onClick={handleNext}
                                        className={styles.nextButton}
                                    >
                                        Next Step
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className={styles.submitButton}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className={styles.spinner} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                                                    <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                                                </svg>
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                Submit Application
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
