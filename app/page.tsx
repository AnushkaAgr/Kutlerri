import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import dynamic from "next/dynamic"
import type { Metadata } from "next";

const GrowthSection = dynamic(() => import("@/components/growth-section").then(mod => ({ default: mod.GrowthSection })))
const QuestionsSection = dynamic(() => import("@/components/questions-section").then(mod => ({ default: mod.QuestionsSection })))
const ManagedServices = dynamic(() => import("@/components/managed-services").then(mod => ({ default: mod.ManagedServices })))

export const metadata: Metadata = {
  title: "AI Agents for Restaurant Revenue Growth & Cost Control | Kutlerri",
  description:
    "Kutlerri unifies POS, delivery, inventory, labor, and review data into daily revenue-driving and cost-cutting actions.",
  keywords: [
    "Kutlerri",
    "Restaurant AI agents",
    "Restaurant revenue growth",
    "Restaurant cost control",
    "Restaurant data analytics",
    "AI for restaurants",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kutlerri | Restaurant AI Agents",
    description:
      "Turn scattered restaurant data into clear daily actions that reduce costs and increase revenue.",
    url: "https://kutlerri.ai",
    type: "website",
  },
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
