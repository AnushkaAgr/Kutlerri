
"use client"

import { Navbar } from "@/components/navbar"
import { GetDemoForm } from "@/components/GetDemoForm"
import { motion } from "framer-motion"

export default function GetDemoPage() {
    return (
        <main className="min-h-screen bg-[#F6F0FF]">
            <Navbar />

            <div className="relative pt-32 pb-20 px-6">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-linear-to-b from-[#E2D5FF]/50 to-transparent blur-[120px] -z-10" />

                <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-purple-200 text-[#7C5CFA] text-sm font-semibold tracking-wide uppercase">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                            </span>
                            Experience Kutlerri
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-[#300B60] leading-[1.1] font-avant tracking-tight">
                            See how our agents <br />
                            <span className="text-[#7C5CFA]">scale your restaurant.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-[#2E312E]/70 max-w-lg leading-relaxed">
                            Get a personalized walkthrough of how our AI agents can optimize your revenue,
                            control costs, and manage your operations automatically.
                        </p>

                        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {[
                                { title: "Personalized", desc: "Tailored to your POS & scale" },
                                { title: "Actionable", desc: "Live ROI calculations" },
                                { title: "Expert-led", desc: "Guided by industry veterans" },
                                { title: "Fast", desc: "Set up in under 30 minutes" },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-[#7C5CFA]/10 flex items-center justify-center shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-[#7C5CFA]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#300B60]">{item.title}</h4>
                                        <p className="text-sm text-[#2E312E]/60">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/40 backdrop-blur-xl p-8 md:p-12 rounded-[32px] border border-white/60 shadow-2xl shadow-purple-500/5 relative"
                    >
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#7C5CFA]/10 blur-3xl rounded-full" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#E2D5FF]/20 blur-3xl rounded-full" />

                        <div className="relative z-10">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-[#300B60] font-avant">Get a Demo</h2>
                                <p className="text-[#2E312E]/60 mt-1">Fill in the details below to get started.</p>
                            </div>

                            <GetDemoForm />
                        </div>
                    </motion.div>

                </div>
            </div>
        </main>
    )
}
