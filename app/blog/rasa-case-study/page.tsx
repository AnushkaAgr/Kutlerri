import { Navbar } from "@/components/navbar";
import { BlogArticle, type BlogData } from "@/components/blog/BlogArticle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How RASA Added 3% Weekly Catering Revenue Without Hiring Anyone | Kutlerri",
  description:
    "Four months ago, RASA waited for catering orders to arrive. Today they go after them. See how Kutlerri built and ran the full catering motion for RASA — no new hires, no paid ads, no discounting.",
  alternates: { canonical: "/blog/rasa-case-study" },
  openGraph: {
    title:
      "How RASA Added 3% Weekly Catering Revenue Without Hiring Anyone | Kutlerri",
    description:
      "See how Kutlerri built and ran the full catering motion for RASA — $509K in catering revenue in five months.",
    url: "https://kutlerri.ai/blog/rasa-case-study",
    type: "article",
  },
};

const blogData: BlogData = {
  title: "How RASA Added 3% Weekly Catering Revenue Without Hiring Anyone",
  tags: [
    "Catering revenue growth",
    "Customer success story",
    "AI for restaurants",
    "Catering co-pilot",
    "Restaurant Catering",
    "Outbound catering strategy",
  ],
  readTime: "2 min",
  publishDate: "March 27, 2026",
  author: {
    name: "Sthita",
    designation: "Kutlerri",
  },
  sidebarImage: "/images/blogPageImages/rasa.jpeg",
  ctaText: "Book a demo and see exactly how it works for your restaurant.",
  ctaButtonLabel: "Get a Demo",
  ctaButtonHref: "/get-a-demo",
  sections: [
    {
      id: "problem-not-restaurant",
      title: "The Problem Was Not the Restaurant",
    },
    { id: "what-kutlerri-built", title: "What Kutlerri Built" },
    { id: "results-four-months", title: "The Results Four Months In" },
    {
      id: "activating-catering-channel",
      title: "This Is What Activating a Catering Channel Actually Looks Like",
    },
  ],
  contentHtml: `
    <p style="font-size:1.125rem;line-height:1.75;margin-bottom:2rem;color:#323232;">
      Four months ago, RASA waited for catering orders to arrive. Today they go after them.
    </p>
    <p style="margin-bottom:1.25rem;">
      That shift did not require a new hire. It did not require a marketing budget or a dedicated sales team. It required one thing: a system that stopped waiting for catering orders to arrive and started going out to find them.
    </p>
    <p style="margin-bottom:1.25rem;">
      Here is what that looked like in practice.
    </p>

    <h2 id="problem-not-restaurant" style="font-size:1.5rem;font-weight:700;color:#1A1A1A;margin-top:0;margin-bottom:1.25rem;">
      The Problem Was Not the Restaurant
    </h2>
    <p style="margin-bottom:1.25rem;">
      RASA is a well-run operation. Good food, loyal customers, a team that handles every order that comes through with care. None of that was in question.
    </p>
    <p style="margin-bottom:1.25rem;">
      What was in question was everything happening outside the inbox.
    </p>
    <p style="margin-bottom:1.25rem;">
      The corporate offices within five miles placing weekly lunch orders with a competitor. The healthcare campuses running recurring team meals with a vendor they found two years ago. The co-working spaces, law firms, and tech companies that would have ordered from RASA if anyone had ever reached out.
    </p>
    <p style="margin-bottom:1.25rem;">
      RASA had a catering operation. What they did not have was a catering market. Nobody had mapped it. Nobody had built a database from it. Nobody had gone after it.
    </p>
    <p style="margin-bottom:1.25rem;">
      That is where Kutlerri came in.
    </p>

    <h2 id="what-kutlerri-built" style="font-size:1.5rem;font-weight:700;color:#1A1A1A;margin-top:0;margin-bottom:1.25rem;">
      What Kutlerri Built
    </h2>
    <p style="margin-bottom:1.25rem;">
      We started where most catering programs never start: the demand that exists before anyone picks up the phone.
    </p>
    <p style="margin-bottom:1.25rem;">
      We mapped the full catering market within a three, five, and ten mile radius of each RASA location. From that map, we built a structured contact database of the specific decision-makers placing catering orders inside those businesses. Office managers. Executive assistants. HR coordinators. The people who actually decide where lunch comes from.
    </p>
    <p style="margin-bottom:1.25rem;">
      Then we built the outbound motion. Prioritized by fit. Sequenced by cadence. Personalized by industry and context. Each prospect cluster got messaging calibrated to their world, not a generic vendor pitch that reads like every other email in their inbox.
    </p>
    <p style="margin-bottom:1.25rem;">
      Sequences ran across email and calls over a structured two to three week cadence. Every response was categorized by intent and routed into the inbound flow to move toward a quote and close. Nothing fell through.
    </p>
    <p style="margin-bottom:1.25rem;">
      On the inbound side, we tightened the process so every inquiry, whether it arrived through email, the website, or a phone call, moved through the same structured flow. Same response time. Same quote process. Same follow-up cadence for anything that went quiet.
    </p>
    <p style="margin-bottom:1.25rem;">
      RASA's team focused on delivering great food. Kutlerri ran the motion.
    </p>

    <h2 id="results-four-months" style="font-size:1.5rem;font-weight:700;color:#1A1A1A;margin-top:0;margin-bottom:1.25rem;">
      The Results Four Months In
    </h2>
    <p style="margin-bottom:1.25rem;">
      The numbers are clear.
    </p>
    <p style="margin-bottom:1.25rem;">
      Since Kutlerri set up and ran the outbound motion for Rasa, we have generated 900+ qualified leads in the pipeline, with 33,412 outbound touchpoints executed. Nearly one in three qualified prospects became a paying catering order.
    </p>
    <p style="margin-bottom:1.25rem;">
      That motion has driven $509K in catering revenue in just five months ($208K directly Kutlerri-driven) and built a $1.2M annualised pipeline. Catering now accounts for 7% of total business, from a channel that was sitting completely untapped just five months ago.
    </p>
    <p style="margin-bottom:1.25rem;">
      And unlike every other growth channel, the cost of running catering stays sub 10%. Paid ads, platform fees, third-party delivery all run between 18 and 30%. Catering runs cleaner than all of them.
    </p>
    <p style="margin-bottom:1.25rem;">
      No new hires. No paid advertising. No discounting to win accounts. A system that found the demand, reached the right people, and followed up until the orders came in.
    </p>

    <h2 id="activating-catering-channel" style="font-size:1.5rem;font-weight:700;color:#1A1A1A;margin-top:0;margin-bottom:1.25rem;">
      This Is What Activating a Catering Channel Actually Looks Like.
    </h2>
    <p style="margin-bottom:1.25rem;">
      Four months. A mapped market. A built database. A structured outbound motion running consistently across email and calls. And a catering program that went from reactive to revenue-generating without a single new hire.
    </p>
    <p style="margin-bottom:1.25rem;">
      That is not a turnaround story. That is what happens when a well-run restaurant finally has the system to match the demand that was sitting outside its door the entire time.
    </p>
    <p style="margin-bottom:1.25rem;">
      RASA did not find a new market. They activated the one they already had.
    </p>

    <h3 style="font-size:1.25rem;font-weight:700;color:#1A1A1A;margin-top:2rem;margin-bottom:1rem;">
      Related Reading
    </h3>
    <ul style="margin-bottom:1.25rem;padding-left:1.5rem;list-style-type:disc;">
      <li style="margin-bottom:0.5rem;">
        <a href="/blog/catering-goldmine" style="color:#6B3FA0;text-decoration:underline;">Your Restaurant Is Sitting on a Catering Goldmine. Here's What's Blocking It.</a>
      </li>
      <li style="margin-bottom:0.5rem;">
        <a href="/blog/catering-playbook" style="color:#6B3FA0;text-decoration:underline;">The Catering Playbook: How to Build a Revenue Channel That Runs Without Chaos</a>
      </li>
    </ul>
  `,
};

export default function RasaCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://kutlerri.ai",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Resources",
                item: "https://kutlerri.ai/blog",
              },
              { "@type": "ListItem", position: 3, name: "RASA Case Study" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: blogData.title,
            description:
              "Four months ago, RASA waited for catering orders to arrive. Today they go after them. See how Kutlerri built and ran the full catering motion.",
            datePublished: "2026-03-27",
            author: {
              "@type": "Person",
              name: "Payal",
              url: "https://kutlerri.ai/aboutUs",
              worksFor: { "@type": "Organization", name: "Kutlerri" },
            },
            publisher: {
              "@type": "Organization",
              name: "Kutlerri",
              url: "https://kutlerri.ai",
              logo: "https://kutlerri.ai/icon.svg",
            },
            mainEntityOfPage: "https://kutlerri.ai/blog/rasa-case-study",
          }),
        }}
      />
      <Navbar />
      <BlogArticle data={blogData} />
    </main>
  );
}
