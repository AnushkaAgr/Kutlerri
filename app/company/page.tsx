"use client"

import { Navbar } from "@/components/navbar"


export default function CompanyPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col">
            <Navbar />

            <div className="flex-1 pt-32 pb-24 px-6 md:px-10 lg:px-[72px]">
                <div className="max-w-5xl mx-auto">

                    {/* Hero Section */}
                    <div className="mb-20">
                        <h1 className="text-[#300B60] font-avant text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8">
                            About Kutlerri
                        </h1>

                        {/* <p className="font-gotham text-xl md:text-2xl text-[#323232]/80 leading-relaxed">
                            Kutlerri was built for the moment a restaurant becomes a system.
                        </p> */}
                    </div>

                    {/* Core Narrative */}
                    <div className="space-y-10 font-gotham text-lg md:text-xl text-[#323232]/80 leading-relaxed">

                        <div className="space-y-6">
                            <p> Kutlerri was built for the moment a restaurant becomes a system.</p>
                            <p>
                                At one location, you can run on instinct. You know your people. You feel the floor. You catch problems before they hit the P&amp;L.
                            </p>
                            <p>
                                At 3–20 locations, that superpower breaks. The business starts moving faster than your visibility. A little over-prep here, a little labor drift there, one promo that quietly loses money—multiplied across stores—until margin disappears and you only see it when month-end closes.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <p>
                                And it’s not because you’re not working hard enough. You’re working too hard-just to stitch together the truth.
                            </p>
                            <p>
                                POS in one tab. Delivery platforms in another. Labor, invoices, reviews-everywhere. Your team spends nights reconciling, explaining, guessing. Decisions get delayed. Then the same mistakes repeat because no one had a clean signal early enough.
                            </p>
                        </div>

                        {/* Highlight Section */}

                        <p>
                            Kutlerri turns that chaos into clarity.
                        </p>
                        <p>
                            We connect scattered signals and translate them into operator-grade decisions you can trust-fast, consistent, and repeatable across every store.
                        </p>


                        <div className="space-y-6">
                            <p>
                                Because winning brands won’t be built on more dashboards.
                            </p>
                            <p>
                                They’ll be built on the shortest path from signal → decision → action-before the damage is done.
                            </p>
                        </div>

                        <h3 className="text-[#300B60] font-avant text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-tight mb-8 text-right">
                            Team Kutlerri
                        </h3>


                    </div>
                </div>
            </div>


        </main>
    )
}
