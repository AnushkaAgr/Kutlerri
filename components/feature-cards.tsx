"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

import PointerIcon from "../public/images/HomePage/Pointer.png";
import CardPattern from "../public/images/HomePage/CardPattern.png";

import Img1 from "../public/images/HomePage/RevenueGrowthSuite.png";
import Img2 from "../public/images/HomePage/CostControlSuite.png";
import Img3 from "../public/images/HomePage/BusinessExpansionSuite.png";

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
];

export function FeatureCards() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative -mt-[220px] z-20 pb-28 overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1700px] px-4 md:px-6 lg:px-[132px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5 justify-items-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="w-full flex justify-center"
            >
              {/* Card */}
              <div
                className="
                  relative
                  w-full max-w-[460px] min-h-[320px] md:min-h-[360px] lg:min-h-[510px]
                  px-4 md:px-4 lg:px-6 py-4 md:py-4 lg:py-5
                  flex flex-col justify-between
                  rounded-lg
                  backdrop-blur-[12px]
                  bg-[linear-gradient(180deg,rgba(31,29,34,0.82)_0%,rgba(42,18,102,0.82)_100%)]
                  border border-white/10
                  shadow-[0_8px_30px_rgba(0,0,0,0.35)]
                  transition-all duration-300
                  hover:border-purple-400/40
                  hover:shadow-[0_0_28px_rgba(124,92,255,0.22)]
                  overflow-hidden
                "
              >
                {/* Subtle pattern overlay */}
                <Image
                  src={CardPattern}
                  alt=""
                  fill
                  className="object-cover opacity-[0.15]"
                />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  {/* Header + text */}
                  <div>
                    <div className="flex items-center gap-2 md:gap-2 lg:gap-3 mb-1 md:mb-1 lg:mb-2">
                      <Image
                        src={PointerIcon}
                        alt=""
                        width={14}
                        height={14}
                        className="shrink-0 opacity-80 w-[10px] h-[10px] md:w-[12px] md:h-[12px] lg:w-[14px] lg:h-[14px]"
                      />

                      <h3 className="text-white font-avant text-[14px] md:text-[16px] lg:text-[22px] font-medium tracking-[-0.3px]">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="text-purple-300 text-[12px] md:text-[13px] lg:text-[16px] leading-[1.5] md:leading-[1.55] lg:leading-[1.65]">
                      {feature.description}
                    </p>
                  </div>

                  {/* Illustration */}
                  <div className="flex justify-center mt-2 md:mt-3 lg:mt-4">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      className="object-contain max-h-[140px] md:max-h-[180px] lg:max-h-[260px] w-auto"
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
