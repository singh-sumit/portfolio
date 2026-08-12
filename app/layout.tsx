import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Providers } from "@/app/providers";
import { basics } from "@/app/content/basics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteOrigin = "https://singh-sumit.github.io";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = `${siteOrigin}${basePath}`;
const siteTitle = `${basics.name} — ${basics.title}`;
const siteDescription = basics.summary;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s · ${basics.name}`,
  },
  description: siteDescription,
  keywords: [
    "Sumit Kumar Singh",
    "Senior Python Engineer",
    "Backend Engineer",
    "Drone Connectivity",
    "Elsight",
    "HeatSight",
    "xmlrpc-extended",
    "MQTT",
    "FastAPI",
    "Django",
    "Kubernetes",
    "Open Source",
  ],
  authors: [{ name: basics.name, url: siteUrl }],
  creator: basics.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: `${basics.name} · Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
};

function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: basics.name,
    jobTitle: basics.title,
    description: basics.summary,
    email: `mailto:${basics.email}`,
    telephone: basics.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    url: siteUrl,
    sameAs: basics.socials
      .filter((s) => s.key !== "mail" && s.key !== "whatsapp")
      .map((s) => s.href),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <PersonJsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
