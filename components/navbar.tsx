"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import LogoImage from "../public/images/Logo/WhiteLogo.png"
import Logo2 from "../public/images/Logo/WhiteOutlineFavLogo.png"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const pathname = usePathname()

  // Close dropdowns on route change
  useEffect(() => {
    setDesktopProductsOpen(false)
    setMobileMenuOpen(false)
    setMobileProductsOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 1)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const agentBlocks = [
    { title: "Revenue Growth Co-pilot", link: "/products/revenue-growth" },
    { title: "Cost Control Co-pilot", link: "/products/cost-control" },
    { title: "Business Expansion Co-pilot", link: "/products/business-expansion" },
  ]

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#381D7D] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
          }`}
      >
        <div className="relative flex w-full h-[108px] px-6 md:px-10 lg:px-[72px] items-center">

          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center gap-2">
              <img src={LogoImage.src} alt="Logo" className="hidden lg:block h-[40px]" />
              <img src={Logo2.src} alt="Logo Mobile" className="block lg:hidden h-[36px]" />
            </Link>
          </div>

          {/* Center Nav Links (tablet same as desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6 lg:gap-[62.22px]">

            {/* Products */}
            <button
              onClick={() => setDesktopProductsOpen(!desktopProductsOpen)}
              className="
                relative text-white font-gotham font-medium
                text-[16px] md:text-[18px] lg:text-[20.778px]
                tracking-[-0.533px]
                transition-colors duration-300
                hover:text-[#9F7CEF]
                flex items-center gap-1
              "
            >
              Products <ChevronDown size={16} />
            </button>

            {/* Resources */}
            <Link
              href="#resources"
              className="
                relative text-white font-gotham font-medium
                text-[16px] md:text-[18px] lg:text-[20.778px]
                tracking-[-0.533px]
                transition-colors duration-300
                hover:text-[#9F7CEF]
                after:content-['']
                after:absolute after:left-0 after:-bottom-1
                after:w-0 after:h-[2px] after:bg-[#9F7CEF]
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              Resources
            </Link>

            {/* Company */}
            <Link
              href="#company"
              className="
                relative text-white font-gotham font-medium
                text-[16px] md:text-[18px] lg:text-[20.778px]
                tracking-[-0.533px]
                transition-colors duration-300
                hover:text-[#9F7CEF]
                after:content-['']
                after:absolute after:left-0 after:-bottom-1
                after:w-0 after:h-[2px] after:bg-[#9F7CEF]
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              Company
            </Link>
          </div>

          {/* Right CTA + Mobile */}
          <div className="flex-1 flex justify-end items-center gap-4">

            {/* CTA (smaller on tablet) */}
            <div className="hidden md:block">
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
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* DESKTOP MEGA DROPDOWN */}
      <AnimatePresence>
        {desktopProductsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="hidden md:block fixed top-[108px] left-0 right-0 h-[calc(100vh-108px)] bg-[#2B145F] z-40 overflow-y-auto"
          >
            <div className="px-6 md:px-10 lg:px-[72px] py-8 lg:py-12 min-h-full flex flex-col justify-start space-y-8 lg:space-y-12">

              {agentBlocks.map((agent, idx) => (
                <div key={idx} className="border-b border-white/20 pb-8">

                  <div className="grid grid-cols-[1.2fr_1px_1fr_1fr_1fr] gap-10">

                    {/* LEFT MAIN */}
                    <div className="space-y-4">
                      <h2 className="text-white text-2xl font-semibold">
                        {agent.title}
                      </h2>
                      <p className="text-white/80 text-sm max-w-md">
                        Identify hidden demand, expand order value, and protect visibility.
                      </p>
                      <Link
                        href={agent.link}
                        onClick={() => setDesktopProductsOpen(false)}
                        className="inline-block bg-[#9F7CEF] text-[#2B145F] px-6 py-2 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(159,124,239,0.5)] transition"
                      >
                        Learn More
                      </Link>
                    </div>

                    {/* Divider */}
                    <div className="bg-white/20 w-[1px]" />

                    {/* Column 1 */}
                    <div className="space-y-6">
                      <h4 className="text-white font-gotham font-medium text-[16px]">Catering Agents</h4>
                      <h4 className="text-white font-gotham font-medium text-[16px]">Menu Agents</h4>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-6">
                      <h4 className="text-white font-gotham font-medium text-[16px]">Upsell Agents</h4>
                      <h4 className="text-white font-gotham font-medium text-[16px]">Retention Agents</h4>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-6">
                      <h4 className="text-white font-gotham font-medium text-[16px]">Reputation Agents</h4>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TABLET + MOBILE SIMPLE DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[108px] left-0 right-0 bg-[#381D7D]/95 backdrop-blur-md z-40 p-6">

          {/* Products */}
          <button
            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
            className="w-full flex justify-between items-center text-white py-3"
          >
            Products
            <ChevronDown
              size={16}
              className={`transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
            />
          </button>

          <div className="h-px bg-white/20" />

          {/* Products submenu */}
          {mobileProductsOpen && (
            <div className="ml-4 mt-3 space-y-3">
              <Link href="/products/revenue-growth" onClick={() => setMobileMenuOpen(false)} className="block text-white/80">
                Revenue Growth
              </Link>
              <Link href="/products/cost-control" onClick={() => setMobileMenuOpen(false)} className="block text-white/80">
                Cost Control
              </Link>
              <Link href="/products/business-expansion" onClick={() => setMobileMenuOpen(false)} className="block text-white/80">
                Business Expansion
              </Link>
              <div className="h-px bg-white/20 my-3" />
            </div>
          )}



          <Link href="#resources" onClick={() => setMobileMenuOpen(false)} className="block text-white py-2">
            Resources
          </Link>

          <div className="h-px bg-white/20 my-3" />

          <Link href="#company" onClick={() => setMobileMenuOpen(false)} className="block text-white py-2">
            Company
          </Link>
        </div>
      )}


    </>
  )
}
