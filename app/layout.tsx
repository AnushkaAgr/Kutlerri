import React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Footer } from "@/components/footer"

// Gotham font
const gotham = localFont({
  src: [
    {
      path: "../public/fonts/Gotham-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Gotham-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Gotham-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gotham",
})

// AvantGarde font (replacing Garnett)
const avantGarde = localFont({
  src: [
    {
      path: "../public/fonts/AVGARDD2.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avantgarde",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://kutlerri.ai"),
  title: {
    default: "Kutlerri — Restaurant Growth Backed by Data",
    template: "%s | Kutlerri",
  },
  description:
    "Kutlerri is a restaurant intelligence company. AI agents that unify POS, delivery, inventory, labor, and review data into daily revenue-driving and cost-cutting actions.",
  keywords: [
    "Kutlerri",
    "Kutlerri AI",
    "Kutlerri restaurant",
    "restaurant AI agents",
    "restaurant data analytics",
    "restaurant revenue growth",
    "restaurant cost control",
  ],
  openGraph: {
    siteName: "Kutlerri",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@kutlerri",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${gotham.variable} ${avantGarde.variable} antialiased`}>
        {/* Organization JSON-LD — tells Google "Kutlerri" is a company/brand, not "cutlery" */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kutlerri",
              alternateName: ["Kutlerri AI", "Restaurant Intelligence System"],
              url: "https://kutlerri.ai",
              logo: "https://kutlerri.ai/icon.svg",
              description:
                "Kutlerri is a restaurant intelligence company building AI agents for revenue growth and prime cost control.",
              foundingDate: "2024",
              sameAs: [
                // Add your actual social profile URLs here:
                // "https://www.linkedin.com/company/kutlerri",
                // "https://twitter.com/kutlerri",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                url: "https://kutlerri.ai/get-a-demo",
              },
            }),
          }}
        />
        {/* WebSite JSON-LD — enables sitelinks search and brand recognition */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Kutlerri",
              alternateName: "Restaurant Intelligence System",
              url: "https://kutlerri.ai",
            }),
          }}
        />
        {/* SoftwareApplication JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Kutlerri",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              url: "https://kutlerri.ai",
              description:
                "AI agents that unify POS, delivery, inventory, labor, and review data into daily revenue-driving and cost-cutting actions for restaurant operators.",
              offers: {
                "@type": "Offer",
                url: "https://kutlerri.ai/get-a-demo",
                availability: "https://schema.org/OnlineOnly",
              },
            }),
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  )
}
