import { AgentSection, type Agent } from "@/components/products/AgentSection"
import { ManagedServices } from "@/components/managed-services"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import RevenueImg from "@/public/images/ProductPage/ProductHero.png"
import { ProductHero } from "@/components/products/ProductHero"

const agentsData: Agent[] = [
  {
    id: "store-decision",
    title: "New Store Decision Agent",
    description:
      "The Expansion Fit & Go/No-Go Decision Agent helps you choose the right next location by learning what makes your current stores succeed, comparing that “success fingerprint” against each candidate trade area, and producing a clear Go/No-Go decision with conditions and risks.",
    image: "/images/agents/store-decision.png",
    imageAlt: "New store decision dashboard",
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
    ],
  },

  {
    id: "trade-area-demand",
    title: "Trade Area Demand Intelligence Agent",
    description:
      "The Trade Area Demand Heatmap & Forecast Agent estimates how much demand exists in each trade area, when it shows up by daypart and day-of-week",
    image: "/images/agents/trade-area.png",
    imageAlt: "Trade area demand heatmap dashboard",
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
    ],
  },
]



export default function Page() {
  return (
    <main className="">
      <Navbar />
      <ProductHero
        title="New Store Expansion Agent"
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
