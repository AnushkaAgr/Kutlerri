"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

import PointerIcon from "../public/images/HomePage/Pointer.png";
import CardPattern from "../public/images/HomePage/CardPattern.webp";

import Img1 from "../public/images/HomePage/RevenueGrowthSuite.webp";
import Img2 from "../public/images/HomePage/CostControlSuite.webp";
import Img3 from "../public/images/HomePage/BusinessExpansionSuite.webp";

const features = [
  {
    title: "Revenue Growth Agents",
    description:
      "AI agents to turn your restaurant's data into revenue opportunities across catering, upsells, and repeat customers.",
    image: Img1,
    accent: "rgba(139,92,246,0.65)",
  },
  {
    title: "Cost Control Agents",
    description:
      "AI agents to turn cost data into savings by fixing prep, labor, menus, and unprofitable marketing spend.",
    image: Img2,
    accent: "rgba(109,40,217,0.65)",
  },
  {
    title: "New Store Expansion Agents",
    description:
      "AI agents to analyze demand, sales, and market data to assess new locations, highlighting where expansion makes sense.",
    image: Img3,
    accent: "rgba(124,58,237,0.65)",
  },
];

export function FeatureCards() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative -mt-[160px] md:-mt-[200px] lg:-mt-[360px] xl:-mt-[400px] z-20 pb-28 overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1300px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 lg:gap-5 justify-items-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: index * 0.13,
                ease: "easeOut",
              }}
              className="w-full flex justify-center group"
            >
              {/* Card */}
              <div
                className="
                  relative
                  w-full max-w-[380px] min-h-[320px] md:min-h-[360px] lg:min-h-[430px] xl:min-h-[510px]
                  px-5 md:px-4 lg:px-5 xl:px-7 py-5 md:py-5 lg:py-6
                  flex flex-col justify-between
                  rounded-xl
                  backdrop-blur-[16px]
                  bg-[linear-gradient(160deg,rgba(35,28,60,0.90)_0%,rgba(28,12,80,0.92)_60%,rgba(42,18,102,0.88)_100%)]
                  border border-white/[0.08]
                  shadow-[0_16px_48px_rgba(0,0,0,0.45)]
                  transition-all duration-500
                  hover:border-purple-400/30
                  hover:shadow-[0_20px_60px_rgba(88,28,255,0.25)]
                  hover:-translate-y-1
                  overflow-hidden
                "
              >
                {/* Top-edge glow streak */}
                <div
                  className="absolute top-0 left-[15%] right-[15%] h-[1px] opacity-80"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${feature.accent}, transparent)`,
                  }}
                />

                {/* Pattern overlay */}
                <Image
                  src={CardPattern}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-[0.08]"
                />

                <div className="relative z-10 flex flex-col justify-between h-full gap-3 lg:gap-4">
                  {/* Header area */}
                  <div className="flex flex-col gap-2 lg:gap-3">

                    {/* Title row */}
                    <div className="flex items-center gap-2">
                      <Image
                        src={PointerIcon}
                        alt=""
                        aria-hidden="true"
                        width={12}
                        height={12}
                        className="shrink-0 opacity-85 w-[10px] h-[10px] lg:w-[11px] lg:h-[11px] xl:w-[13px] xl:h-[13px]"
                      />

                      <h3
                        className="text-white font-avant font-semibold tracking-[-0.02em] whitespace-nowrap"
                        style={{ fontSize: "clamp(12.5px, 1.3vw, 22px)" }}
                      >
                        {feature.title}
                      </h3>
                    </div>


                    {/* Description */}
                    <p
                      className="text-purple-200/70 leading-[1.65] min-h-[60px] md:min-h-[68px] lg:min-h-[80px] xl:min-h-[105px]"
                      style={{ fontSize: "clamp(11.5px, 1.05vw, 16px)" }}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Illustration */}
                  <div className="flex justify-center">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      className="object-contain max-h-[130px] md:max-h-[155px] lg:max-h-[195px] xl:max-h-[255px] w-auto transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
