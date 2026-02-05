"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"

import HeroImage from "../public/images/HomePage/Hero.png"
import PointerIcon from "../public/images/HomePage/Pointer.png"
import CardPattern from "../public/images/HomePage/CardPattern.png"

import Img1 from "../public/images/HomePage/RevenueGrowthSuite.png"
import Img2 from "../public/images/HomePage/CostControlSuite.png"
import Img3 from "../public/images/HomePage/BusinessExpansionSuite.png"

const heroSlides = [
  {
    title: `A New Store Location Does Not Fail in Year 3. It fails the day you sign the lease`,
    description: (
      <>
        A typical restaurant runs around 5-9% pre-tax profit, {" "}
        <span className="font-bold">one bad lease, one wrong trade area, one miss on demand... </span>{" "}
        and you’re cooked.
        Did your last location grow profit or just grew rent?
        <br /><br />
        <span className="font-bold text-[#9F7CEF]">Kutlerri’s</span>{" "}
        <span className="font-bold">New Store Expansion Agents:</span>{" "}
        pressure-test demand, competition, and unit economics before you sign.
      </>
    ),
  },
  {
    title: `High prime cost? Your profit is already dead. You’re just finding out later`,
    description: (
      <>
       Commercial kitchens typically waste 6–10% of the food they buy before it reaches the plate. And healthy prime cost targets are 60–65% of sales. If you miss that target, everything hurts. Do you know exactly where you’re bleeding this week?{" "}
        <br /><br />
        <span className="font-bold text-[#9F7CEF]">Kutlerri’s</span>{" "}
        <span className="font-bold">Cost Control Agents:</span>{" "}
        Call out the biggest leaks and tells you what to do Monday morning.
      </>
    ),
  },
  {
    title: `If you’re paying 15-30% to grow, you better be damn sure it’s working`,
    description: (
      <>
        Catering is the $60B+ prize hiding in plain sight, but if it’s still “when someone calls,” you’re not running a channel, you’re running on luck. So… do you have a growth engine or a bunch of tactics?
        <br /><br />
        <span className="font-bold text-[#9F7CEF]">Kutlerri’s</span>{" "}
        <span className="font-bold">Revenue Growth Agents:</span>{" "}
        turn catering into a repeatable engine and quietly boost the rest - a demand-led menu that protects margin, upsell cues your team can execute, and retention loops that keep customers coming back.
      </>
    ),
  },
  
]

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

export function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={ref} className="relative w-full overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('${HeroImage.src}')` }}
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E0758]/5 to-[#1E0758]" />

      <div className="relative z-10">

        {/* HERO */}
        <div className="relative min-h-screen px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 pt-32 sm:pt-32 md:pt-40 lg:pt-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">

          {/* LEFT : Heading */}
          <div
            className="
              w-full
              lg:w-1/2
              flex-shrink-0
              text-center
              lg:text-left
            "
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={heroSlides[index].title}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
                className="
                  text-white
                  font-avant
                  font-[700]
                  tracking-[-1px]
                  leading-[1.15]
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                  xl:text-7xl
                  text-balance
                  mb-8
                  lg:mb-0
                "
                style={{ fontVariantNumeric: "slashed-zero" }}
              >
                {heroSlides[index].title}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* RIGHT : Description + Button */}
          <div
            className="
              w-full
              lg:w-1/2
              flex-shrink-0
              text-center
              lg:text-left
              flex
              flex-col
              items-center
              lg:items-start
            "
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="
                  text-white
                  font-gotham
                  leading-relaxed
                  mb-8
                  text-sm
                  sm:text-base
                  md:text-lg
                  lg:text-xl
                  xl:text-2xl
                  max-w-full
                  lg:max-w-lg
                  text-balance
                "
              >
                {heroSlides[index].description}
              </motion.p>
            </AnimatePresence>

            <button
              className="
                h-11
                sm:h-12
                md:h-13
                px-8
                sm:px-10
                md:px-12
                rounded-full
                bg-[#9F7CEF]
                text-white
                text-sm
                sm:text-base
                md:text-lg
                transition
                hover:scale-105
                hover:bg-opacity-90
                active:scale-95
                whitespace-nowrap
              "
            >
              Get a Demo
            </button>
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="-mt-[200px] mx-auto max-w-[1600px] px-[24px] md:px-[64px] lg:px-[120px] pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] justify-items-center">

            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="w-full flex justify-center"
              >
                <div
                  className="
                    relative
                    w-full
                    max-w-[380px] md:max-w-[340px] lg:max-w-[460px]
                    min-h-[320px] md:min-h-[300px] lg:min-h-[520px]
                    p-5 md:p-4 lg:p-8
                    rounded-[6px]
                    backdrop-blur-[10px]
                    bg-[linear-gradient(180deg,rgba(31,29,34,0.82)_0%,rgba(42,18,102,0.82)_100%)]
                    border border-white/10
                    transition-all duration-300
                    hover:border-purple-400/50
                    hover:shadow-[0_0_20px_rgba(124,92,255,0.25)]
                    overflow-hidden
                  "
                >
                  <Image src={CardPattern} alt="pattern" fill className="object-cover opacity-20" />

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Image src={PointerIcon} alt="pointer" width={14} height={14} />
                        <h2 className="text-white font-avant text-[18px] md:text-[14px] lg:text-[22px] font-[500] tracking-[-0.3px]">
                          {feature.title}
                        </h2>
                      </div>

                      <p className="text-purple-300 text-[14px] md:text-[10px] lg:text-[16px] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    <div className="flex justify-center md:mt-0 lg:mt-3">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        className="object-contain max-h-[80px] md:max-h-[130px] lg:max-h-[300px]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}
