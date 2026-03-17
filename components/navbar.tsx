"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  DollarSign,
  MapPin,
} from "lucide-react";
import LogoImage from "../public/images/Logo/WhiteLogo.webp";
import Logo2 from "../public/images/Logo/WhiteOutlineFavLogo.webp";
import BlackLogoImage from "../public/images/Logo/BlackLogo.png";
import BlackLogo2 from "../public/images/Logo/BlackOutlineFavLogo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const pathname = usePathname();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // White navbar for blog & about pages
  const isLightNav =
    pathname.startsWith("/blog") || pathname.startsWith("/company");

  // Close dropdowns on route change
  useEffect(() => {
    setDesktopProductsOpen(false);
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setActiveTab(0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 1);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (desktopProductsOpen || mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [desktopProductsOpen, mobileMenuOpen]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopProductsOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setDesktopProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [desktopProductsOpen]);

  const agentBlocks = [
    {
      title: "Revenue Growth Agents",
      link: "/products/revenue-growth",
      description:
        "Identify hidden demand, expand order value, and protect visibility.",
      icon: TrendingUp,
      subAgents: [
        {
          title: "Catering Growth Agent",
          desc: "Unlock corporate and event revenue streams.",
          href: "/products/revenue-growth#catering-growth",
        },
        {
          title: "Demand-Driven Menu Agent",
          desc: "Optimize your menu for profitability.",
          href: "/products/revenue-growth#demand-driven-menu",
        },
        {
          title: "Upsell and Attach Agent",
          desc: "Increase average order value automatically.",
          href: "/products/revenue-growth#upsell-attach",
        },
        {
          title: "Customer Lifecycle & Retention Engine",
          desc: "Reduce churn and boost loyalty.",
          href: "/products/revenue-growth#customer-lifecycle-retention",
        },
        {
          title: "Online Reviews Management Agent",
          desc: "Manage and improve your online presence.",
          href: "/products/revenue-growth#online-reviews-management",
        },
      ],
    },
    {
      title: "Cost Control Agents",
      link: "/products/cost-control",
      description:
        "Reduce waste, optimize labor, and control food costs automatically.",
      icon: DollarSign,
      subAgents: [
        {
          title: "Waste Control Agent",
          desc: "Track and minimize food waste.",
          href: "/products/cost-control#waste-control",
        },
        {
          title: "Prep Forecast Agent",
          desc: "Predict prep needs with high accuracy.",
          href: "/products/cost-control#prep-forecast",
        },
        {
          title: "Labor Cost Optimization Agent",
          desc: "Schedule smarter to save on labor.",
          href: "/products/cost-control#labor-cost-optimization",
        },
        {
          title: "Menu Mix & Margin Optimisation",
          desc: "Analyze profitability by item.",
          href: "/products/cost-control#menu-mix-&-margin-optimization",
        },
        {
          title: "DoorDash Spend Efficiency Agent",
          desc: "Ensure every ad dollar drives revenue.",
          href: "/products/cost-control#doordash-spend-efficiency",
        },
      ],
    },
    {
      title: "New Store Expansion Agents",
      link: "/products/new-store-expansion",
      description:
        "Data-driven site selection to ensure your next location succeeds.",
      icon: MapPin,
      subAgents: [
        {
          title: "New Store Decision Agent",
          desc: "Evaluate locations with data confidence.",
          href: "/products/new-store-expansion#new-store-decision",
        },
        {
          title: "Trade Area Demand Intelligence Agent",
          desc: "Map local demand hotspots.",
          href: "/products/new-store-expansion#trade-area-demand-intelligence",
        },
      ],
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isLightNav
            ? "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
            : scrolled ||
                desktopProductsOpen ||
                mobileMenuOpen ||
                pathname !== "/"
              ? "bg-[#381D7D] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
              : "bg-transparent"
        }`}
      >
        <div className="relative flex w-full h-[72px] px-6 md:px-10 lg:px-[72px] items-center">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link
              href="/"
              onClick={() => {
                setDesktopProductsOpen(false);
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2"
            >
              <Image
                src={isLightNav ? BlackLogoImage : LogoImage}
                alt="Kutlerri Logo"
                width={140}
                height={40}
                className="hidden lg:block"
                priority
              />
              <Image
                src={isLightNav ? BlackLogo2 : Logo2}
                alt="Kutlerri Logo"
                width={36}
                height={36}
                className="block lg:hidden"
                priority
              />
            </Link>
          </div>

          {/* Center Nav Links (tablet same as desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6 lg:gap-[62.22px]">
            {/* Products */}
            <button
              ref={buttonRef}
              onClick={() => setDesktopProductsOpen(!desktopProductsOpen)}
              aria-label="Products menu"
              aria-expanded={desktopProductsOpen}
              className={`
                relative font-gotham font-medium
                text-[16px] md:text-[18px] lg:text-[20.778px]
                tracking-[-0.533px]
                transition-colors duration-300
                flex items-center gap-1
                ${desktopProductsOpen ? "text-[#9F7CEF]" : isLightNav ? "text-[#2B145F] hover:text-[#9F7CEF]" : "text-white hover:text-[#9F7CEF]"}
              `}
            >
              Products{" "}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${desktopProductsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Resources */}
            <Link
              href="/blog"
              className={`
                relative font-gotham font-medium
                text-[16px] md:text-[18px] lg:text-[20.778px]
                tracking-[-0.533px]
                transition-colors duration-300
                hover:text-[#9F7CEF]
                after:content-['']
                after:absolute after:left-0 after:-bottom-1
                after:w-0 after:h-[2px] after:bg-[#9F7CEF]
                after:transition-all after:duration-300
                hover:after:w-full
                ${isLightNav ? "text-[#2B145F]" : "text-white"}
              `}
            >
              Resources
            </Link>

            {/* Company */}
            <Link
              href="/company"
              className={`
                relative font-gotham font-medium
                text-[16px] md:text-[18px] lg:text-[20.778px]
                tracking-[-0.533px]
                transition-colors duration-300
                hover:text-[#9F7CEF]
                after:content-['']
                after:absolute after:left-0 after:-bottom-1
                after:w-0 after:h-[2px] after:bg-[#9F7CEF]
                after:transition-all after:duration-300
                hover:after:w-full
                ${isLightNav ? "text-[#2B145F]" : "text-white"}
              `}
            >
              Company
            </Link>
          </div>

          {/* Right CTA + Mobile */}
          <div className="flex-1 flex justify-end items-center gap-4">
            {/* CTA (smaller on tablet) */}
            <div className="hidden md:block">
              <Link href="/get-a-demo">
                <button
                  className="
                    bg-[#9F7CEF] text-white rounded-full transition-all duration-300 cursor-pointer
                    px-6 py-2 text-[18px]
                    lg:px-7 lg:py-3 lg:text-[16px]
                    hover:scale-105 font-bold hover:shadow-[0_0_20px_rgba(159,124,239,0.5)]
                  "
                >
                  Get a Demo
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${isLightNav ? "text-[#2B145F]" : "text-white"}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* DESKTOP MEGA DROPDOWN (Master-Detail Layout) */}
      <AnimatePresence>
        {desktopProductsOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:block fixed top-[72px] left-0 right-0 bg-[#2B145F] border-t border-white/10 shadow-2xl z-40"
          >
            <div className="mx-auto max-w-[1400px] p-8">
              <div className="grid grid-cols-12 gap-8 min-h-[400px]">
                {/* LEFT SIDEBAR - Categories */}
                <div className="col-span-4 border-r border-white/10 pr-6 space-y-2">
                  <h3 className="text-white/50 text-xs font-bold uppercase tracking-wider mb-4 px-4">
                    Product Categories
                  </h3>

                  {agentBlocks.map((agent, idx) => (
                    <Link
                      key={idx}
                      href={agent.link}
                      onMouseEnter={() => setActiveTab(idx)}
                      onClick={() => setActiveTab(idx)}
                      className={`
                        group flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300
                        ${activeTab === idx ? "bg-white/10 shadow-lg" : "hover:bg-white/5"}
                      `}
                    >
                      <div
                        className={`
                        p-2 rounded-lg transition-colors
                        ${activeTab === idx ? "bg-[#9F7CEF] text-white" : "bg-white/5 text-white/70 group-hover:text-white"}
                      `}
                      >
                        <agent.icon size={24} />
                      </div>

                      <div>
                        <h4
                          className={`font-avant font-bold text-lg mb-1 leading-tight ${activeTab === idx ? "text-white" : "text-white/90"}`}
                        >
                          {agent.title}
                        </h4>
                        <p
                          className={`font-gotham text-xs leading-relaxed ${activeTab === idx ? "text-white/80" : "text-white/50"}`}
                        >
                          {agent.description}
                        </p>
                      </div>
                    </Link>
                  ))}

                  {/* <div className="mt-8 px-4 pt-4 border-t border-white/10">
                    <Link href="/get-a-demo" className="text-[#9F7CEF] font-bold text-sm hover:underline flex items-center gap-2">
                      View Full Platform <ChevronDown className="-rotate-90" size={12} />
                    </Link>
                  </div> */}
                </div>

                {/* RIGHT CONTENT - Sub Agents */}
                <div className="col-span-8 pl-4">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-white font-avant font-bold text-2xl ">
                      {agentBlocks[activeTab].title}
                    </h3>
                    <Link
                      href={agentBlocks[activeTab].link}
                      className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-xs font-bold transition-colors"
                    >
                      Explore Category
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                    {agentBlocks[activeTab].subAgents.map((sub, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          href={sub.href}
                          onClick={() => setDesktopProductsOpen(false)}
                          className="group cursor-pointer block"
                        >
                          <h5 className="text-white font-bold text-[16px] mb-1 group-hover:text-[#9F7CEF] transition-colors">
                            {sub.title}
                          </h5>
                          <p className="text-white/50 text-sm leading-snug">
                            {sub.desc}
                          </p>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative / Image placeholder could go here */}
                  <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#381D7D] to-transparent border border-white/5 flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold mb-1">
                        Need help deciding?
                      </h4>
                      <p className="text-white/60 text-sm">
                        Our team can help you audit your operations.
                      </p>
                    </div>
                    <Link
                      href="/get-a-demo"
                      className="text-white bg-[#9F7CEF] hover:bg-[#8a68e0] px-4 py-2 rounded-lg text-sm font-bold transition-colors"
                    >
                      Book Audit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TABLET + MOBILE SIMPLE DROPDOWN */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden fixed top-[72px] left-0 right-0 backdrop-blur-md z-40 p-6 h-[calc(100vh-72px)] overflow-y-auto ${isLightNav ? "bg-white/95" : "bg-[#381D7D]/95"}`}
        >
          {/* Products */}
          <button
            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
            aria-label="Products menu"
            aria-expanded={mobileProductsOpen}
            className={`w-full flex justify-between items-center py-3 ${isLightNav ? "text-[#2B145F]" : "text-white"}`}
          >
            Products
            <ChevronDown
              size={16}
              className={`transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
            />
          </button>

          <div
            className={`h-px ${isLightNav ? "bg-[#2B145F]/10" : "bg-white/20"}`}
          />

          {/* Products submenu */}
          {mobileProductsOpen && (
            <div className="ml-4 mt-3 space-y-6">
              {agentBlocks.map((agent, i) => (
                <div key={i}>
                  <Link
                    href={agent.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block font-bold mb-1 ${isLightNav ? "text-[#2B145F]" : "text-white"}`}
                  >
                    {agent.title}
                  </Link>
                  <p
                    className={`text-xs mb-3 pr-4 ${isLightNav ? "text-[#2B145F]/50" : "text-white/50"}`}
                  >
                    {agent.description}
                  </p>
                  <ul
                    className={`border-l-2 pl-4 space-y-2 ${isLightNav ? "border-[#2B145F]/10" : "border-white/10"}`}
                  >
                    {agent.subAgents.map((sub, j) => (
                      <li
                        key={j}
                        className={`text-sm ${isLightNav ? "text-[#2B145F]/70" : "text-white/70"}`}
                      >
                        {sub.title}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div
                className={`h-px my-3 ${isLightNav ? "bg-[#2B145F]/10" : "bg-white/20"}`}
              />
            </div>
          )}

          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 ${isLightNav ? "text-[#2B145F]" : "text-white"}`}
          >
            Resources
          </Link>

          <div
            className={`h-px my-3 ${isLightNav ? "bg-[#2B145F]/10" : "bg-white/20"}`}
          />

          <Link
            href="/company"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 ${isLightNav ? "text-[#2B145F]" : "text-white"}`}
          >
            Company
          </Link>
        </div>
      )}
    </>
  );
}
