"use client"

import Image from "next/image"

import Icon1 from "../public/images/icons/CateringGrowthAgent.svg"
import Icon2 from "../public/images/icons/Demand-To-MenuAgent.svg"
import Icon3 from "../public/images/icons/UpsellandAttachAgent.svg"
import Icon4 from "../public/images/icons/CustomerLifecycleandRetentionAgent.svg"
import Icon5 from "../public/images/icons/OnlineReputationManagementAgent.svg"
import Icon6 from "../public/images/icons/WasteControlAgent.svg"
import Icon7 from "../public/images/icons/Demand-LedPrepAgent.svg"
import Icon8 from "../public/images/icons/WorkforceManagementAgent.svg"
import Icon9 from "../public/images/icons/MenuEngineeringAgent.svg"
import Icon10 from "../public/images/icons/MarketingSpendEfficiencyAgent.svg"
import Icon11 from "../public/images/icons/TradeAreaDemand.svg"
import Icon12 from "../public/images/icons/ExpansionFit.svg"

const agents = [
  {
    title: "Catering Agent",
    desc: "Maps catering-fit businesses within 3, 5, and 10 miles, builds a prospect list with contact details, and runs outreach to generate recurring catering orders.",
    icon: Icon1,
  },
  {
    title: "Prep Forecast Agent",
    desc: "Forecasts how much of each item to prep by day and daypart, breaks it down to ingredient quantities, and flags over-prep and shortages before they happen.",
    icon: Icon7,
  },
  {
    title: "Waste Control Agent",
    desc: "Finds your biggest waste sources, compares what was prepped against what was sold, and flags where over-prep is turning into spoilage.",
    icon: Icon6,
  },
  {
    title: "Menu Engineering Agent",
    desc: "Classifies every item by demand and margin across dine-in, delivery, and catering, and flags what to reprice, reposition, simplify, or remove.",
    icon: Icon2,
  },
  {
    title: "Site Selection Agent",
    desc: "Benchmarks a new location against your top-performing stores, produces a daypart demand forecast, and tells you where the new store should be open.",
    icon: Icon11,
  },

  {
    title: "Guest Retention Agent",
    desc: "Tracks how often customers order, flags early drop-offs, and shows how much repeat revenue you’re losing each month.",
    icon: Icon4,
  },
  {
    title: "Online Review Agent",
    desc: "Monitors ratings across Uber Eats, DoorDash, and Google, links negative reviews to specific operational issues, and surfaces problems across all locations in one view.",
    icon: Icon5,
  },


  {
    title: "Labor Scheduling Agent",
    desc: "Identify where staff is sitting idle, where overtime is piling up, and how to match labor to demand across every shift and location.",
    icon: Icon8,
  },

  {
    title: "3P Spend Agent",
    desc: "Separate the promos that drive real orders from the ones draining your budget with underperforming spend flagged across every location.",
    icon: Icon10,
  },

]


export function GrowthSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">

      {/* Heading */}
      <h2 className="text-center text-[#2B0A5B] font-avant text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-[600] mb-10 sm:mb-12 md:mb-16">
        For Every Growth Lever We Have An Agent
      </h2>

      {/* Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 md:gap-x-8 md:gap-y-8 lg:gap-x-12 lg:gap-y-10">

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
