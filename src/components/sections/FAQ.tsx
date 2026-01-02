"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
    {
        id: 1,
        question: "Is it really free to join Rewenue?",
        answer:
            "Absolutely! There are no registration fees, no setup charges, and no monthly subscriptions. You only offer a discount to cardholders — and that investment comes back as increased footfall and higher average check sizes.",
    },
    {
        id: 2,
        question: "What discount do I need to offer?",
        answer:
            "You decide the discount that works for your restaurant. Typically, partners offer 15-25% off on food and beverages. The discount you offer is entirely your choice, and you can adjust it based on performance and seasonality.",
    },
    {
        id: 3,
        question: "How long does the onboarding process take?",
        answer:
            "The onboarding process is simple and quick. Once you submit your registration form, our team will verify your details and typically complete onboarding within 48-72 hours. You'll be live and ready to welcome premium diners in no time.",
    },
    {
        id: 4,
        question: "Can I cancel my partnership anytime?",
        answer:
            "Yes, there are no lock-in periods or cancellation fees. You can pause or end your partnership at any time with 30 days notice. We believe in earning your partnership through performance, not contracts.",
    },
    {
        id: 5,
        question: "What kind of restaurants do you partner with?",
        answer:
            "We focus on premium dining establishments — fine dining restaurants, upscale casual dining, premium cafés, lounges, and bars. If you're a quality-focused restaurant that values premium clientele, we'd love to partner with you.",
    },
    {
        id: 6,
        question: "How much do you charge from restaurants?",
        answer:
            "We only charge when you make money that is when customers with particular credit cards dine at your restaurant. For this we charge 5% of the amount spent by the customer (excluding taxes and tips). There are no upfront costs, registration fees, or hidden charges.",
    },
    {
        id: 7,
        question: "How do I track the performance of my Rewenue partnership?",
        answer:
            "We're building a comprehensive partner dashboard where you'll be able to track redemptions, customer insights, and performance metrics. Until then, our partner success team provides regular performance reports and insights.",
    },
];

export function FAQ() {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <span className={styles.eyebrow}>Got Questions?</span>
                    <h2 className={styles.title}>Frequently Asked Questions</h2>
                    <p className={styles.subtitle}>
                        Everything you need to know about partnering with Rewenue. Can't find
                        what you're looking for? <a href="/contact" className={styles.contactLink}>Contact us</a>.
                    </p>
                </header>

                <div className={styles.faqList}>
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className={`${styles.faqItem} ${openId === faq.id ? styles.open : ""}`}
                        >
                            <button
                                className={styles.faqQuestion}
                                onClick={() => toggleFAQ(faq.id)}
                                aria-expanded={openId === faq.id}
                            >
                                <span>{faq.question}</span>
                                <span className={styles.faqIcon}>
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
                                        <line x1="12" y1="5" x2="12" y2="19" className={styles.verticalLine} />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </span>
                            </button>
                            <div className={styles.faqAnswer}>
                                <div className={styles.faqAnswerInner}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
