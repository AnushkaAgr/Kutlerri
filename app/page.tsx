import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import dynamic from "next/dynamic"
import type { Metadata } from "next";

const GrowthSection = dynamic(() => import("@/components/growth-section").then(mod => ({ default: mod.GrowthSection })))
const QuestionsSection = dynamic(() => import("@/components/questions-section").then(mod => ({ default: mod.QuestionsSection })))
const ManagedServices = dynamic(() => import("@/components/managed-services").then(mod => ({ default: mod.ManagedServices })))

export const metadata: Metadata = {
  title: "Kutlerri - AI Agents for Restaurant Operators",
  description:
    "Kutlerri turns your POS and delivery data into AI agents that grow revenue, cut costs, and de-risk expansion. Built for restaurant operators.",
  keywords: [
    "Kutlerri",
    "AI agents for restaurants",
    "Restaurant AI agents",
    "Restaurant revenue growth",
    "Restaurant cost control",
    "Restaurant data analytics",
    "AI for restaurants",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kutlerri - AI Agents Built for Restaurant Operations",
    description:
      "From upsells to labor forecasting, Kutlerri's task-focused AI agents give operators actionable guidance — not more dashboards.",
    url: "https://kutlerri.ai",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      {/* <FeatureCards /> */}
      <GrowthSection />
      <QuestionsSection />
      <ManagedServices />

    </main>
  )
}
