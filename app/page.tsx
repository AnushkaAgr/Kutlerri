import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeatureCards } from "@/components/feature-cards"
import { GrowthSection } from "@/components/growth-section"
import { QuestionsSection } from "@/components/questions-section"
import { ManagedServices } from "@/components/managed-services"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agents for Restaurant Revenue Growth & Cost Control | Kutlerri",
  description:
    "Kutlerri unifies POS, delivery, inventory, labor, and review data into daily revenue-driving and cost-cutting actions.",
  keywords: [
    "Restaurant AI agents",
    "Restaurant revenue growth",
    "Restaurant cost control",
    "Restaurant data analytics",
    "AI for restaurants",
  ],
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
