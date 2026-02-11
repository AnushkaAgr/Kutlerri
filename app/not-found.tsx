import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { ArrowRight } from "lucide-react"

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#381D7D] flex flex-col justify-between">
            <Navbar />

            <div className="flex-1 flex flex-col items-center justify-center text-center px-6">

                {/* Optional Faint Background Text */}
                <h1 className="absolute text-[120px] md:text-[200px] font-avant font-bold text-white/5 leading-none select-none pointer-events-none">
                    Secret
                </h1>

                <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-avant font-bold text-white leading-tight">
                        You found our secret folder.
                    </h2>

                    <p className="text-white/80 font-gotham text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        Most “resources” are marketing. Ours will be instructions. <br className="hidden md:block" />
                        We are <span className="font-bold text-[#9F7CEF]">COOKING</span> a playbook for you. Wait for it.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                        {/* Get a Demo CTA */}
                        <Link
                            href="/get-a-demo"
                            className="
                                inline-flex items-center justify-center gap-2
                                rounded-full bg-[#9F7CEF]
                                px-8 py-3 w-full md:w-auto
                                text-white font-gotham font-bold
                                transition-all duration-300
                                hover:scale-105
                                hover:shadow-[0_0_20px_rgba(159,124,239,0.5)]
                            "
                        >
                            Talk to a human
                        </Link>

                        {/* Home CTA */}
                        <Link
                            href="/"
                            className="
                                inline-flex items-center justify-center gap-2
                                rounded-full border border-white/20 hover:bg-white/10
                                px-8 py-3 w-full md:w-auto
                                text-white font-gotham font-medium
                                transition-all duration-300
                            "
                        >
                            Back to Home
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
