import styles from "./HowItWorks.module.css";

const steps = [
    {
        number: "01",
        title: "Register Your Restaurant",
        description:
            "Fill out a simple form with your restaurant details. It takes less than 5 minutes. Our team will verify and onboard you within 48 hours.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="19" y1="8" x2="19" y2="14" />
                <line x1="22" y1="11" x2="16" y2="11" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Set Your Discount",
        description:
            "Choose the discount you're comfortable offering to premium cardholders. You control the terms — we just bring the customers.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                <path d="M12 18V6" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Welcome Premium Diners",
        description:
            "We drive verified, high-spending cardholders to your restaurant. Serve them as usual, and watch your revenue grow.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
    },
];

export function HowItWorks() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <span className={styles.eyebrow}>Simple 3-Step Process</span>
                    <h2 className={styles.title}>How Rewenue Works</h2>
                    <p className={styles.subtitle}>
                        Getting started is effortless. We've designed the process to be as
                        simple as possible, so you can focus on what you do best — serving
                        great food.
                    </p>
                </header>

                <div className={styles.stepsContainer}>
                    {/* Connection Line */}
                    <div className={styles.connectionLine} />

                    <div className={styles.steps}>
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className={styles.step}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className={styles.stepNumber}>{step.number}</div>
                                <div className={styles.stepIcon}>{step.icon}</div>
                                <div className={styles.stepContent}>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDescription}>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className={styles.bottomCta}>
                    <p className={styles.ctaText}>
                        Ready to grow your restaurant?
                    </p>
                    <a href="/register" className={styles.ctaButton}>
                        Get Started Free
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
