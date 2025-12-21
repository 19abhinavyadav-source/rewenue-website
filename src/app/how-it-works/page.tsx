import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "How It Works - Partner with Rewenue",
    description:
        "Learn how easy it is to partner with Rewenue. Register in 5 minutes, set your discount, and start welcoming premium cardholders to your restaurant.",
};

const steps = [
    {
        number: 1,
        title: "Register Your Restaurant",
        description:
            "Fill out our simple online form with your restaurant details. It takes less than 5 minutes to complete. No documents needed at this stage.",
        details: [
            "Basic restaurant information",
            "Contact details",
            "Location and cuisine type",
            "Seating capacity and average check",
        ],
        duration: "5 minutes",
    },
    {
        number: 2,
        title: "Verification & Onboarding",
        description:
            "Our team reviews your application and verifies your restaurant details. We'll contact you to understand your needs and explain the program.",
        details: [
            "Application review within 24 hours",
            "Quick verification call",
            "Program briefing",
            "Terms discussion",
        ],
        duration: "24-48 hours",
    },
    {
        number: 3,
        title: "Set Your Discount",
        description:
            "Choose the discount you're comfortable offering to premium cardholders. You have full control over the terms — days, times, and discount percentage.",
        details: [
            "Choose your discount percentage",
            "Set applicable days and times",
            "Define any exclusions",
            "Flexible to adjust anytime",
        ],
        duration: "You decide",
    },
    {
        number: 4,
        title: "Go Live",
        description:
            "Your restaurant is added to our network and visible to thousands of premium cardholders. We handle all marketing and customer acquisition.",
        details: [
            "Listed on bank apps and portals",
            "Featured in email campaigns",
            "Included in promotions",
            "Start receiving customers",
        ],
        duration: "Immediate",
    },
    {
        number: 5,
        title: "Welcome Premium Diners",
        description:
            "Verified cardholders visit your restaurant, show their eligible card, and enjoy the discount. You serve them as usual — we handle the rest.",
        details: [
            "Easy card verification",
            "Seamless customer experience",
            "No special POS integration needed",
            "Simple redemption process",
        ],
        duration: "Ongoing",
    },
    {
        number: 6,
        title: "Grow & Earn",
        description:
            "Watch your footfall increase and revenue grow. Track your performance and optimize your offers based on results.",
        details: [
            "Track redemptions",
            "Monitor performance",
            "Adjust offers as needed",
            "Scale your partnership",
        ],
        duration: "Continuous",
    },
];

const faqs = [
    {
        question: "How long does the entire process take?",
        answer:
            "From registration to going live, the entire process typically takes 2-3 business days. Most of that time is our verification process — your part takes just 5 minutes.",
    },
    {
        question: "Do I need any special equipment or software?",
        answer:
            "No special equipment or POS integration is required. Customers simply show their eligible card, and you apply the discount manually. It's that simple.",
    },
    {
        question: "Can I change my discount after going live?",
        answer:
            "Absolutely! You have full control over your discount terms. You can adjust the percentage, applicable days, or even pause your participation at any time.",
    },
    {
        question: "What if I want to pause or cancel?",
        answer:
            "You can pause or cancel your partnership at any time with 30 days notice. There are no lock-in contracts or cancellation fees.",
    },
];

export default function HowItWorksPage() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {/* Header */}
                <header className={styles.header}>
                    <span className={styles.eyebrow}>Getting Started</span>
                    <h1 className={styles.title}>How Rewenue Works</h1>
                    <p className={styles.subtitle}>
                        From registration to welcoming your first premium diner — here's how
                        easy it is to partner with Rewenue.
                    </p>
                </header>

                {/* Timeline */}
                <div className={styles.timeline}>
                    {steps.map((step, index) => (
                        <div key={step.number} className={styles.timelineItem}>
                            <div className={styles.timelineMarker}>
                                <span className={styles.stepNumber}>{step.number}</span>
                                {index < steps.length - 1 && <div className={styles.timelineLine} />}
                            </div>
                            <div className={styles.timelineContent}>
                                <div className={styles.stepHeader}>
                                    <h2 className={styles.stepTitle}>{step.title}</h2>
                                    <span className={styles.stepDuration}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                        {step.duration}
                                    </span>
                                </div>
                                <p className={styles.stepDescription}>{step.description}</p>
                                <ul className={styles.stepDetails}>
                                    {step.details.map((detail, i) => (
                                        <li key={i}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick CTA */}
                <div className={styles.quickCta}>
                    <div className={styles.quickCtaContent}>
                        <h2>Ready to get started?</h2>
                        <p>Join in less than 5 minutes. No documents required.</p>
                    </div>
                    <Link href="/register" className={styles.quickCtaButton}>
                        Register Now
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* FAQ Section */}
                <div className={styles.faqSection}>
                    <h2 className={styles.faqTitle}>Common Questions</h2>
                    <div className={styles.faqGrid}>
                        {faqs.map((faq, index) => (
                            <div key={index} className={styles.faqCard}>
                                <h3>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
