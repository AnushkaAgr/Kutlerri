"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ManagedServices } from "../managed-services";
import { BlogBottomCTA } from "./BlogBottomCTA";
import { blogPosts } from "@/app/blog/blogConfig";
import BlogCard from "./BlogCard";

export type BlogSection = {
  id: string;
  title: string;
};

export type BlogData = {
  title: string;
  tags: string[];
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    designation: string;
    //avatar: string
  };
  sidebarImage: string;
  ctaText: string;
  ctaButtonLabel: string;
  ctaButtonHref: string;
  sections: BlogSection[];
  /** Pre-formatted HTML string from API */
  contentHtml: string;
};

type Props = {
  data: BlogData;
};

export function BlogArticle({ data }: Props) {
  const [activeSection, setActiveSection] = useState("");
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const OFFSET = 130; // px below top of viewport to trigger highlight

    const updateActive = () => {
      let current = "";
      for (const section of data.sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= OFFSET) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive(); // set correct highlight on mount / navigation

    return () => window.removeEventListener("scroll", updateActive);
  }, [data.sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setTocOpen(false);
    }
  };

  return (
    <article className="min-h-screen bg-white">
      {/* Blog Hero - aligned with the content column */}
      <div className="pt-28 md:pt-32 lg:pt-36 pb-10 md:pb-14 px-6 md:px-10 lg:px-[72px]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Spacer matching sidebar width */}
          <div className="hidden lg:block lg:w-[300px] xl:w-[340px] shrink-0" />
        </div>
      </div>

      {/* Two-column layout */}
      <div className="px-6 md:px-10 lg:px-[72px] pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Sidebar */}
          <aside className="w-full lg:w-[300px] xl:w-[340px] shrink-0">
            <div className="lg:sticky lg:top-[96px] space-y-3">
              {/* Top image */}
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={data.sidebarImage}
                  alt="Blog illustration"
                  width={570}
                  height={450}
                  className="w-full h-auto"
                />
              </div>

              {/* Table of Contents */}
              <div className="border border-[#E5E5E5] rounded-xl overflow-hidden">
                {/* TOC Header - collapsible on mobile */}
                <button
                  onClick={() => setTocOpen(!tocOpen)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-[#FAFAFA] border-b border-[#E5E5E5] lg:cursor-default"
                >
                  <h3 className="font-avant font-bold text-[#1A1A1A] text-sm uppercase tracking-wider">
                    Table of Contents
                  </h3>
                  <svg
                    className={`w-4 h-4 text-[#999] transition-transform lg:hidden ${tocOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* TOC Links */}
                <nav className={`${tocOpen ? "block" : "hidden"} lg:block`}>
                  <ul className="py-2">
                    {data.sections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className={`
                            w-full text-left px-5 py-2.5 text-sm font-gotham transition-all duration-200
                            border-l-[3px] hover:bg-[#F8F5FF]
                            ${
                              activeSection === section.id
                                ? "border-[#6B3FA0] text-[#6B3FA0] font-medium bg-[#F8F5FF]"
                                : "border-transparent text-[#555] hover:text-[#6B3FA0]"
                            }
                          `}
                        >
                          {section.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Bottom CTA */}
              <div className="rounded-2xl bg-[#2B145F] p-6 md:p-8">
                <p className="font-avant font-bold text-white leading-snug mb-6">
                  {data.ctaText}
                </p>
                <Link
                  href={data.ctaButtonHref}
                  className="inline-block bg-[#9F7CEF] hover:bg-[#8a68e0] text-white font-bold text-sm px-4 py-2 rounded-full transition-colors duration-200 uppercase tracking-wide"
                >
                  {data.ctaButtonLabel}
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content - rendered from API HTML */}

          <div className="flex-1 min-w-0">
            {/* Title block - aligned with main content */}
            <div className="flex-1 min-w-0">
              {/* Purple accent line */}
              {/*<div className="w-16 h-1 bg-[#6B3FA0] mb-6" />*/}

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-3 text-sm font-gotham text-[#6B6B6B] mb-5">
                {data.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#F0EAFF] text-[#6B3FA0] px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-[#999]">·</span>
                {/*<span>{data.readTime}</span>*/}
              </div>

              <h1 className="font-avant font-bold text-[#1A1A1A] text-3xl md:text-4xl lg:text-[44px] lg:leading-[1.15] tracking-tight max-w-3xl mb-6">
                {data.title}
              </h1>

              {/* Author + publish date */}
              <div className="mb-14">
                <hr className="border-gray-200" />
                <div className="flex items-center justify-between gap-3 font-gotham text-sm leading-tight my-[10px]">
                  <div className="font-gotham text-sm leading-tight">
                    <p className="text-[#1A1A1A] font-medium">
                      {data.author.name}
                    </p>
                    <p className="text-[#999]">{data.author.designation}</p>
                  </div>
                  <p className="text-[#999]">{data.publishDate}</p>
                </div>
                <hr className="border-gray-200" />
              </div>
            </div>

            <div
              className="blog-content font-gotham text-[#323232] text-base md:text-[17px] leading-relaxed md:leading-[1.8]"
              dangerouslySetInnerHTML={{ __html: data.contentHtml }}
            />
          </div>
        </div>

        <BlogBottomCTA
          text="Kutlerri maps your catering demand, builds the prospect database, runs the outbound motion, and handles every inbound inquiry so your catering program runs like a revenue engine, not an afterthought."
          buttonLabel="See Kutlerri in Action"
          buttonHref="/get-a-demo"
        />

        <section className="bg-white">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-[72px] py-16 md:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
