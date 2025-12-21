import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rewenue.com"),
  title: {
    default: "Rewenue - Partner With India's Premium Dining Network",
    template: "%s | Rewenue",
  },
  description:
    "Join Rewenue's premium dining network and get access to verified, high-spending cardholders. Zero registration fee. Zero commission. 100% risk-free.",
  keywords: [
    "restaurant partner program",
    "premium dining network",
    "credit card dining offers",
    "restaurant marketing",
    "increase restaurant footfall",
    "restaurant partners India",
    "fine dining partnership",
    "zero commission restaurant platform",
  ],
  authors: [{ name: "Rewenue" }],
  creator: "Rewenue",
  publisher: "Rewenue",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rewenue.com",
    siteName: "Rewenue",
    title: "Rewenue - Partner With India's Premium Dining Network",
    description:
      "Join India's fastest-growing premium dining network. Access verified, high-spending cardholders with zero fees and zero commission.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rewenue - Premium Dining Network for Restaurants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rewenue - Partner With India's Premium Dining Network",
    description:
      "Join India's fastest-growing premium dining network. Zero fees. Zero commission. 100% risk-free.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF6B35" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rewenue",
              description:
                "India's premium dining network connecting restaurants with verified, high-spending cardholders.",
              url: "https://rewenue.com",
              logo: "https://rewenue.com/logo.png",
              foundingDate: "2024",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              sameAs: [
                "https://linkedin.com/company/rewenue",
                "https://twitter.com/rewenue",
                "https://instagram.com/rewenue",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["English", "Hindi"],
              },
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
