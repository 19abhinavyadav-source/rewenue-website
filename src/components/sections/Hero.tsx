import Link from "next/link";
import styles from "./Hero.module.css";

const stats = [
    { value: "500+", label: "Partner Restaurants" },
    { value: "₹10Cr+", label: "Monthly Transactions" },
    { value: "50K+", label: "Premium Diners" },
];

export function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background Elements */}
            <div className={styles.backgroundPattern} />
            <div className={styles.gradientOrb1} />
            <div className={styles.gradientOrb2} />

            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Badge */}
                    <div className={styles.badge}>
                        <span className={styles.badgeDot} />
                        <span>India's Premium Dining Network</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className={styles.headline}>
                        Grow Your Restaurant with{" "}
                        <span className={styles.highlight}>Premium Diners</span>
                    </h1>

                    {/* Subheadline */}
                    <p className={styles.subheadline}>
                        Partner with Rewenue to access verified, high-spending cardholders from
                        leading banks. <strong>Zero registration fee. Zero marketing spend.</strong>{" "}
                        Only pay for results.
                    </p>

                    {/* CTA Buttons */}
                    <div className={styles.ctaGroup}>
                        <Link href="/register" className={styles.primaryCta}>
                            Partner With Us
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link href="/how-it-works" className={styles.secondaryCta}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <polygon points="10 8 16 12 10 16 10 8" />
                            </svg>
                            See How It Works
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className={styles.trustBadges}>
                        <div className={styles.trustItem}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span>100% Risk-Free</span>
                        </div>
                        <div className={styles.trustItem}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span>No Upfront Fees</span>
                        </div>
                        <div className={styles.trustItem}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span>Cancel Anytime</span>
                        </div>
                    </div>
                </div>

                {/* Hero Visual/Stats */}
                <div className={styles.visualSection}>
                    <div className={styles.statsCard}>
                        <div className={styles.statsHeader}>
                            <div className={styles.statsIcon}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <span>Revenue Growth</span>
                        </div>
                        <div className={styles.statsValue}>+35%</div>
                        <div className={styles.statsLabel}>Average increase in monthly revenue</div>
                        <div className={styles.statsChart}>
                            <div className={styles.chartBar} style={{ height: "40%" }} />
                            <div className={styles.chartBar} style={{ height: "55%" }} />
                            <div className={styles.chartBar} style={{ height: "45%" }} />
                            <div className={styles.chartBar} style={{ height: "70%" }} />
                            <div className={styles.chartBar} style={{ height: "60%" }} />
                            <div className={styles.chartBar} style={{ height: "85%" }} />
                            <div className={styles.chartBar} style={{ height: "100%" }} />
                        </div>
                    </div>

                    {/* Floating Stats */}
                    <div className={styles.floatingStats}>
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={styles.floatingStat}
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className={styles.floatingStatValue}>{stat.value}</div>
                                <div className={styles.floatingStatLabel}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <div className={styles.scrollMouse}>
                    <div className={styles.scrollWheel} />
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    );
}
