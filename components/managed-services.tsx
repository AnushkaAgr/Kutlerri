"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import pattern from "../public/images/HomePage/FullyManagedServicePattern.png"

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

            lg:aspect-[4/1]
            flex items-center
          "
        >
          {/* 🔹 Pattern Background */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `url(${pattern.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "140%",
              opacity: 0.35,
            }}
          />

          {/* subtle glow */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.15),transparent_60%)] z-[1]" />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-10 lg:p-14 w-full text-center md:text-center lg:text-left">

            <h2 className="text-2xl md:text-3xl lg:text-5xl font-avant font-[500] text-white mb-4">
              Fully Managed Services
            </h2>

            <p className="text-white text-[18px] md:text-[16px] lg:text-[20px] leading-[1.4] mb-6 max-w-2xl mx-auto lg:mx-0 font-gotham">
              We work like an extension of your team, handling analysis, execution,
              and follow-through so you can focus on running your restaurant.
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
                  
                "
              >
                See How We Work
                <ArrowRight size={18} />
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
