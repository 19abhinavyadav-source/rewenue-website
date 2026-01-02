import Link from "next/link";
import styles from "./CTA.module.css";

export function CTA() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot} />
                        <span>Limited Partner Slots Available</span>
                    </div>

                    <h2 className={styles.title}>
                        Ready to Grow Your Restaurant?
                    </h2>

                    <p className={styles.description}>
                        Join India's fastest-growing premium dining network. Start welcoming
                        verified, high-spending cardholders to your restaurant today.
                    </p>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span>Zero registration fee</span>
                        </div>
                        <div className={styles.feature}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span>Go live in 48 hours</span>
                        </div>
                        <div className={styles.feature}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span>Cancel anytime</span>
                        </div>
                    </div>

                    <div className={styles.ctaGroup}>
                        <Link href="/register" className={styles.primaryCta}>
                            Partner With Us Now
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link href="/contact" className={styles.secondaryCta}>
                            Schedule a Call
                        </Link>
                    </div>

                    <p className={styles.disclaimer}>
                        No credit card required. Cancel anytime.
                    </p>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className={styles.decorativeCircle1} />
            <div className={styles.decorativeCircle2} />
        </section>
    );
}
