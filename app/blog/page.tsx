import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { featuredBlog, blogPosts, type BlogPost } from "./blogConfig";
import BlogCard from "@/components/blog/BlogCard";
import { ManagedServices } from "@/components/managed-services";

export const metadata: Metadata = {
  title: "Resources | Kutlerri",
  description:
    "Industry news, insights, and playbooks for restaurant operators building a catering channel.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Resources | Kutlerri",
    description:
      "Industry news, insights, and playbooks for restaurant operators building a catering channel.",
    url: "https://kutlerri.ai/blog",
    type: "website",
  },
};

// ─── Featured post ────────────────────────────────────────────────────────────

function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link
      href={post.href ?? "#"}
      className="block group rounded-2xl overflow-hidden"
    >
      <div className="flex flex-col md:flex-row min-h-[380px] lg:min-h-[420px]">
        {/* Left – illustration panel */}
        <div className="relative bg-[#381D7D] md:w-[42%] min-h-[260px] md:min-h-0 overflow-hidden flex items-center justify-center">
          {/* Decorative circles */}
          <div className="absolute w-[340px] h-[340px] rounded-full border-[40px] border-white/5 -bottom-20 -left-20 pointer-events-none" />
          <div className="absolute w-[260px] h-[260px] rounded-full border-[30px] border-white/5 -top-10 right-10 pointer-events-none" />

          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 42vw"
              priority
            />
          )}

          {/*{post.tag && (
            <span className="absolute top-5 left-5 z-10 bg-[#E53E3E] text-white text-xs font-gotham font-medium px-3 py-1.5 rounded-full">
              {post.tag}
            </span>
          )}*/}
        </div>

        {/* Right – content panel */}
        <div className="bg-white flex-1 px-8 py-10 md:px-10 lg:px-14 flex flex-col justify-between">
          <div>
            <h2 className="font-avant font-bold text-[#1A1A1A] text-2xl md:text-[28px] lg:text-[32px] leading-snug mb-5 group-hover:text-[#381D7D] transition-colors duration-200">
              {post.title}
            </h2>
            <p className="font-gotham text-[#555] text-sm md:text-base leading-relaxed">
              {post.description}
            </p>
          </div>

          {post.date && (
            <p className="font-gotham text-[#999] text-sm mt-8">{post.date}</p>
          )}
        </div>
      </div>
    </Link>
  );
}

// ─── Grid card ────────────────────────────────────────────────────────────────

// ─── CTA banner ───────────────────────────────────────────────────────────────

function CtaBanner() {
  return (
    <div className="relative rounded-3xl bg-[#2B145F] overflow-hidden px-8 py-12 md:px-12 md:py-14 lg:px-16 lg:py-16 flex flex-col md:flex-row items-center gap-10">
      {/* Background vector art */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none select-none">
        <Image
          src="/images/blogPageImages/Vector.png"
          alt=""
          width={900}
          height={400}
          className="w-[70%] md:w-[50%] h-full object-cover opacity-40"
          aria-hidden="true"
        />
      </div>

      {/* Left – copy */}
      <div className="relative z-10 flex-1 max-w-lg">
        <h2 className="font-avant font-bold text-white text-3xl md:text-4xl leading-tight mb-4">
          See Kutlerri in action
        </h2>
        <p className="font-gotham text-white/70 text-sm md:text-base leading-relaxed mb-8">
          We work like an extension of your team, handling analysis, execution,
          and follow-through so you can focus on running your restaurant.
        </p>
        <Link
          href="/get-a-demo"
          className="inline-block bg-[#9F7CEF] hover:bg-[#8a68d8] text-white font-gotham font-medium text-sm px-6 py-3 rounded-full transition-colors duration-200"
        >
          See How We Work
        </Link>
      </div>

      {/* Right – dashboard image */}
      <div className="z-10 flex-1 hidden md:flex items-center justify-end">
        <Image
          src="/images/blogPageImages/blog-image-asset.png"
          alt="Kutlerri dashboard preview"
          width={520}
          height={320}
          className="absolute bottom-0 right-0 w-full max-w-[450px] h-auto rounded-xl object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero + Featured Post ── */}
      <section className="bg-[#6c3fd9]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-[72px] pt-32 md:pt-36 pb-16">
          {/* Heading */}
          <h1 className="font-avant font-bold text-white text-4xl md:text-5xl lg:text-[58px] leading-tight mb-12">
            Industry news,
            <br />
            insights and more.
          </h1>

          {/* Featured card */}
          <FeaturedPost post={featuredBlog} />
        </div>
      </section>

      {/* ── Blog grid ── */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-[72px] py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <ManagedServices />
    </main>
  );
}
