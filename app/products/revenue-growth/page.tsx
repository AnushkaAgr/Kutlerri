"use client"

import { Navbar } from "@/components/navbar"

import { ProductHero } from "@/components/products/ProductHero"
import { AgentSection, type Agent } from "@/components/products/AgentSection"
import { ManagedServices } from "@/components/managed-services"
import CateringImg from "@/public/images/AgentGraphs/Catering.png"
import UpsellnAttachImg from "@/public/images/AgentGraphs/UpsellandAttachAgent.png"
import CustomerLifecycleImg from "@/public/images/AgentGraphs/CustomerLifecycle.png"
import OnlineReputationImg from "@/public/images/AgentGraphs/CustomerLifecycle.png"

import RevenueImg from "@/public/images/ProductPage/ProductHero.png"

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
          title: "Catering Opportunity Mapping Agent",
          items: [
            "5-mile radius catering prospect mapping",
            "Catering-fit business filtering",
            "Company size and profile enrichment",
            "Catering potential segmentation",
          ],
        },
        {
          title: "Location-Level Catering Demand Agent",
          items: [
            "Catering performance data collection",
            "Comparable restaurant benchmark selection",
            "Benchmark performance comparison",
            "Catering revenue share measurement",
          ],
        },
        {
          title: "Catering Marketing Outreach Agent",
          items: [
            "Catering order source classification",
            "Existing outreach audit",
            "Outreach coverage mapping",
          ],
        },
      ],
    },

    {
      id: "demand-driven-menu",
      title: "Demand Driven Menu Agent",
      description:
        "Demand to Menu Agents aligns your menu with what customers actually want and structures it so the right items sell better across dine-in, delivery, and catering.",
      image: "/images/agents/menu-demand.png",
      imageAlt: "Demand driven menu dashboard",
      cards: [
        {
          title: "Menu Market Alignment Agent",
          items: [
            "Identify competition",
            "Menu analysis",
            "Demand pattern analysis",
          ],
        },
        {
          title: "Menu Layout & Placement Agent",
          items: [
            "Menu capture & structure mapping",
            "Measure real visibility on delivery apps",
            "Map item placement vs business impact",
            "Compare structure across channels",
            "Flag structural friction points",
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
            "Build attach behavior baseline",
            "Map attach patterns across channels",
            "Identify early-stop orders",
          ],
        },
        {
          title: "Delivery Upsell Agent",
          items: [
            "Audit delivery upsell structure",
            "Measure delivery upsell friction",
            "Benchmark delivery upsell vs competitors",
          ],
        },
        {
          title: "Assisted Upsell Agent",
          items: [
            "Analyze real upsell behavior",
            "Identify high-impact upsell moments",
            "Highlight high-margin upsell opportunities",
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
            "Customer base & behavior mapping",
            "Attach value and quality metrics to each group",
            "Compare customer behavior across channels",
          ],
        },
        {
          title: "Customer Retention Health Agent",
          items: [
            "Track movement between customer groups",
            "Identify slowdown and drop-off signals across channels",
            "Link behavior drops to operational triggers",
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
            "Uber Eats ratings & reviews timeline",
            "Ratings Correlation to real problems",
            "Find drop patterns and fast-recovery periods",
            "Link ratings to orders and visibility",
          ],
        },
        {
          title: "DoorDash Reputation Agent",
          items: [
            "Track long-term DoorDash health",
            "Identify risk zones before damage happen",
            "Ratings Correlation to real problems",
            "Compare with similar restaurants",
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
