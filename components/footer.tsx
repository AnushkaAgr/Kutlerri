"use client"

import Link from "next/link"
import { Facebook, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1E0758] text-white">
      <div className="mx-auto max-w-[1700px] px-[24px] md:px-[64px] lg:px-[132px] py-16">

        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <span className="text-lg font-bold text-[#1E0758]">K</span>
              </div>
              <span className="text-xl font-semibold font-gotham">
                Kutlerri
              </span>
            </Link>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">

            {/* Product */}
            <div>
              <h4 className="mb-4 text-[#9F7CEF] font-gotham tracking-wide">PRODUCT</h4>
              <ul className="space-y-3">
                <li>B2B Catering Leads</li>
                <li>Restaurant Intelligence</li>
                <li>Delivery Optimization</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 text-[#9F7CEF] font-gotham tracking-wide">COMPANY</h4>
              <ul className="space-y-3">
                <li>How It Works</li>
                <li>Case Studies</li>
                <li>Pricing</li>
                <li>Resources</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-[#9F7CEF] font-gotham tracking-wide">CONTACT US</h4>
              <ul className="space-y-3 leading-relaxed">
                <li>8 The Green, Dover,</li>
                <li>Delaware 19901, US</li>
                <li>+1 891 989-11-91</li>
                <li>hello@kutlerri.com</li>
              </ul>
            </div>

          </div>

          {/* CTA */}
          <div className="flex items-start">
            <button
              className="
                rounded-full
                bg-[#EF118F]
                px-6 py-3
                text-white
                font-gotham
                text-sm
                transition-all
                hover:scale-105
                hover:shadow-[0_0_20px_rgba(109,74,255,0.6)]
                cursor-pointer
              "
            >
              Get a Demo
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/20" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/70">

          <p>© {new Date().getFullYear()} Kutlerri. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex gap-6">
            <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>

      </div>
    </footer>
  )
}
