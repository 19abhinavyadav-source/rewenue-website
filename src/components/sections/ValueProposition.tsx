import styles from "./ValueProposition.module.css";

const valueProps = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                <path d="M12 18V6" />
            </svg>
        ),
        title: "Zero Registration Fee",
        description: "Join our network completely free. No signup charges, no hidden costs, no upfront investment required.",
        highlight: "₹0",
        highlightLabel: "to get started",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        ),
        title: "Zero Marketing Spend",
        description: "Reach 50,000+ premium diners without spending a rupee on marketing. We handle all promotion for you.",
        highlight: "₹0",
        highlightLabel: "marketing spend",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: "Premium Cardholders",
        description: "Access verified diners from top banks. High spenders, guaranteed.",
        highlight: "50K+",
        highlightLabel: "verified diners",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: "Performance-Based Only",
        description: "We succeed when you succeed. Our model is 100% aligned with your growth — no risk, only results.",
        highlight: "100%",
        highlightLabel: "risk-free model",
    },
];

export function ValueProposition() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <span className={styles.eyebrow}>Why Partner With Rewenue</span>
                    <h2 className={styles.title}>
                        The Fairest Deal for Premium Restaurants
                    </h2>
                    <p className={styles.subtitle}>
                        We've eliminated every barrier that holds restaurants back. No fees, no
                        marketing spend, no risk — just growth.
                    </p>
                </header>

                <div className={styles.grid}>
                    {valueProps.map((prop, index) => (
                        <div
                            key={prop.title}
                            className={styles.card}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={styles.cardIcon}>{prop.icon}</div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{prop.title}</h3>
                                <p className={styles.cardDescription}>{prop.description}</p>
                            </div>
                            <div className={styles.cardHighlight}>
                                <span className={styles.highlightValue}>{prop.highlight}</span>
                                <span className={styles.highlightLabel}>{prop.highlightLabel}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
