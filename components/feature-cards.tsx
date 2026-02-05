"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

import PointerIcon from "../public/images/HomePage/Pointer.png"
import CardPattern from "../public/images/HomePage/CardPattern.png"

import Img1 from "../public/images/HomePage/RevenueGrowthSuite.png"
import Img2 from "../public/images/HomePage/Cost ControlCo-Pilot.png"
import Img3 from "../public/images/HomePage/Business Expansio Co-Pilot.png"

const features = [
  {
    title: "Revenue Growth Co-pilot",
    description:
      "Runs AI agents on your restaurant’s data to find and grow revenue. Catering, menus, upsells, and repeat customers.",
    image: Img1,
  },
  {
    title: "Cost Control Co-pilot",
    description:
      "Runs AI agents on your restaurant’s data to control costs and improve margins intelligently.",
    image: Img2,
  },
  {
    title: "Business Expansion Suite",
    description:
      "Helps guide smarter restaurant expansion decisions using real-time analytics.",
    image: Img3,
  },
]

export function FeatureCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative z-20 pb-32 overflow-hidden pt-24 md:pt-32 lg:pt-40">

      {/* ✅ Smooth background blend */}
      <div className="absolute inset-0 bg-gradient-to-b 
        from-transparent 
        via-[#1E0758]/60 
        to-[#1E0758]" 
      />

      <div className="relative z-10 mx-auto max-w-[1700px] px-6 sm:px-8 md:px-12 lg:px-[132px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[20px] justify-items-center">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="w-full flex justify-center"
            >
              <div
                className="
                  relative
                  w-full max-w-[470px] min-h-[500px]
                  flex flex-col justify-between
                  p-6
                  sm:p-7
                  md:p-8
                  rounded-[7.469px]
                  backdrop-blur-[12px]
                  bg-[linear-gradient(180deg,rgba(31,29,34,0.82)_0%,rgba(42,18,102,0.82)_100%)]
                  shadow-[0_4.268px_4.268px_rgba(0,0,0,0.25)]
                  border border-white/10
                  transition-all duration-300
                  hover:border-purple-400/50
                  hover:shadow-[0_0_30px_rgba(124,92,255,0.25)]
                  overflow-hidden
                "
              >
                {/* Pattern Overlay */}
                <Image
                  src={CardPattern}
                  alt="pattern"
                  fill
                  className="object-cover opacity-20"
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-4 sm:gap-5 md:gap-6 mb-3 sm:mb-4">
                      <Image
                        src={PointerIcon}
                        alt="pointer"
                        width={16}
                        height={16}
                        className="shrink-0"
                      />

                      <h2
                        className="
                          text-white
                          font-avant
                          text-xl
                          sm:text-2xl
                          md:text-[28px]
                          font-[500]
                          tracking-[-0.6px]
                          line-clamp-2
                        "
                      >
                        {feature.title}
                      </h2>
                    </div>

                    <p className="text-purple-300 text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed mb-3 sm:mb-4">
                      {feature.description}
                    </p>
                  </div>

                  {/* Image below description */}
                  <div className="flex justify-center mt-4 sm:mt-5 md:mt-6">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      className="object-contain w-full h-auto max-h-56 sm:max-h-64 md:max-h-72 lg:max-h-80"
                    />
                  </div>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
