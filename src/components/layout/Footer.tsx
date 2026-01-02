import Link from "next/link";
import styles from "./Footer.module.css";

const footerLinks = {
    product: [
        { href: "/features", label: "Features" },
        { href: "/how-it-works", label: "How It Works" },
        { href: "/register", label: "Partner With Us" },
    ],
    company: [
        { href: "/contact", label: "Contact" },
    ],
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        <Link href="/" className={styles.logo}>
                            <svg
                                width="36"
                                height="36"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={styles.logoIcon}
                            >
                                <rect width="40" height="40" rx="10" fill="currentColor" />
                                <path
                                    d="M12 12H20C23.3137 12 26 14.6863 26 18C26 20.2091 24.8091 22.1574 23 23.197V23.197L28 28H23L18.5 23.5H16V28H12V12ZM16 20H20C21.1046 20 22 19.1046 22 18C22 16.8954 21.1046 16 20 16H16V20Z"
                                    fill="white"
                                />
                            </svg>
                            <span className={styles.logoText}>Rewenue</span>
                        </Link>
                        <p className={styles.brandDescription}>
                            India's premium dining network connecting restaurants with verified,
                            high-spending cardholders. Zero fees. Zero Marketing Spend
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>Product</h4>
                        <ul className={styles.linkList}>
                            {footerLinks.product.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>Company</h4>
                        <ul className={styles.linkList}>
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        © {currentYear} Rewenue. All rights reserved.
                    </p>
                    <p className={styles.madeIn}>
                        Made with ❤️ in India
                    </p>
                </div>
            </div>
        </footer>
    );
}
