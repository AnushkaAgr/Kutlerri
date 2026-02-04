"use client"

import Image, { StaticImageData } from "next/image"
import { motion } from "framer-motion"

interface ProductHeroProps {
  title: string
  description: string
  ctaText: string
  image: StaticImageData
  agents: string[]
}

export function ProductHero({
  title,
  description,
  ctaText,
  image,
  agents,
}: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#381D7D] via-[#381D7D] to-[#381D7D] h-screen flex items-center">

      <div className="relative z-10 mx-auto max-w-[1700px] px-6 md:px-12 lg:px-[72px] grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-white font-avant font-bold text-[40px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[1.05] mb-6">
            {title}
          </h1>

          <p className="text-white font-gotham text-[16px] sm:text-[18px] md:text-[20px] max-w-xl mx-auto lg:mx-0 mb-8">
            {description}
          </p>

          <button
            className="
              rounded-full bg-[#9F7CEF]
              px-8 py-2
              text-white font-gotham
              transition-all duration-300
              hover:scale-[1.05]
              
            "
          >
            {ctaText}
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
       <motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9, delay: 0.2 }}
  className="flex justify-center lg:justify-end"
>
  <Image
    src={image}
    alt={title}
    priority
    className="
      w-full
      max-w-[700px]
      md:max-w-[800px]
      lg:max-w-[900px]
      xl:max-w-[1000px]
      h-auto
      object-contain
    "
  />
</motion.div>

      </div>

      {/* Fade bottom */}
      {/* <div
        className="absolute bottom-0 left-0 right-0 h-[140px] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(30,7,88,0) 0%, rgba(30,7,88,0.6) 50%, rgba(30,7,88,1) 100%)",
        }}
      /> */}
    </section>
  )
}
