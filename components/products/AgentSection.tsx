"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export type Agent = {
  id: string
  title: string
  description: string
  image: string
  imageAlt?: string
  cards: {
    title: string
    items: string[]
  }[]
}

type AgentSectionProps = {
  agents: Agent[]
}

export function AgentSection({ agents }: AgentSectionProps) {
  const [selectedAgent, setSelectedAgent] = useState(agents[0]?.id)
  const [agentProgress, setAgentProgress] = useState<{ [key: string]: number }>({})
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionTop = sectionRef.current.offsetTop
      const sectionHeight = sectionRef.current.offsetHeight
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY

      const agentHeight = sectionHeight / agents.length
      let visibleIndex = 0
      const newProgress: { [key: string]: number } = {}

      agents.forEach((agent, idx) => {
        const agentTop = sectionTop + idx * agentHeight
        const agentBottom = agentTop + agentHeight

        // Calculate progress for this agent (0 to 100)
        if (scrollY + windowHeight / 2 < agentTop) {
          // Haven't reached this agent yet
          newProgress[agent.id] = 0
        } else if (scrollY + windowHeight / 2 >= agentBottom) {
          // Passed this agent completely
          newProgress[agent.id] = 100
        } else {
          // Currently in this agent's section - calculate percentage
          const scrolledIntoAgent = (scrollY + windowHeight / 2) - agentTop
          const percentage = Math.min(100, Math.max(0, (scrolledIntoAgent / agentHeight) * 100))
          newProgress[agent.id] = percentage
        }

        if (scrollY >= agentTop - windowHeight / 2) {
          visibleIndex = idx
        }
      })

      setAgentProgress(newProgress)
      setSelectedAgent(agents[visibleIndex].id)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener("scroll", handleScroll)
  }, [agents])

  const scrollToAgent = (agentId: string) => {
    const index = agents.findIndex((a) => a.id === agentId)
    if (index === -1 || !sectionRef.current) return

    const sectionTop = sectionRef.current.offsetTop
    const agentHeight = sectionRef.current.offsetHeight / agents.length
    const scrollPosition = sectionTop + index * agentHeight

    window.scrollTo({ top: scrollPosition, behavior: "smooth" })
    setSelectedAgent(agentId)
  }

  return (
    <section ref={sectionRef} className="relative bg-[#F6F0FF] rounded-[40px] py-16 px-6 w-full  pt-40">
      <div className="mx-auto max-w-[1700px]">
        <div className="flex gap-5">

          {/* SIDEBAR */}
          <div className="hidden lg:block w-72 shrink-0 ml-[20px]">
            <div className="sticky top-32 space-y-6">
              {agents.map((a) => (
                <button
                  key={a.id}
                  onClick={() => scrollToAgent(a.id)}
                  className="w-full text-left"
                >
                  <div
                    className={`pb-2 transition font-avant text-[18px] font-bold tracking-[-0.48px] ${selectedAgent === a.id ? "text-[#323232]" : "text-[#323232]/80"
                      }`}
                  >
                    {a.title}
                  </div>

                  <div className="h-[3px] w-full bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#7C5CFA] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${agentProgress[a.id] || 0}%` }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>


          {/* CONTENT */}
          {/* CONTENT */}
          <div className="flex-1 space-y-16 md:space-y-32">
            {agents.map((a) => (
              <motion.div
                key={a.id}
                className="bg-gradient-to-b from-[#F3ECFE] to-[#E2D5FF] 
                 p-6 md:p-10 rounded-[10px]"
              >
                {/* TOP */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">

                  <div>
                    <h2 className="font-avant tracking-[-0.916px] text-[#300B60] 
                         text-[22px] md:text-[30.545px] font-bold mb-3 md:mb-4">
                      {a.title}
                    </h2>
                    <p className="text-sm md:text-lg text-[#2E312E]/60 max-w-xl">
                      {a.description}
                    </p>
                  </div>

                  {/* IMAGE */}
                  <div className="bg-white rounded-2xl shadow p-3 md:p-0">
                    <Image
                      src={a.image}
                      alt={a.imageAlt || a.title}
                      width={350}
                      height={200}
                      className="rounded-xl w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 ">
                  {a.cards.map((card, i) => (
                    <div
                      key={i}
                      className="relative rounded-[16px] bg-[linear-gradient(188deg,#D9CCFA_-1.86%,#D4C4FF_89.1%)]/90
                       min-h-[320px] md:min-h-[420px] 
                       flex flex-col items-center shadow"
                    >
                      {/* Card Title */}
                      <h5 className="font-avant text-[#300B60] text-[16px] md:text-[20px]
                           mb-4 md:mb-6 text-center bg-[#F8F2FF] shadow-[inset_0_0_172.7px_rgba(255,255,255,0.25)] w-full h-16 md:h-20
                           rounded-t-[8px] flex items-center justify-center px-3 shadow">
                        {card.title}
                      </h5>

                      {/* Items */}
                      <div className="relative flex flex-col gap-4 md:gap-6 w-full items-end pl-3 md:pl-6">

                        {card.items.map((item, j) => (
                          <div
                            key={j}
                            className="relative z-10 
                             w-full max-w-[426px] h-[56px] md:h-[66px]
                             rounded-l-[16.535px]
                             bg-gradient-to-r from-white to-[rgba(241,236,253,0)]
                             shadow-[inset_0_0_36.708px_rgba(255,255,255,0.25)]
                             flex items-center justify-center
                             text-[#323232] text-xs md:text-sm text-center px-3 md:px-5"
                          >
                            {item}
                          </div>
                        ))}
                      </div>

                    </div>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>


        </div>
      </div>
    </section>
  )
}
