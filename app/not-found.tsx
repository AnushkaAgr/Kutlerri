import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { ArrowRight } from "lucide-react"

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#381D7D] flex flex-col justify-between">
            <Navbar />

            <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-[120px] md:text-[200px] font-avant font-bold text-white/10 leading-none select-none">
                    Coming Soon
                </h1>

                <div className="-mt-12 md:-mt-20 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-avant font-bold text-white mb-6">
                        Page Not Found
                    </h2>

                    {/* <p className="text-white/80 font-gotham text-lg max-w-md mx-auto mb-10">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p> */}

                    <Link
                        href="/"
                        className="
              inline-flex items-center gap-2
              rounded-full bg-[#9F7CEF]
              px-8 py-3
              text-white font-gotham font-medium
              transition-all duration-300
              hover:scale-105
              hover:shadow-[0_0_20px_rgba(159,124,239,0.5)]
            "
                    >
                        Back to Home
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </main>
    )
}
