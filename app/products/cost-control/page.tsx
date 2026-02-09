import { Navbar } from "@/components/navbar"
import { AgentSection, type Agent } from "@/components/products/AgentSection"

import { ProductHero } from "@/components/products/ProductHero"
import { ManagedServices } from "@/components/managed-services"
import { Footer } from "@/components/footer"
import RevenueImg from "@/public/images/ProductPage/CostControl.png"
import PrepForecastImg from "@/public/images/AgentGraphs/PrepForecastAgent.png"
import WasteControltImg from "@/public/images/AgentGraphs/WasteControlAgents.png"
import WorkForceImg from "@/public/images/AgentGraphs/WorkforceManagement.png"
import MenuEngineeringImg from "@/public/images/AgentGraphs/MenuEngineeringAgent.png"
import MarketingSpendImg from "@/public/images/AgentGraphs/MarketingSpendDoorDash.png"


const agentsData: Agent[] = [
  {
    id: "waste-control",
    title: "Waste Control Agent",
    description:
      "The Waste Control Agents reduce food waste and avoidable cost by identifying where waste is coming from, why it repeats, and how prep and shelf-life practices can be corrected.",
    image: WasteControltImg,
    imageAlt: "Waste control dashboard",
    cards: [
      {
        title: "Structural Waste Detection Agent",
        items: [
          "Waste data collection & source mapping",
          "Identify major and repeat waste drivers",
        ],
      },
      {
        title: "Prep vs Demand Mismatch Agent",
        items: [
          "Compare prep quantities with actual sales",
          "Identify consistent over-prep and shortage zones",
          "Link over-prep directly to waste",
        ],
      },
      {
        title: "Shelf-Life Usage Agent",
        items: [
          "Document shelf-life and holding limits",
          "Measure real usage vs allowed life",
          "Calculate shelf-life loss",
        ],
      },
    ],
  },

  {
    id: "prep-forecast",
    title: "Prep Forecast Agents",
    description:
      "The Demand-Led Prep Agents ensure your restaurant prepares the right items and ingredients in the right quantities by aligning prep planning with real demand patterns.",
    image: PrepForecastImg,
    imageAlt: "Prep forecasting dashboard",
    cards: [
      {
        title: "Menu-Item Demand Forecasting Agent",
        items: [
          "Build item-level demand patterns",
          "Forecast item demand by day and daypart",
        ],
      },
      {
        title: "Ingredient-Level Demand Forecasting Agent",
        items: [
          "Ingredient demand mapping",
          "Adjust waste and safety buffers",
        ],
      },
    ],
  },

  {
    id: "labor-optimization",
    title: "Labor Cost Optimization Agents",
    description:
      "The Workforce Management Agents align staffing levels and roles with real customer demand to reduce overstaffing, understaffing, idle hours, and unnecessary overtime.",
    image: WorkForceImg,
    imageAlt: "Labor optimization dashboard",
    cards: [
      {
        title: "Demand-Aligned Staffing Agent",
        items: [
          "Build hourly demand and staffing view",
          "Detect overstaffing and understaffing patterns",
        ],
      },
      {
        title: "Labor Utilization Detection Agent",
        items: [
          "Map overtime, long-shift, and idle-hour patterns",
          "Identify overtime-risk and idle-labor windows",
        ],
      },
    ],
  },

  {
    id: "menu-engineering",
    title: "Menu Mix & Margin Optimization Agents",
    description:
      "The Menu Engineering Agents improves menu profitability by identifying which items truly make money, which create hidden costs, and how menu items should be adjusted across channels.",
    image: MenuEngineeringImg,
    imageAlt: "Menu engineering dashboard",
    cards: [
      {
        title: "PMIX Profitability and Demand Agent",
        items: [
          "Build and classify the PMIX table",
          "Validate PMIX by channel.",
          "Identify PMIX problems and opportunities",
        ],
      },
      {
        title: "Channel Margin Leakage Agent",
        items: [
          "Compare item performance by channel",
          "Detect channel-driven cost leakage",
        ],
      },
    ],
  },

  {
    id: "marketing-efficiency",
    title: "Marketing Spend Efficiency Agent",
    description:
      "The Marketing Spend Efficiency Agents ensure promos and ads generate profitable orders without increasing refunds, errors, or visibility risk on delivery platforms.",
    image: MarketingSpendImg,
    imageAlt: "Marketing spend efficiency dashboard",
    cards: [
      {
        title: "Uber Eats Marketing Spend Agent",
        items: [
          "Audit historical marketing spend",
          "Identify revenue leakage in promotions",
          "Analyze promo timing effectiveness",
          "Study customer behavior under promos",
        ],
      },
      {
        title: "DoorDash Marketing Spend Agent",
        items: [
          "Build spend, profit, and reliability view",
          "Identify risky spend patterns and visibility threats",
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
