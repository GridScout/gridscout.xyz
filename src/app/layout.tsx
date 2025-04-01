import "~/styles/globals.css";

import { Poppins } from "next/font/google";
import { type Metadata, type Viewport } from "next";
import BackgroundGradients from "~/components/BackgroundGradients";

// Initialise Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

// Site information for SEO
const siteConfig = {
  name: "GridScout",
  title: "GridScout ∙ The fastest F1 Discord bot",
  description:
    "GridScout is the only motorsports bot you'll ever need to discover. Get F1 stats, race notifications, and more directly in your Discord server.",
  url: "https://gridscout.xyz",
  twitterUsername: "@GridScoutBot",
  locale: "en",
};

// Define viewport export (for theme color)
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#26252C" },
    { media: "(prefers-color-scheme: dark)", color: "#26252C" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// Schema.org structured data for rich search results
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: siteConfig.name,
  description: siteConfig.description,
  applicationCategory: "DiscordBot, SportsBot",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  creator: {
    "@type": "Organization",
    name: "GridScout Team",
    url: siteConfig.url,
  },
  // Add legal information
  termsOfService: `${siteConfig.url}/terms`,
  "http://purl.org/dc/terms/hasVersion": "1.0",
  "http://purl.org/dc/terms/hasPolicy": [
    {
      "@id": `${siteConfig.url}/privacy`,
      "@type": "http://purl.org/dc/terms/PrivacyPolicy",
    },
    {
      "@id": `${siteConfig.url}/terms`,
      "@type": "http://purl.org/dc/terms/TermsOfService",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,

  applicationName: siteConfig.name,
  authors: [{ name: "GridScout Team" }],
  generator: "Next.js",
  keywords: [
    "GridScout",
    "F1",
    "Formula 1",
    "Discord Bot",
    "Racing",
    "Motorsports",
    "GridScout",
    "Statistics",
    "F1 Bot",
    "F1 Discord Bot",
    "F1 Bot",
    "F1 Stats",
    "F1 Notifications",
    "F1 Discord",
  ],
  referrer: "origin-when-cross-origin",
  creator: "GridScout Team",
  publisher: "GridScout",
  category: "Technology",

  icons: [{ rel: "icon", url: "/favicon.ico" }],

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/banner.png`,
        width: 1200,
        height: 630,
        alt: "GridScout - The fastest F1 Discord bot",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterUsername,
    images: [`${siteConfig.url}/images/banner.png`],
  },

  // Robots
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

  // Legal metadata
  alternates: {
    canonical: "/",
    types: {
      "application/pdf": [
        {
          url: `${siteConfig.url}/terms`,
          title: "Terms of Service",
        },
        {
          url: `${siteConfig.url}/privacy`,
          title: "Privacy Policy",
        },
      ],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        {/* Schema.org structured data for rich search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          defer
          src="https://web.maxmoon.sh/script.js"
          data-website-id="049d4079-3bec-476b-a28c-877dd19d999c"
        ></script>
      </head>
      <body className="relative bg-background font-sans text-white">
        <BackgroundGradients />
        {children}
      </body>
    </html>
  );
}
