import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import dynamic from "next/dynamic"
import type { Metadata } from "next";

const GrowthSection = dynamic(() => import("@/components/growth-section").then(mod => ({ default: mod.GrowthSection })))
const QuestionsSection = dynamic(() => import("@/components/questions-section").then(mod => ({ default: mod.QuestionsSection })))
const ManagedServices = dynamic(() => import("@/components/managed-services").then(mod => ({ default: mod.ManagedServices })))

export const metadata: Metadata = {
  title: "AI Agents for Restaurant Revenue Growth & Cost Control",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Which nearby businesses are most likely to order catering in the next 30-60 days?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kutlerri's Catering Growth Agent maps catering demand within a 5-mile radius of each location, filters businesses by fit for your menu and price point, and segments prospects by catering potential so you know exactly who to target.",
                },
              },
              {
                "@type": "Question",
                name: "What do guests ask for that we don't offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kutlerri's Demand Driven Menu Agent analyzes competitor menus against local demand trends, breaks down demand patterns by time and channel, and identifies gaps between what customers want and what your menu currently offers.",
                },
              },
              {
                "@type": "Question",
                name: "Why did our rating drop this week?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kutlerri's Online Reputation Agent tracks ratings and reviews over time, connects rating changes to real operational problems, and identifies drop patterns so you can fix issues before they impact visibility and orders.",
                },
              },
              {
                "@type": "Question",
                name: "Which ingredient is the biggest waste dollar driver?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kutlerri's Waste Control Agent collects and maps waste by item, ingredient, and location, identifies the biggest repeat waste drivers, and quantifies waste impact on food cost and margins.",
                },
              },
              {
                "@type": "Question",
                name: "Where is overtime coming from?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kutlerri's Labor Cost Optimization Agent maps overtime, long shifts, and idle hours by role and shift, identifies high-risk overtime windows, and highlights where schedule tweaks reduce cost without hurting service.",
                },
              },
            ],
          }),
        }}
      />
      <Navbar />
      <Hero />
      {/* <FeatureCards /> */}
      <GrowthSection />
      <QuestionsSection />
      <ManagedServices />

    </main>
  )
}
