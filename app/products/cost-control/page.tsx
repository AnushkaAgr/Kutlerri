import { Navbar } from "@/components/navbar"
import { AgentSection, type Agent } from "@/components/products/AgentSection"

import { ProductHero } from "@/components/products/ProductHero"
import { ManagedServices } from "@/components/managed-services"
import { Footer } from "@/components/footer"
import RevenueImg from "@/public/images/ProductPage/CostControl.png"
import PrepForecastImg from "@/public/images/AgentGraphs/PrepForecastAgent.png"
import WasteControlImg from "@/public/images/AgentGraphs/WasteControlAgents.png"
import LaborOptimizationImg from "@/public/images/AgentGraphs/WorkforceManagement.png"
import MenuEngineeringImg from "@/public/images/AgentGraphs/MenuEngineeringAgent.png"
import MarketingSpendImg from "@/public/images/AgentGraphs/MarketingSpendDoorDash.png"


const agentsData: Agent[] = [
  {
    id: "waste-control",
    title: "Waste Control Agent",
    description:
      "The Waste Control Agents reduce food waste and avoidable cost by identifying where waste is coming from, why it repeats, and how prep and shelf-life practices can be corrected.",
    image: WasteControlImg,
    imageAlt: "Waste control dashboard",
    cards: [
      {
        title: "Structural Waste Detection Agent",
        items: [
          "Collects and maps waste by item, ingredient, and location",
          "Identifies the biggest and most repeat waste drivers",
          "Quantifies waste impact on food cost and margins",
        ],
      },
      {
        title: "Prep vs Demand Mismatch Agent",
        items: [
          "Compares prep quantities with what actually sells",
          "Identifies consistent over-prep and shortage patterns",
          "Links over-prep directly to waste and lost sales",
        ],
      },
      {
        title: "Shelf-Life Usage Agent",
        items: [
          "Documents shelf-life and holding limits by item and ingredient",
          "Measures real usage against allowed shelf life",
          "Calculates shelf-life loss in real dollars",
        ],
      },
    ],
  },

  {
    id: "prep-forecast",
    title: "Prep Forecast Agent",
    description:
      "The Demand-Led Prep Agents ensure your restaurant prepares the right items and ingredients in the right quantities by aligning prep planning with real demand patterns.",
    image: PrepForecastImg,
    imageAlt: "Prep forecast dashboard",
    cards: [
      {
        title: "Menu-Item Demand Forecasting Agent",
        items: [
          "Builds item-level demand patterns from historical sales",
          "Forecasts item demand by day and daypart",
          "Turns demand forecasts into prep-ready guidance",
        ],
      },
      {
        title: "Ingredient-Level Demand Forecasting Agent",
        items: [
          "Maps ingredient demand from item-level forecasts",
          "Adjusts for waste, prep loss, and safety buffers",
          "Guides smarter purchasing and par levels",
        ],
      },
      {
        title: "Stockout and 86 prevention Agent",
        items: [
          "86 event tracking by item and ingredients",
          "Root Cause classification for each 86",
          "Item and Ingredient level reorder triggers, buffer alerts",
        ],
      },
    ],
  },

  {
    id: "labor-cost-optimization",
    title: "Labor Cost Optimization Agent",
    description:
      "The Workforce Management Agents align staffing levels and roles with real customer demand to reduce overstaffing, understaffing, idle hours, and unnecessary overtime.",
    image: LaborOptimizationImg,
    imageAlt: "Labor optimization dashboard",
    cards: [
      {
        title: "Demand-Aligned Staffing Agent",
        items: [
          "Builds an hourly view of demand and staffing by role",
          "Detects overstaffing and understaffing patterns",
          "Highlights where staffing changes protect service and margin",
        ],
      },
      {
        title: "Labor Utilization Detection Agent",
        items: [
          "Maps overtime, long shifts, and idle hours by role and shift",
          "Identifies high-risk overtime and idle-labor windows",
          "Highlights where schedule tweaks reduce cost without hurting service",
        ],
      },
      {
        title: "Demand Based Schedule Generation Agent",
        items: [
          "Recommended demand-based schedule generation",
          "Start time and end-time optimization",
          "Impact Preview - Cost & Service Impact viewed together",
        ],
      },
    ],
  },

  {
    id: "menu-mix-&-margin-optimization",
    title: "Menu Mix & Margin Optimization ",
    description:
      "The Menu Engineering Agents improves menu profitability by identifying which items truly make money, which create hidden costs, and how menu items should be adjusted across channels.",
    image: MenuEngineeringImg,
    imageAlt: "Menu engineering dashboard",
    cards: [
      {
        title: "PMIX Profitability and Demand Agent",
        items: [
          "Builds and classifies your PMIX by demand and margin",
          "Validates PMIX performance by channel",
          "Identifies clear PMIX problems and opportunities.",
        ],
      },
      {
        title: "Channel Margin Leakage Agent",
        items: [
          "Compares item performance across channels",
          "Detects channel-driven cost and margin leakage",
          "Identifies items that should be pushed, fixed, or limited by channel",
        ],
      },
      {
        title: "Pricing & Promo Leakage Agent",
        items: [
          "Track PMIX under promos and discounts",
          "Identify Promo driven margin killers",
          "Set Promo eligibility guardrails from PMIX",
        ],
      },
    ],
  },

  {
    id: "doordash-spend-efficiency",
    title: "DoorDash Spend Efficiency Agent",
    description:
      "The Marketing Spend Efficiency Agents ensure promos and ads generate profitable orders without increasing refunds, errors, or visibility risk on delivery platforms.",
    image: MarketingSpendImg,
    imageAlt: "Marketing spend dashboard",
    cards: [
      {
        title: "Uber Eats Marketing Spend Agent",
        items: [
          "Audits historical Uber Eats promos and ad spend",
          "Identifies revenue leakage in promotions",
          "Analyzes promo timing and impact",
          "Studies customer behavior under promotions",
        ],
      },
      {
        title: "DoorDash Marketing Spend Agent",
        items: [
          "Audits historical DoorDash promos and ad spend",
          "Builds a unified view of spend, profit, and reliability",
          "Identifies risky spend patterns",
          "Detects visibility and penalty risks early",
        ],
      },
      {
        title: "Cross-Platform Spend Control Agent",
        items: [
          "Unify Uber Eats + DoorDash Spend into one view",
          "Budget recommendations split between DoorDash and UberEats",
          "Pause and Cap Spend rules determination",
          "Library of Promotions created as a playbook",
        ],
      },
    ],
  },
]




export default function AgentsScrollPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ProductHero
        title="Cost Control Agents"
        description="Our agents bring together your prep, inventory, labor, marketing, and delivery data to spot waste, demand mismatches, and inefficiencies surfacing clear actions to control costs without disrupting operations."
        ctaText="See It In Action"
        image={RevenueImg}
        agents={[
          "Waste Control Agent",
          "Demand-Led Prep Agent",
          "Workforce Management Agent",
          "Marketing Spend Efficiency Agent",
        ]}
      />

      <div className="pt-16">
        <AgentSection agents={agentsData} />
      </div>
      <ManagedServices />

      {/* <Footer /> */}
    </main>
  )
}
