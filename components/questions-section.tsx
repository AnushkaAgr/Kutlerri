"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import pattern from "../public/images/GlobalPattern.png"

const questions = [
  { avatar: "JM", question: "Which nearby businesses are most likely to order catering in the next 30–60 days?" },
  { avatar: "SK", question: "What do guests ask for that we don’t offer?" },
  { avatar: "AL", question: "What is the true attach rate by item, channel, and daypart?" },
  { avatar: "RW", question: "Who are our top 10% guests?" },
  { avatar: "DP", question: "Why did our rating drop this week?" },
  { avatar: "MH", question: "How much revenue did a 0.1 rating drop cost?" },
  { avatar: "CB", question: "Which ingredient is the biggest waste dollar driver?" },
  { avatar: "TN", question: "Which SKUs expire before we use them?" },
  { avatar: "KR", question: "Did we prep the right amount today?" },
  { avatar: "LS", question: "Where is overtime coming from?" },
]


export function QuestionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative pb-40 overflow-hidden bg-[#F8F0FF]">
      <div className="h-[50px] bg-[#FFFFFF80] w-screen pb-30"></div>
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${pattern.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.4,
        }}
      />



      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F0FF] via-transparent to-[#F8F0FF] z-[1]" />

      {/* Heading */}
      <div className="relative mx-auto max-w-7xl px-6 mb-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-avante font-bold text-[#300B60] mb-6 text-balance">
            Questions Our Agents Answer
          </h2>

          <p className="text-[#2E312E] font-gotham text-[18px] md:text-[20px] max-w-2xl mx-auto">
            Clear, data-backed answers to everyday restaurant operator questions, delivered automatically by our 50+ AI agents.
          </p>
        </motion.div>
      </div>

      {/* STRIP 1 */}
      <motion.div className="relative flex gap-4 mb-6 mt-20 z-10">
        <div className="flex gap-4 animate-scroll-left">
          {[...questions, ...questions].map((item, i) => (
            <Pill key={`row1-${i}`} item={item} />
          ))}
        </div>
      </motion.div>

      {/* STRIP 2 */}
      <motion.div className="relative flex gap-4 mb-6 z-10">
        <div className="flex gap-4 animate-scroll-right">
          {[...questions.slice(2), ...questions, ...questions.slice(2)].map((item, i) => (
            <Pill key={`row2-${i}`} item={item} />
          ))}
        </div>
      </motion.div>

      {/* STRIP 3 */}
      <motion.div className="relative flex gap-4 z-10">
        <div className="flex gap-4 animate-scroll-left">
          {[...questions.slice(4), ...questions, ...questions.slice(4)].map((item, i) => (
            <Pill key={`row3-${i}`} item={item} />
          ))}
        </div>
      </motion.div>

      {/* Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-left {
          animation: scroll-left 90s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 100s linear infinite;
        }
      `}</style>

    </section>
  )
}

/* Pill Component */
function Pill({ item }: { item: { avatar: string; question: string } }) {
  return (
    <div
      className="
        flex items-center gap-3
        px-5 py-4
        sm:px-6 sm:py-4
        md:px-7 md:py-5
        rounded-full
        bg-[#DBCCFF]
        text-black
        font-avant
        text-[14px]
        sm:text-[15px]
        md:text-[16px]
        whitespace-nowrap shrink-0
        transition-colors
      "
    >
      <div
        className="
          h-8 w-8
          sm:h-9 sm:w-9
          rounded-full
          bg-black text-white
          flex items-center justify-center
          text-xs font-medium
        "
      >
        {item.avatar}
      </div>

      <span className="leading-tight">{item.question}</span>
    </div>
  )
}
