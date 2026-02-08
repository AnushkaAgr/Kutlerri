"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram } from "lucide-react"
import LogoImg from "../public/images/Logo/WhiteLogo.png"

export function Footer() {
  return (
    <footer className="bg-[#1E0758] text-white pt-20 pb-10">
      <div className="mx-auto max-w-[1700px] px-6 md:px-12 lg:px-[132px]">

        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">

          {/* LEFT SECTION - Branding */}
          <div className="flex flex-col gap-6 max-w-sm">
            {/* Logo */}
            <Link href="/" className="inline-block relative w-[140px] h-[40px]">
              <Image
                src={LogoImg}
                alt="Kutlerri"
                fill
                className="object-contain object-left"
              />
            </Link>

            <p className="font-gotham text-[16px] md:text-[18px] text-white/90">
              Restaurant Growth, Backed by Data
            </p>

            <div className="mt-8 lg:mt-auto pt-4 text-white/50 text-sm space-y-1 font-gotham">
              <button
                className="
                  mb-6
                  rounded-full
                  bg-[#9F7CEF]
                  text-white font-gotham font-bold
                  px-6 py-2 text-[18px]
                  lg:px-7 lg:py-3 lg:text-[16px]
                  hover:scale-105 transition-all duration-300
                  hover:shadow-[0_0_20px_rgba(159,124,239,0.5)]
                  cursor-pointer
                "
              >
                Get a Demo
              </button>
              <p>Copyright @ 2026</p>
              <p>Kutlerri tech Corporation</p>
            </div>
          </div>

          {/* RIGHT SECTION - Links */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* Column 1: Our Agents */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="font-avant font-bold text-[18px] mb-6">Our Agents</h4>
              <ul className="space-y-4 text-white/80 font-gotham text-sm">
                <li>
                  <Link href="/products/revenue-growth" className="hover:text-white transition-colors">
                    Revenue Growth Agent
                  </Link>
                </li>
                <li>
                  <Link href="/products/cost-control" className="hover:text-white transition-colors">
                    Cost Control Agent
                  </Link>
                </li>
                <li>
                  <Link href="/products/expansion" className="hover:text-white transition-colors">
                    New Store Expansion Agent
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div>
              <h4 className="font-avant font-bold text-[18px] mb-6">Company</h4>
              <ul className="space-y-4 text-white/80 font-gotham text-sm">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Connect */}
            <div>
              <h4 className="font-avant font-bold text-[18px] mb-6">Connect</h4>
              <div className="flex gap-4">
                <Link href="https://linkedin.com" target="_blank" className="hover:opacity-80 transition-opacity">
                  <Linkedin size={24} />
                </Link>
                <Link href="https://instagram.com" target="_blank" className="hover:opacity-80 transition-opacity">
                  <Instagram size={24} />
                </Link>
              </div>
            </div>

            {/* Column 4: Resources */}
            <div>
              <h4 className="font-avant font-bold text-[18px] mb-6">
                <Link href="/resources" className="hover:text-purple-300 transition-colors">
                  Resources
                </Link>
              </h4>
            </div>

          </div>

        </div>

      </div>
    </footer>
  )
}
