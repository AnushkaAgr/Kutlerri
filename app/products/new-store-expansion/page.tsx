import { AgentSection, type Agent } from "@/components/products/AgentSection"
import { ManagedServices } from "@/components/managed-services"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import RevenueImg from "@/public/images/AgentGraphs/NewStoreExpansion.webp"
import { ProductHero } from "@/components/products/ProductHero"
import StoreSuccessImg from "@/public/images/AgentGraphs/NewStoreDecision.webp"
import TradeAreaMatchImg from "@/public/images/AgentGraphs/TradeAreaDemand.webp"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Store Expansion Intelligence | Kutlerri AI",
  description:
    "De-risk your next location with Kutlerri's AI agents for trade-area demand analysis and data-driven site selection built for restaurant operators.",
  keywords: [
    "restaurant site selection AI",
    "Trade area analysis software",
    "Restaurant expansion planning",
    "New store location intelligence",
    "Restaurant growth strategy",
  ],
  alternates: { canonical: "/products/new-store-expansion" },
  openGraph: {
    title: "Smarter Restaurant Expansion Starts With Better Data | Kutlerri",
    description:
      "Trade-area demand signals, cannibalization risk, and site scoring — Kutlerri's expansion agents turn data into confident location decisions.",
    url: "https://kutlerri.ai/products/new-store-expansion",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const agentsData: Agent[] = [
  {
    id: "new-store-decision",
    title: "New Store Decision Agent",
    description:
      "The Expansion Fit & Go/No-Go Decision Agent helps you choose the right next location by learning what makes your current stores succeed, comparing that “success fingerprint” against each candidate trade area, and producing a clear Go/No-Go decision with conditions and risks.",
    image: StoreSuccessImg,
    imageAlt: "Kutlerri new store expansion agent showing trade area heat map and site score",
    cards: [
      {
        title: "Store Success Blueprint Agent",
        items: [
          "Ingest historical performance from existing stores (sales, margins, channel mix, dayparts)",
          "Identify the strongest drivers of success by store type (In-Store, Delivery, Catering)",
          "Create archetypes of “winning store models” you can replicate",
        ],
      },
      {
        title: "Trade Area Match Agent",
        items: [
          "Compare each candidate trade area against your winning store archetypes",
          "Flag mismatches that typically break performance",
          "Gives a GO/NO-GO/GO-WITH-CONDITIONS per trade area",
        ],
      },
      {
        title: "Trade Area Scorecard Agent",
        items: [
          "Generate a one-page scorecard for each candidate trade area with 5–7 core metrics",
          "Roll them into a single Score (0–100) with a Go / No-Go label.",
          "Highlight the top 3 pros and top 3 risks for that area.",
        ],
      },
    ],
  },

  {
    id: "trade-area-demand-intelligence",
    title: "Trade Area Demand Intelligence Agent",
    description:
      "The Trade Area Demand Heatmap & Forecast Agent estimates how much demand exists in each trade area, when it shows up by daypart and day-of-week",
    image: TradeAreaMatchImg,
    imageAlt: "Demand map highlighting high-opportunity restaurant locations",
    cards: [
      {
        title: "Trade Area Demand Heatmap Agent",
        items: [
          "Build a Mon–Sun × daypart demand intensity map per trade area",
          "Identify peaks, dead zones, and demand consistency",
          "Highlight demand drivers behind the shape",
        ],
      },
      {
        title: "Channel Mix Forecasting Agent",
        items: [
          "Forecast demand split by channel (dine-in / pickup / delivery / catering)",
          "Predict how channel mix impacts operations (labor load, packaging costs, throughput)",
          "Flag channel risks (delivery-heavy areas that compress margins)",
        ],
      },
      {
        title: "Catering Demand Index Agent",
        items: [
          "Score catering demand using simple trade-area signals within 1/3/5 miles.",
          "Estimate catering volume and order size ranges for the area (low/medium/high).",
          "Highlight the top catering pockets and output a prioritized prospect list for outreach.",
        ],
      },
    ],
  },
]






export default function Page() {
  return (
    <main className="">
      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://kutlerri.ai" },
              { "@type": "ListItem", position: 2, name: "New Store Expansion Agents", item: "https://kutlerri.ai/products/new-store-expansion" },
            ],
          }),
        }}
      />
      <Navbar />
      <ProductHero
        title="New Store Expansion Agents"
        description="Our agents combine your existing store performance with trade-area demand, competition, catering demand, walkability, work population, home population, demographics to forecast sales, pressure-test unit economics, and deliver a clear Go/No-Go recommendations so you open in the right place with confidence, not guesswork"
        ctaText="See It In Action"
        image={RevenueImg}
        agents={[
          "Trade Area Demand Heatmap & Forecast Agent",
          "Expansion Fit & Go/No-Go Decision Agent",
          "Catering Demand Analysis Agent",
          "Competitive Density & Risk Agent",
        ]}
      />

      <AgentSection agents={agentsData} />
      <ManagedServices />
      {/* <Footer /> */}
    </main>

  )
}
