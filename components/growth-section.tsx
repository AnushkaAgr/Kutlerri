"use client"

import Image from "next/image"

import Icon1 from "../public/images/icons/CateringGrowthAgent.svg"
import Icon2 from "../public/images/icons/OnlineReputationManagementAgent.svg"
import Icon3 from "../public/images/icons/MenuEngineeringAgent.svg"
import Icon4 from "../public/images/icons/Demand-To-MenuAgent.svg"
import Icon5 from "../public/images/icons/WasteControlAgent.svg"
import Icon6 from "../public/images/icons/MarketingSpendEfficiencyAgent.svg"
import Icon7 from "../public/images/icons/UpsellandAttachAgent.svg"
import Icon8 from "../public/images/icons/Demand-LedPrepAgent.svg"
import Icon9 from "../public/images/icons/CustomerLifecycleandRetentionAgent.svg"
import Icon10 from "../public/images/icons/WorkforceManagementAgent.svg"

const agents = [
  {
    title: "Catering Growth Agent",
    desc: "Finds real catering demand nearby and helps turn it into reliable weekly orders.",
    icon: Icon1,
  },
  {
    title: "Online Reviews Management Agent",
    desc: "Tracks reviews and ratings so problems get fixed before they hurt traffic and orders.",
    icon: Icon2,
  },
  {
    title: "Menu Mix Optimization Agent",
    desc: "Shows which menu items hurt profits and what to fix, remove, or reposition.",
    icon: Icon3,
  },
  {
    title: "Demand-Driven Menu Agent",
    desc: "Adjusts your menu based on what actually sells by location, channel, and time of day.",
    icon: Icon4,
  },
  {
    title: "Waste Control Agent",
    desc: "Flags food getting wasted from over-prep, spoilage, and poor shelf control before margins drop.",
    icon: Icon5,
  },
  {
    title: "UberEats Spend Efficiency Agent",
    desc: "Makes sure promos and ads bring orders not losses and cuts wasted spend.",
    icon: Icon6,
  },
  {
    title: "Upsell & Attach Agent",
    desc: "Boosts order value by adding the right sides and add-ons at the right time.",
    icon: Icon7,
  },
  {
    title: "Prep Forecast Agent",
    desc: "Tells your kitchen exactly what to prep and how much so you don’t overcook or run out.",
    icon: Icon8,
  },
  {
    title: "DoorDash Spend Efficiency Agent",
    desc: "Makes sure promos and ads bring orders not losses and cuts wasted spend.",
    icon: Icon6,
  },
  {
    title: "Customer Lifecycle & Retention Agent",
    desc: "Shows who your regulars are, who’s dropping off, and where revenue is leaking.",
    icon: Icon9,
  },
  {
    title: "Labor Cost Optimization Agent",
    desc: "Helps schedule the right number of staff per shift — no overstaffing, no burnout.",
    icon: Icon10,
  },
]

export function GrowthSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
      
      {/* Heading */}
      <h1 className="text-center text-[#2B0A5B] font-avant text-[28px] md:text-[36px] lg:text-[48px] font-[600] mb-16">
        For Every Growth Lever We Have An Agent
      </h1>

      {/* Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">

        {agents.map((agent, index) => (
          <div key={index} className="flex items-start gap-4">

            {/* Icon */}
            <div className="w-[40px] h-[40px] shrink-0">
              <Image src={agent.icon} alt={agent.title} />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-[#4A2C8C] font-avant text-[18px] md:text-[20px] font-[600] mb-2">
                {agent.title}
              </h3>
              <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed max-w-[360px]">
                {agent.desc}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}
