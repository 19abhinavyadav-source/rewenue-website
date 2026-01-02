import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Features - Premium Dining Network for Restaurants",
    description:
        "Discover how Rewenue helps restaurants access verified premium cardholders, increase footfall, and grow revenue with zero fees and zero marketing spend.",
};

const features = [
    {
        id: "premium-diners",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: "Access Premium Cardholders",
        description:
            "Connect with verified, high-spending cardholders from India's leading banks. Our diners aren't bargain hunters — they're affluent customers who value quality dining experiences.",
        highlights: [
            "50,000+ verified premium cardholders",
            "40% higher average order value",
            "Customers from top banks and credit cards",
        ],
    },
    {
        id: "zero-fees",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                <path d="M12 18V6" />
            </svg>
        ),
        title: "Zero Fees, Zero Marketing Spend",
        description:
            "We've eliminated all barriers to entry. No registration fees, no monthly subscriptions, no hidden charges. You do not need to spend anything to market to these customers. We do it for you.",
        highlights: [
            "₹0 registration fee",
            "0% platform commission",
            "No hidden charges ever",
        ],
    },
    {
        id: "bank-partnerships",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
        ),
        title: "Bank Partner Network",
        description:
            "Leverage our partnerships with India's top banks to access their premium cardholder base. We handle all bank integrations and cardholder verification.",
        highlights: [
            "Direct partnerships with major banks",
            "Real-time cardholder verification",
            "Co-branded marketing support",
        ],
    },
    {
        id: "marketing",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
        title: "Marketing & Promotions",
        description:
            "We handle all customer acquisition and marketing. From bank communications to cardholder emails, we drive premium diners to your restaurant.",
        highlights: [
            "Featured in bank apps and communications",
            "Targeted email campaigns",
            "Social media promotions",
        ],
    },
    {
        id: "flexibility",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
        ),
        title: "Full Control & Flexibility",
        description:
            "You decide the discount, the days, and the terms. Adjust your offers based on seasonality, capacity, and business needs. Cancel anytime with 30 days notice.",
        highlights: [
            "Set your own discount terms",
            "No lock-in contracts",
            "Adjust or pause anytime",
        ],
    },
    {
        id: "analytics",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
        ),
        title: "Performance Analytics",
        description:
            "Track your success with detailed analytics. See how many premium diners visit your restaurant, their spending patterns, and your growth over time.",
        highlights: [
            "Real-time redemption tracking",
            "Customer insights dashboard",
            "Monthly performance reports",
        ],
        comingSoon: true,
    },
];

export default function FeaturesPage() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {/* Header */}
                <header className={styles.header}>
                    <span className={styles.eyebrow}>Platform Features</span>
                    <h1 className={styles.title}>
                        Everything You Need to <br />
                        <span>Grow Your Restaurant</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Rewenue provides all the tools, partnerships, and support you need to
                        attract premium diners and increase your revenue — with zero upfront costs.
                    </p>
                </header>

                {/* Features Grid */}
                <div className={styles.features}>
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className={styles.featureCard}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={styles.featureIcon}>{feature.icon}</div>
                            <div className={styles.featureContent}>
                                <div className={styles.featureHeader}>
                                    <h2 className={styles.featureTitle}>{feature.title}</h2>
                                    {feature.comingSoon && (
                                        <span className={styles.comingSoon}>Coming Soon</span>
                                    )}
                                </div>
                                <p className={styles.featureDescription}>{feature.description}</p>
                                <ul className={styles.featureHighlights}>
                                    {feature.highlights.map((highlight, i) => (
                                        <li key={i}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className={styles.ctaSection}>
                    <h2 className={styles.ctaTitle}>Ready to experience these features?</h2>
                    <p className={styles.ctaDescription}>
                        Join Rewenue today and start welcoming premium diners to your restaurant.
                    </p>
                    <div className={styles.ctaButtons}>
                        <Link href="/register" className={styles.primaryCta}>
                            Partner With Us
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link href="/contact" className={styles.secondaryCta}>
                            Schedule a Call
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
