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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#381D7D] via-[#381D7D] to-[#381D7D] min-h-screen py-24 md:py-16 flex items-center">

      <div className="relative z-10 mx-auto max-w-[1700px] w-full px-4 sm:px-6 md:px-12 lg:px-[72px] grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1
            className="text-white font-avant font-bold leading-[1.05] mb-4 md:mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw + 1rem, 5rem)' }}
          >
            {title}
          </h1>

          <p
            className="text-white font-gotham max-w-xl mx-auto lg:mx-0 mb-6 md:mb-8"
            style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1.25rem)' }}
          >
            {description}
          </p>

          <button
            className="
              rounded-full bg-[#9F7CEF]
              px-6 sm:px-8 py-2
              text-sm sm:text-base
              text-white font-gotham
              transition-all duration-300
              hover:scale-[1.05]
              cursor-pointer
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
              max-w-[320px]
              sm:max-w-[450px]
              md:max-w-[600px]
              lg:max-w-[750px]
              xl:max-w-[900px]
              2xl:max-w-[1000px]
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
