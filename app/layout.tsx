import React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

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
  title: "Kutlerri- Restaurant growth backed by data. ",
  description:
    "Restaurant growth backed by data.",
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
        {children}
      </body>
    </html>
  )
}
