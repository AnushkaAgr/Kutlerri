"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import HeroImage from "@/public/images/HomePage/hero2.png";
import { heroSlides } from "./heroData";
import { HeroHeading } from "./HeroHeading";
import { FeatureCards } from "./feature-cards";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[index];

  // ✅ SAFETY GUARD (prevents blank render)
  if (!slide) return null;

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <Image
        src={HeroImage}
        alt="Hero background"
        fill
        priority
        className="object-cover object-[center_30%]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-14 lg:px-[72px]">
        <div className="max-w-[1400px] mx-auto">
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1.1fr_0.9fr]
              gap-12
              pt-[140px]
              md:pt-[170px]
              lg:pt-[190px]
              pb-[220px]
              md:pb-[260px]
              lg:pb-[320px]
            "
          >
            {/* LEFT */}
            <div
              className="
    max-w-[620px]
    relative
    lg:-top-[32px]
    xl:-top-[48px]
  "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.title} // 🔥 THIS is what triggers animation on text change
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  <HeroHeading title={slide.title} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT */}
            {/* RIGHT */}
            <div
              className="
    max-w-[620px] lg:max-w-[600px]
    text-white
    font-gotham
    relative
    lg:top-[32px]
    xl:top-[48px]
    lg:ml-[40px]
    xl:ml-[100px]
  "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.title} // 🔥 SAME KEY = PERFECT SYNC
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  {/* Paragraph 1 */}
                  <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed">
                    <span className="opacity-80">
                      {slide.rightContent.paragraph1.split(".")[0]}.
                    </span>{" "}
                    <span className="font-semibold">
                      {slide.rightContent.paragraph1
                        .split(".")
                        .slice(1)
                        .join(".")
                        .trim()}
                    </span>
                  </p>

                  {/* Paragraph 2 */}
                  <p className="mt-6 text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed">
                    <span className="font-semibold text-[#9F7CEF]">
                      Kutlerri’s
                    </span>{" "}
                    <span className="font-semibold">
                      New Store Expansion Agents
                    </span>{" "}
                    <span className="opacity-80">
                      pressure-test demand, competition, and unit economics
                      before you sign.
                    </span>
                  </p>
                </motion.div>
              </AnimatePresence>
              {/* CTA */}
              <button
                className="
          mt-8
          inline-flex
          items-center
          justify-center
          rounded-full
          bg-[#9F7CEF]
          px-6
          py-3
          text-sm
          font-medium
          text-white
          hover:bg-[#8a68e0]
          transition
        "
              >
                {slide.rightContent.ctaText}
              </button>
            </div>
          </div>
        </div>
        <FeatureCards />
      </div>
    </section>
  );
}
