import { Navbar } from "@/components/navbar";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kutlerri | Restaurant AI Company",
  description:
    "Kutlerri was built by people who know what a real growth system looks like and got close enough to restaurants to know they've never had one.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Kutlerri | Restaurant AI Company",
    description:
      "Kutlerri was built by people who know what a real growth system looks like and got close enough to restaurants to know they've never had one.",
    url: "https://kutlerri.ai/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="relative w-full overflow-hidden bg-white pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-28 min-h-dvh flex items-center">
        {/* Vector.png — right aligned */}
        <div className="absolute right-0 w-[400px] sm:w-[60%] h-full pointer-events-none opacity-[0.5]">
          <Image
            src="/images/aboutUsPage/Vector.png"
            alt=""
            fill
            className="object-contain object-right-top"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-[72px]">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-12 items-center">
            {/* Left — Text */}
            <div className="order-2 lg:order-1">
              <h1 className="font-avant text-[#2B145F] text-3xl sm:text-4xl md:text-[44px] font-bold leading-[1.1] tracking-tight mb-6">
                We Came to Make
                <br />
                Restaurant Profit Less
                <br />
                Random.
              </h1>
              <p className="font-gotham text-[#323232]/80 text-base sm:text-lg leading-relaxed max-w-[520px]">
                Kutlerri was built by people who know what a real growth system
                looks like and got close enough to restaurants to know
                they&apos;ve never had one.
              </p>
            </div>

            {/* Right — Team Image (no cropping, object-contain) */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end lg:-mr-[72px] xl:-mr-[90px]">
              <div className="relative w-full">
                <Image
                  src="/images/aboutUsPage/kutlerri_team.png"
                  alt="Kutlerri team"
                  width={900}
                  height={675}
                  className="w-full h-auto object-contain rounded-lg"
                  sizes="(max-width: 640px) 95vw, (max-width: 1024px) 85vw, 60vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ THE KUTLERRI STORY ═══════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#f8f0ff] py-16 md:py-24 lg:py-32">
        {/* shape.png — top right */}
        <div className="absolute bottom-0 left-0 w-[170px] sm:w-[220px] md:w-[284px] lg:w-[340px] h-[260px] sm:h-[338px] md:h-[435px] lg:h-[522px] pointer-events-none">
          <Image
            src="/images/aboutUsPage/shape.png"
            alt=""
            fill
            className="object-contain object-right-top"
            aria-hidden="true"
          />
        </div>

        {/* shape.png — bottom left (flipped) */}
        <div className="absolute top-0 right-0 w-[170px] sm:w-[220px] md:w-[284px] lg:w-[340px] h-[260px] sm:h-[338px] md:h-[435px] lg:h-[522px] pointer-events-none rotate-180">
          <Image
            src="/images/aboutUsPage/shape.png"
            alt=""
            fill
            className="object-contain object-right-top"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-[72px]">
          <h2 className="font-avant text-[#2B145F] text-3xl sm:text-4xl md:text-[44px] font-bold text-center mb-10 md:mb-14">
            The Kutlerri Story
          </h2>

          <div className="font-gotham text-[#323232] text-sm sm:text-base md:text-lg leading-relaxed space-y-6 text-center">
            <p>
              We came from sales. We understood growth. Pipelines, conversion
              rates, revenue motions. How to find an opportunity and run it
              consistently until the number moves.
            </p>
            <p>
              What we didn&apos;t expect was that the most broken growth problem
              we&apos;d ever encounter was in restaurants.
            </p>
            <p>
              It started with someone we cared about. We watched them work
              opening shifts, closing shifts, vendor calls, staffing fires. The
              food was good. The regulars came back. By every visible measure,
              the restaurant was working.
            </p>
            <p>
              But the numbers told a different story. And when we asked why, the
              answer was always some version of{" "}
              <span className="italic">I think</span>, or{" "}
              <span className="italic">probably</span>, or{" "}
              <span className="italic">let me check the reports</span>.
            </p>
            <p>The reports never gave a straight answer either.</p>
            <p>
              We started talking to more operators. Fast casual owners.
              Multi-location teams. Restaurants doing three million dollars a
              year, running hard, stuck at the same margin year after year. Same
              pattern every time. Scattered data. Delayed signals. Decisions
              made on feel because the facts arrived too late to act on.
            </p>
            <p>
              Profit felt random. Like something that happened to them, not
              something they controlled.
            </p>
            <p>That bothered us. So we built Kutlerri.</p>
            <p>
              Starting with catering the cleanest win on the board. Then the
              next lever. And the next. <br /> The goal has never changed: make
              profit less random.
            </p>
            {/*<p className="font-medium text-[#2B145F]">
              The goal has never changed: make profit less random.
            </p>*/}
          </div>
        </div>
      </section>

      {/* ═══════════════════ VISION & MISSION ═══════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#1e0a51] py-16 md:py-24 lg:py-32">
        {/* Vector.png — top aligned */}
        <div className="absolute top-0 left-0 right-0 w-full h-[400px] sm:h-[500px] md:h-[800px] pointer-events-none opacity-[0.2]">
          <Image
            src="/images/aboutUsPage/Vector.png"
            alt=""
            fill
            className="object-contain object-top"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-[72px]">
          {/* Vision Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Vision Text */}
            <div className="order-1">
              <h2 className="font-avant text-white text-3xl sm:text-4xl md:text-[40px] font-bold leading-tight mb-6">
                Vision
              </h2>
              <p className="font-gotham text-white/75 text-sm sm:text-base md:text-lg leading-relaxed">
                Restaurants are run by people who pour everything into their
                work. Early mornings, late nights, decisions that never stop.
                They deserve a business that works as hard as they do. Our
                vision is simple: every operator we work with goes home knowing
                their numbers, owning their growth, and building something that
                lasts.
              </p>
            </div>

            {/* Desk Image — no rounded corners, no shadow */}
            <div className="relative order-2 w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/images/aboutUsPage/desk.png"
                alt="Team working at desk"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Mission Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start mt-12 md:mt-16 lg:mt-20">
            {/* Meeting Image — no rounded corners, no shadow */}
            <div className="relative order-2 md:order-1 w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/images/aboutUsPage/meeting.png"
                alt="Team meeting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Mission Text */}
            <div className="order-1 md:order-2">
              <h2 className="font-avant text-white text-3xl sm:text-4xl md:text-[40px] font-bold leading-tight mb-6">
                Mission
              </h2>
              <p className="font-gotham text-white/75 text-sm sm:text-base md:text-lg leading-relaxed">
                Our mission is to turn restaurant data into decisions. Not
                reports that arrive too late. Not dashboards that raise more
                questions than they answer. Real answers that show up on time,
                point at the right problem, and come with a clear path to fix
                it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ OUR KULTURE ═══════════════════ */}
      <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 lg:py-32">
        {/* Vector.png — bottom aligned */}
        <div className="absolute bottom-0 left-0 right-0 w-full h-[300px] sm:h-[400px] md:h-[500px] pointer-events-none opacity-[0.5]">
          <Image
            src="/images/aboutUsPage/Vector.png"
            alt=""
            fill
            className="object-contain object-right"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-[72px]">
          <h2 className="font-avant text-[#2B145F] text-3xl sm:text-4xl md:text-[44px] font-bold text-center mb-12 md:mb-16">
            Our Kulture
          </h2>

          {/* Top Row — 3 values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12">
            {/* Customer Over Everything */}
            <div className="text-center">
              <h3 className="font-avant text-[#2B145F] text-lg sm:text-xl md:text-[22px] font-bold mb-3">
                Customer Over Everything
              </h3>
              <p className="font-gotham text-[#323232]/70 text-sm sm:text-base leading-relaxed">
                If it&apos;s our comfort vs the customer&apos;s time, money, or
                stress, the customer takes priority.
              </p>
            </div>

            {/* Build the Machine */}
            <div className="text-center">
              <h3 className="font-avant text-[#2B145F] text-lg sm:text-xl md:text-[22px] font-bold mb-3">
                Build the Machine
              </h3>
              <p className="font-gotham text-[#323232]/70 text-sm sm:text-base leading-relaxed">
                Heroics are temporary. Systems are how we win and scale.
              </p>
            </div>

            {/* Ship. Learn. Fix. Repeat. */}
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <h3 className="font-avant text-[#2B145F] text-lg sm:text-xl md:text-[22px] font-bold mb-3">
                Ship. Learn. Fix. Repeat.
              </h3>
              <p className="font-gotham text-[#323232]/70 text-sm sm:text-base leading-relaxed">
                Progress &gt; perfection, as long as we fix fast and learn every
                time. Activity is NOT equal to progress.
              </p>
            </div>
          </div>

          {/* Bottom Row — 2 values centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-[800px] mx-auto">
            {/* Default Driver Mode */}
            <div className="text-center">
              <h3 className="font-avant text-[#2B145F] text-lg sm:text-xl md:text-[22px] font-bold mb-3">
                Default Driver Mode
              </h3>
              <p className="font-gotham text-[#323232]/70 text-sm sm:text-base leading-relaxed">
                If you see it and touch it, you are the driver until it works
                and not until your part is done.
              </p>
            </div>

            {/* One Team, Zero Ego */}
            <div className="text-center">
              <h3 className="font-avant text-[#2B145F] text-lg sm:text-xl md:text-[22px] font-bold mb-3">
                One Team, Zero Ego
              </h3>
              <p className="font-gotham text-[#323232]/70 text-sm sm:text-base leading-relaxed">
                Titles and functions are secondary, Kutlerri wins together, or
                not at all.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
