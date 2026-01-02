import styles from "./Benefits.module.css";

const benefits = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: "Verified Premium Diners",
        description: "Every customer is a verified cardholder from partner banks. No random discounts — only high-value customers.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        ),
        title: "Increased Footfall",
        description: "Our partner restaurants see an average 25% increase in new customer visits within the first 3 months.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        title: "Higher Average Order Value",
        description: "Premium cardholders spend 40% more on average. Your discounts convert to significantly higher overall revenue.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
        ),
        title: "Bank Partner Network",
        description: "Partnerships with leading banks gives you access to their premium cardholders.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
        title: "Marketing & Promotions",
        description: "We handle all marketing — from bank communications to cardholder outreach. You just serve great food.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                <path d="M22 12A10 10 0 0 0 12 2v10z" />
            </svg>
        ),
        title: "Performance Analytics",
        description: "Track your performance with our upcoming dashboard. See redemptions, customer insights, and growth metrics.",
        comingSoon: true,
    },
];

export function Benefits() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <span className={styles.eyebrow}>Benefits for Partners</span>
                    <h2 className={styles.title}>
                        Everything You Need to Grow
                    </h2>
                    <p className={styles.subtitle}>
                        Rewenue provides all the tools and support you need to attract premium
                        diners and increase your revenue.
                    </p>
                </header>

                <div className={styles.grid}>
                    {benefits.map((benefit, index) => (
                        <div
                            key={benefit.title}
                            className={styles.card}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={styles.cardIcon}>{benefit.icon}</div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.cardTitle}>{benefit.title}</h3>
                                    {benefit.comingSoon && (
                                        <span className={styles.comingSoon}>Coming Soon</span>
                                    )}
                                </div>
                                <p className={styles.cardDescription}>{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
