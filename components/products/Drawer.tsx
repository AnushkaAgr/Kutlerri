"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"

type Agent = {
  id: string
  name: string
}

type DrawerProps = {
  agents: Agent[]
  selectedId: string
  onSelect: (agent: Agent) => void
}

export function Drawer({ agents, selectedId, onSelect }: DrawerProps) {
  const { scrollYProgress } = useScroll()

  // Map scroll (0 → 1) to shorter width (0% → 60%)
  const rawWidth = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])

  // Smooth it with spring
  const smoothWidth = useSpring(rawWidth, {
    stiffness: 200,
    damping: 14,
    mass: 0.3,
  })

  return (
    <aside
      className="
        sticky top-[81px]
        min-w-[250px]
        w-[401px] h-[766px]
        bg-[#F4ECFF]
        rounded-tl-3xl
        p-10
        lg:pl-20
        md:pl10
      "
    >
      <ul className="space-y-10">
        {agents.map((agent) => {
          const isActive = selectedId === agent.id

          return (
            <li
              key={agent.id}
              onClick={() => onSelect(agent)}
              className="cursor-pointer"
            >
              {/* Agent Name */}
              <p
                className="
                  text-[#323232]
                  font-[700]
                  text-[16px]
                  tracking-[-0.48px]
                  font-avant
                "
              >
                {agent.name}
              </p>

              {/* Progress Line ONLY for active */}
              {isActive && (
                <div className="mt-3 h-[4px] w-[120px] relative overflow-hidden bg-[#DDD] rounded-full">
                  <motion.div
                    style={{ width: smoothWidth }}
                    className="absolute left-0 top-0 h-full bg-[#323232] origin-left rounded-full"
                  />
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
