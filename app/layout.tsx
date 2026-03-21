import React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import Script from "next/script"
import "./globals.css"
import { Footer } from "@/components/footer"

// Gotham font 
const gotham = localFont({
  src: [
    {
      path: "../public/fonts/Gotham-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Gotham-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Gotham-Bold.otf",
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
    "Restaurant intelligence company. AI agents that unify POS, delivery, inventory, labor, and review data into revenue-driving actions.",
  keywords: [
    "Kutlerri",
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
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Kutlerri — AI Agents for Restaurant Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kutlerri",
    images: ["/images/og-default.png"],
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
      <head>
        <meta name="msvalidate.01" content="078EE65FB1EDC05D717F091FB3DD9E36" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-11Y1CTW5G2"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-11Y1CTW5G2');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vx8ymzlg72");
          `}
        </Script>
      </head>
      <body className={`${gotham.variable} ${avantGarde.variable} antialiased`}>
        {/* Organization JSON-LD — tells Google "Kutlerri" is a company/brand, not "cutlery" */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kutlerri",
              alternateName: ["Kutlerri Inc", "kutlerri"],
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
              alternateName: "Kutlerri",
              url: "https://kutlerri.ai",
            }),
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  )
}
