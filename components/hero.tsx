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
    }, 6000);

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

      {/* Bottom purple gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(30, 7, 88, 0.00) 0%, #1E0758 100%)'
        }}
      />

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
              lg:pb-[340px]
            "
          >
            {/* LEFT */}
            <div
              className="
                max-w-[620px]
                relative
                lg:-top-[32px]
                xl:-top-[48px]
                min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[220px]
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
                  className="overflow-hidden"
                >
                  <HeroHeading title={slide.title} />
                </motion.div>
              </AnimatePresence>
            </div>

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
                min-h-[480px] sm:min-h-[420px] md:min-h-[380px] lg:min-h-[400px]
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.title}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.1,
                        duration: 0.5
                      }
                    }
                  }}
                  className="overflow-hidden"
                >
                  {/* Paragraph 1 */}
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    className="text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed"
                  >
                    {(() => {
                      const p1 = slide.rightContent.paragraph1;
                      const sentences = p1.match(/[^.!?]+[.!?]+/g) || [p1];
                      if (sentences.length <= 1) {
                        return <span className="font-semibold">{p1}</span>;
                      }
                      const last = sentences.pop();
                      const rest = sentences.join(" ");
                      return (
                        <>
                          <span className="opacity-80">{rest} </span>
                          <span className="font-semibold">{last}</span>
                        </>
                      );
                    })()}
                  </motion.p>

                  {/* Paragraph 2 */}
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    className="mt-6 text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed"
                  >
                    {(() => {
                      const p2 = slide.rightContent.paragraph2;
                      const agentsIndex = p2.indexOf("Agents");
                      const colonIndex = p2.indexOf(":");
                      const splitIndex = colonIndex !== -1 ? colonIndex : (agentsIndex !== -1 ? agentsIndex + 6 : -1);

                      if (splitIndex !== -1) {
                        const namePart = p2.substring(0, splitIndex).trim();
                        const descPart = p2.substring(splitIndex).trim();

                        return (
                          <>
                            <span className="font-semibold ">
                              {namePart.startsWith("Kutlerri’s") ? "Kutlerri’s" : ""}
                            </span>{" "}
                            <span className="font-semibold">
                              {namePart.startsWith("Kutlerri’s") ? namePart.replace("Kutlerri’s", "").trim() : namePart}
                            </span>{" "}
                            <span className="opacity-80">
                              {descPart}
                            </span>
                          </>
                        );
                      }
                      return <span className="opacity-80">{p2}</span>;
                    })()}
                  </motion.p>
                </motion.div>
              </AnimatePresence>

              {/* CTA - Fixed Position */}
              <div className="absolute bottom-0 left-0 mb-3">
                <button
                  className="
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
            hover:scale-105
            hover:shadow-[0_0_20px_rgba(159,124,239,0.5)]
            transition-all duration-300
            cursor-pointer
          "
                >
                  {slide.rightContent.ctaText}
                </button>
              </div>
            </div>
          </div>
        </div>
        <FeatureCards />
      </div>
    </section>
  );
}