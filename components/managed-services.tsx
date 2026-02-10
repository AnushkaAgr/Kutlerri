"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Lottie from "lottie-react"
import pattern from "../public/images/HomePage/FullyManagedServicePattern.png"
import animationData from "../public/lottie/FullyManagedService.json"

export function ManagedServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 bg-[#F8F0FF]">
      <div className="mx-auto max-w-[1700px] px-[18px]">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="
            relative overflow-hidden
            rounded-[36px]
            border border-white/10

            bg-gradient-to-r
            from-[#12003A]
            via-[#1E0758]
            to-[#3A1CA8]
          "
        >
          {/* 🔹 Pattern Background */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `url(${pattern.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              opacity: 0.35,
            }}
          />

          {/* subtle glow */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.15),transparent_60%)] z-[1]" />

          {/* Content Container - Two Column Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-stretch">

            {/* Left - Text Content */}
            <div className="p-8 md:p-10 lg:p-14 text-center lg:text-left flex flex-col justify-center">

              <h2 className="text-2xl md:text-3xl lg:text-5xl font-avant font-[500] text-white mb-4">
                Fully Managed Services
              </h2>

              <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] leading-[1.4] mb-6 max-w-2xl mx-auto lg:mx-0 font-gotham">
                We work like an extension of your team, handling analysis, execution, and follow-through so you can focus on running your restaurant.
              </p>

              <div className="flex justify-center lg:justify-start">
                <button
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    bg-[#9F7CEF]
                    px-7 py-3
                    text-white
                    font-gotham font-[350]
                    text-[15px]
                    transition-all duration-300
                    hover:scale-[1.05]
                    hover:shadow-[0_0_20px_rgba(159,124,239,0.5)]
                    cursor-pointer
                    whitespace-nowrap
                  "
                >
                  See How We Work
                  <ArrowRight size={18} />
                </button>
              </div>

            </div>

            {/* Right - Lottie Animation */}
            <div className="flex justify-center lg:justify-end items-end mt-5 -mb-10 lg:mb-0">
              <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] lg:overflow-hidden ">
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  className="w-full h-auto scale-125 origin-top lg:scale-[1.45] lg:origin-top-left"
                />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
