"use client";

import { useState } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
    {
        id: 1,
        quote:
            "Since partnering with Rewenue, we've seen a 30% increase in weekday dinner covers. The premium cardholders they bring are exactly the clientele we want — discerning diners who appreciate quality.",
        author: "Rahul Sharma",
        role: "Owner",
        restaurant: "Olive Bistro",
        location: "Mumbai",
        category: "Fine Dining",
        rating: 5,
        image: "/testimonials/restaurant-1.jpg",
    },
    {
        id: 2,
        quote:
            "No upfront costs was a game-changer for us. We were hesitant about discount platforms, but Rewenue's performance-based model meant zero risk. Our revenue is up, not down.",
        author: "Priya Menon",
        role: "Co-founder",
        restaurant: "The Daily Grind",
        location: "Bangalore",
        category: "Café & Lounge",
        rating: 5,
        image: "/testimonials/restaurant-2.jpg",
    },
    {
        id: 3,
        quote:
            "The quality of customers Rewenue brings is exceptional. They're not bargain hunters — they're premium cardholders who spend well and often become regulars.",
        author: "Amit Patel",
        role: "General Manager",
        restaurant: "Saffron Tales",
        location: "Delhi NCR",
        category: "Premium Casual",
        rating: 5,
        image: "/testimonials/restaurant-3.jpg",
    },
];

export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <span className={styles.eyebrow}>Partner Success Stories</span>
                    <h2 className={styles.title}>
                        Trusted by Premium Restaurants
                    </h2>
                    <p className={styles.subtitle}>
                        Hear from restaurant partners who have grown their business with Rewenue.
                    </p>
                </header>

                {/* Desktop Grid */}
                <div className={styles.desktopGrid}>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={styles.card}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={styles.rating}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                ))}
                            </div>
                            <blockquote className={styles.quote}>
                                "{testimonial.quote}"
                            </blockquote>
                            <div className={styles.author}>
                                <div className={styles.authorAvatar}>
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div className={styles.authorInfo}>
                                    <div className={styles.authorName}>{testimonial.author}</div>
                                    <div className={styles.authorRole}>
                                        {testimonial.role}, {testimonial.restaurant}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.meta}>
                                <span className={styles.location}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    {testimonial.location}
                                </span>
                                <span className={styles.category}>{testimonial.category}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className={styles.mobileCarousel}>
                    <div className={styles.carouselTrack}>
                        <div
                            className={styles.carouselSlider}
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className={styles.carouselSlide}>
                                    <div className={styles.card}>
                                        <div className={styles.rating}>
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                </svg>
                                            ))}
                                        </div>
                                        <blockquote className={styles.quote}>
                                            "{testimonial.quote}"
                                        </blockquote>
                                        <div className={styles.author}>
                                            <div className={styles.authorAvatar}>
                                                {testimonial.author.charAt(0)}
                                            </div>
                                            <div className={styles.authorInfo}>
                                                <div className={styles.authorName}>{testimonial.author}</div>
                                                <div className={styles.authorRole}>
                                                    {testimonial.role}, {testimonial.restaurant}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.meta}>
                                            <span className={styles.location}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                    <circle cx="12" cy="10" r="3" />
                                                </svg>
                                                {testimonial.location}
                                            </span>
                                            <span className={styles.category}>{testimonial.category}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carousel Controls */}
                    <div className={styles.carouselControls}>
                        <button
                            className={styles.carouselButton}
                            onClick={prevTestimonial}
                            aria-label="Previous testimonial"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>
                        <div className={styles.carouselDots}>
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`${styles.carouselDot} ${index === activeIndex ? styles.active : ""}`}
                                    onClick={() => setActiveIndex(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            className={styles.carouselButton}
                            onClick={nextTestimonial}
                            aria-label="Next testimonial"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
