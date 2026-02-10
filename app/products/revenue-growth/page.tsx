"use client"

import { Navbar } from "@/components/navbar"

import { ProductHero } from "@/components/products/ProductHero"
import { AgentSection, type Agent } from "@/components/products/AgentSection"
import { ManagedServices } from "@/components/managed-services"
import CateringImg from "@/public/images/AgentGraphs/Catering.png"
import UpsellnAttachImg from "@/public/images/AgentGraphs/UpsellandAttachAgent.png"
import CustomerLifecycleImg from "@/public/images/AgentGraphs/CustomerLifecycle.png"
import OnlineReputationImg from "@/public/images/AgentGraphs/OnlineReputation.png"
import DemandDrivenMenuImg from "@/public/images/AgentGraphs/Demand-DrivenMenuAgent.png"


import RevenueImg from "@/public/images/ProductPage/RevenueGrowthHomePage.png"

export default function RevenueGrowthPage() {
  const agentsData: Agent[] = [
    {
      id: "catering-growth",
      title: "Catering Growth Agent",
      description:
        "The Catering Growth Agents helps your restaurant to identify nearby catering demand, seize the opportunity, benchmark performance, and guide targeted outreach to convert high-potential businesses into steady catering orders.",
      image: CateringImg,
      imageAlt: "Catering growth dashboard",
      cards: [
        {
          title: "Location-Level Catering Demand Agent",
          items: [
            "Pulls current catering performance by location",
            "Benchmarks your locations against similar restaurants",
            "Highlights gaps between your performance and the benchmark",
            "Measures catering as a share of total sales",
          ],
        },
        {
          title: "Catering Opportunity Mapping Agent",
          items: [
            "Maps catering demand within a 5-mile radius of each location",
            "Filters businesses that are a strong fit for your menu and price point",
            "Enriches prospects with company size and ordering profile",
            "Segments prospects by catering potential",
          ],
        },
        {
          title: "Catering Marketing Outreach Agent",
          items: [
            "Identifies where catering orders are coming from today",
            "Audits what outreach is already being done (if any)",
            "Maps outreach coverage against real catering opportunity",
            "Builds a repeatable catering outbound playbook and back-office setup",
          ],
        },
      ],
    },

    {
      id: "demand-driven-menu",
      title: "Demand Driven Menu Agent",
      description:
        "Demand to Menu Agents aligns your menu with what customers actually want and structures it so the right items sell better across dine-in, delivery, and catering.",
      image: DemandDrivenMenuImg,
      imageAlt: "Demand driven menu dashboard",
      cards: [
        {
          title: "Menu Market Alignment Agent",
          items: [
            "Identifies direct competitors around each location",
            "Analyzes competitor menus against local demand trends",
            "Breaks down demand patterns by time and channel",
            "Scores menu items for channel fit automatically",
          ],
        },
        {
          title: "Menu Layout & Placement Agent",
          items: [
            "Captures and maps your menu structure across all channels",
            "Measures real item visibility on delivery apps",
            "Connects item placement to real business impact",
            "Compares menu structure across in-store, delivery, and catering",
            "Flags structural friction that blocks discovery and upsells",
          ],
        },
        {
          title: "Menu Pricing & Margin Expansion Agent",
          items: [
            "Builds item-level unit economics",
            "Analyzes price elasticity and sensitivity",
            "Identifies “safe-to-raise” vs fragile menu items",
            "Recommends smart price, portion, and bundle changes",
          ],
        },
      ],
    },

    {
      id: "upsell-attach",
      title: "Upsell and Attach Agent",
      description:
        "The Upsell and Attach Agents increase average order value by identifying missed add-on opportunities and optimizing when, where, and how sides, extras, and upgrades are suggested across delivery, in-store, and catering orders.",
      image: UpsellnAttachImg,
      imageAlt: "Upsell and attach dashboard",
      cards: [
        {
          title: "Attach Opportunity Detection Agent",
          items: [
            "Builds a baseline of attach behavior",
            "Maps attach patterns across channels",
            "Identifies early-stop orders",
          ],
        },
        {
          title: "Delivery Upsell Agent",
          items: [
            "Audits how upsells are set up on delivery menus",
            "Measures friction in the delivery upsell flow",
            "Benchmarks delivery upsells against nearby competitors",
          ],
        },
        {
          title: "In-store & Catering Upsell Agent",
          items: [
            "Analyzes real upsell behavior on the floor and in catering orders",
            "Identifies the moments when upsells work best",
            "Highlights high-margin upsell opportunities",
          ],
        },
      ],
    },

    {
      id: "customer-lifecycle-retention",
      title: "Customer Lifecycle & Retention Agents",
      description:
        "The Customer Lifecycle and Retention Agents help your restaurant understand how customers behave over time, identify where revenue is being lost due to drop-offs, and highlight the best opportunities to retain, reactivate, and upgrade customers.",
      image: CustomerLifecycleImg,
      imageAlt: "Customer lifecycle dashboard",
      cards: [
        {
          title: "Customer Behavioural Agent",
          items: [
            "Maps your customer base by real ordering behavior",
            "Attaches value and quality metrics to each group",
            "Compares customer behavior across channels",
          ],
        },
        {
          title: "Customer Retention Health Agent",
          items: [
            "Tracks how customers move between behavior groups",
            "Detects early slowdown and churn signals across channels",
            "Links behavior drops to operational triggers",
          ],
        },
      ],
    },

    {
      id: "online-reputation",
      title: "Online Reviews Management Agent",
      description:
        "The Online Reputation Management Agents protect your restaurant visibility and order flow by monitoring reviews and ratings, identifying the real causes behind rating changes, and prioritizing fixes before performance is impacted.",
      image: OnlineReputationImg,
      imageAlt: "Online reputation dashboard",
      cards: [
        {
          title: "Uber Eats Reputation Agent",
          items: [
            "Tracks Uber Eats ratings & reviews over time.",
            "Connects rating changes to real operational problems",
            "Identifies drop patterns and fast-recovery windows",
            "Links ratings directly to orders and visibility",
          ],
        },
        {
          title: "DoorDash Reputation Agent",
          items: [
            "Tracks long-term DoorDash performance by location",
            "Identifies risk zones before penalties hit",
            "Links rating drops to real operational problems",
            "Compares performance with similar nearby restaurants",
          ],
        },
      ],
    },
  ]



  return (
    <>
      <Navbar />

      {/* HERO */}
      <ProductHero
        title="Revenue Growth Agents"
        description="Our agents bring together your orders, menus, reviews, and delivery data to identify missed demand, increase order value, and flag customer drop-offs, with clear actions to grow revenue without guesswork."
        ctaText="See It In Action"
        image={RevenueImg}
        agents={[
          "Menu Optimization Agent",
          "Pricing Agent",
          "Upsell Agent",
          "Customer Insights Agent",
        ]}
      />

      {/* AGENTS SECTION (sticky drawer + scrollable agents) */}
      <div className="pt-16">
        <AgentSection agents={agentsData} />
      </div>

      {/* MANAGED SERVICES */}
      <ManagedServices />


    </>
  )
}
