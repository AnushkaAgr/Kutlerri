import { AgentSection, type Agent } from "@/components/products/AgentSection"
import { ManagedServices } from "@/components/managed-services"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import RevenueImg from "@/public/images/ProductPage/ProductHero.png"
import { ProductHero } from "@/components/products/ProductHero"

const agentsData: Agent[] = [
  {
    id: "revenue",
    title: "Revenue Growth Agent",
    description:
      "Boost revenue using AI-powered demand forecasting and upsell optimization to capture missed opportunities and maximize profitability.",
    image: "/images/agents/revenue.png",
    imageAlt: "Revenue growth dashboard",
    cards: [
      {
        title: "Opportunities",
        items: [
          "Menu mix optimization",
          "Dynamic pricing strategies",
          "Automated upsell suggestions",
        ],
      },
      {
        title: "Insights",
        items: [
          "Top selling items",
          "Low margin alerts",
          "Peak hour revenue trends",
        ],
      },
      {
        title: "Actions",
        items: [
          "Launch smart campaigns",
          "Adjust menu pricing",
          "Create profitable combos",
        ],
      },
    ],
  },

  {
    id: "cost",
    title: "Cost Optimization Agent",
    description:
      "Reduce operational expenses with AI-driven inventory control and waste management to protect your margins.",
    image: "/images/agents/cost.png",
    imageAlt: "Cost optimization dashboard",
    cards: [
      {
        title: "Inventory",
        items: [
          "Smart stock alerts",
          "Vendor price tracking",
          "Auto reordering system",
        ],
      },
      {
        title: "Waste Control",
        items: [
          "Spoilage detection",
          "Overproduction alerts",
          "Usage analytics",
        ],
      },
      {
        title: "Savings",
        items: [
          "Monthly savings report",
          "Cost leakage detection",
          "Profit margin improvement",
        ],
      },
    ],
  },

  {
    id: "customer",
    title: "Customer Experience Agent",
    description:
      "Understand your guests better using sentiment analysis and behavioral insights to improve satisfaction and loyalty.",
    image: "/images/agents/customer.png",
    imageAlt: "Customer experience dashboard",
    cards: [
      {
        title: "Feedback",
        items: [
          "Review sentiment analysis",
          "Complaint trend tracking",
          "NPS score monitoring",
        ],
      },
      {
        title: "Behavior",
        items: [
          "Repeat visit rate",
          "Order preferences",
          "Peak time patterns",
        ],
      },
      {
        title: "Engagement",
        items: [
          "Personalized offers",
          "Loyalty rewards",
          "Retention campaigns",
        ],
      },
    ],
  },

  {
    id: "operations",
    title: "Operations Intelligence Agent",
    description:
      "Optimize kitchen and staff operations using real-time performance metrics and AI-based efficiency tracking.",
    image: "/images/agents/operations.png",
    imageAlt: "Operations intelligence dashboard",
    cards: [
      {
        title: "Kitchen",
        items: [
          "Prep time analysis",
          "Order bottleneck detection",
          "Throughput tracking",
        ],
      },
      {
        title: "Staff",
        items: [
          "Shift productivity",
          "Overtime alerts",
          "Smart scheduling",
        ],
      },
      {
        title: "Quality",
        items: [
          "Order accuracy",
          "Service speed",
          "Compliance checks",
        ],
      },
    ],
  },

  {
    id: "expansion",
    title: "Business Expansion Agent",
    description:
      "Identify growth opportunities with market intelligence and location analytics for confident business expansion.",
    image: "/images/agents/expansion.png",
    imageAlt: "Business expansion dashboard",
    cards: [
      {
        title: "Market",
        items: [
          "Demand heatmaps",
          "Competitor analysis",
          "Area growth trends",
        ],
      },
      {
        title: "Locations",
        items: [
          "Site scoring",
          "Footfall prediction",
          "Risk assessment",
        ],
      },
      {
        title: "Strategy",
        items: [
          "Expansion roadmap",
          "Franchise planning",
          "ROI forecasting",
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
        title="Revenue Growth Suite"
        description="Grow revenue with AI-powered insights across menus, pricing, upsells, and customer behavior."
        ctaText="Get a Demo"
        image={RevenueImg}
        agents={[
          "Menu Optimization Agent",
          "Pricing Agent",
          "Upsell Agent",
          "Customer Insights Agent",
        ]}
      />
      <AgentSection agents={agentsData} />
      <ManagedServices />
     {/* <Footer /> */}
    </main>
    
  )
}
