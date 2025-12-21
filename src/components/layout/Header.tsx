"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
                <div className={styles.container}>
                    <Link href="/" className={styles.logo} aria-label="Rewenue Home">
                        <svg
                            width="40"
                            height="40"
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

                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.navLink}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className={styles.actions}>
                        <Link href="/register" className={styles.ctaButton}>
                            Partner With Us
                            <svg
                                width="16"
                                height="16"
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
                    </div>

                    <button
                        className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ""}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className={styles.hamburgerLine} />
                        <span className={styles.hamburgerLine} />
                        <span className={styles.hamburgerLine} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.open : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ""}`}>
                <nav className={styles.mobileNav}>
                    <ul className={styles.mobileNavList}>
                        {navLinks.map((link, index) => (
                            <li
                                key={link.href}
                                className={styles.mobileNavItem}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <Link
                                    href={link.href}
                                    className={styles.mobileNavLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.mobileCta}>
                        <Link
                            href="/register"
                            className={styles.mobileCtaButton}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
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
                    </div>
                </nav>
            </div>
        </>
    );
}
