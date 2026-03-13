import Image from "next/image"
import Link from "next/link"

type Props = {
  text: string
  buttonLabel: string
  buttonHref: string
}

export function BlogBottomCTA({ text, buttonLabel, buttonHref }: Props) {
  return (
    <section className="max-w-[1200px] mx-auto rounded-4xl mt-10 relative overflow-hidden bg-[#2B145F] px-6 md:px-10 lg:px-[72px] py-12 md:py-16">
      {/* Background vector art */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none select-none">
        <Image
          src="/images/blogPageImages/Vector.png"
          alt=""
          width={900}
          height={400}
          className="w-[55%] md:w-[45%] h-full object-cover opacity-60"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto">
        <p className="font-avant font-bold text-white text- md:text-xl lg:text-2xl leading-snug mb-8">
          {text}
        </p>
        <Link
          href={buttonHref}
          className="inline-block bg-[#7C5CBF] hover:bg-[#6b4dae] text-white text-sm font-gotham font-medium px-6 py-2.5 rounded-full transition-colors duration-200"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
