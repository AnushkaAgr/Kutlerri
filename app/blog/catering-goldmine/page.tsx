import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogArticle, type BlogData } from "@/components/blog/BlogArticle";
import { BlogBottomCTA } from "@/components/blog/BlogBottomCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Your Restaurant Is Sitting on a Catering Goldmine. Here's What's Blocking It. | Kutlerri",
  description:
    "Most restaurant operators know catering is an opportunity. What they don't know is how large the gap is between what they're capturing and what's sitting right outside their door.",
  openGraph: {
    title: "Your Restaurant Is Sitting on a Catering Goldmine | Kutlerri",
    description:
      "What's blocking your restaurant from capturing its full catering potential.",
    url: "https://kutlerri.ai/blog/catering-goldmine",
    type: "article",
  },
};

const blogData: BlogData = {
  title:
    "Your Restaurant Is Sitting on a Catering Goldmine. Here's What's Blocking It.",
  tags: ["AI", "Tech Innovations"],
  readTime: "2 min",
  publishDate: "February 26, 2026",
  author: {
    name: "Sthita",
    designation: "Kutlerri",
    //avatar: "/images/blogPageImages/author.png",
  },
  sidebarImage: "/images/blogPageImages/catering-goldmine.png",
  ctaText: "Book a demo and see exactly how it works for your restaurant.",
  ctaButtonLabel: "Get a Demo",
  ctaButtonHref: "/get-a-demo",
  sections: [
    { id: "goldmine-bigger", title: "The Goldmine is Bigger Than You Think" },
    { id: "why-8-percent", title: "Why 8% Feels Normal When it Shouldn't" },
    { id: "blocking-goldmine", title: "What's Actually Blocking the Goldmine" },
    { id: "twenty-percent", title: "The 20% is Not a Stretch Target" },
    {
      id: "question-not-asked",
      title: "Start With the Question You Haven't Asked",
    },
  ],
  contentHtml: `
    <p style="font-size:1.125rem;line-height:1.75;margin-bottom:2rem;color:#323232;">
      Most restaurant operators know catering is an opportunity. What they don't know is how large the gap is between what they're capturing and what's sitting right outside their door.
    </p>
    <p style="margin-bottom:1.25rem;">
      The industry benchmark for catering as a share of total restaurant revenue is 15 to 20% for operators who run it as an active channel. The average for restaurants treating catering as a reactive add-on, which is most of them, sits between 4 and 8%.
    </p>
    <p style="margin-bottom:1.25rem;">
      That gap isn't a small operational inefficiency. On a five-location operation doing $4M in annual revenue, the difference between 8% catering and 20% catering is nearly $500,000 in revenue sitting uncaptured every single year. Revenue that, unlike dine-in or delivery, comes in at higher margins, larger order sizes, and with a predictability that almost no other channel offers.
    </p>
    <p style="margin-bottom:1.25rem;">
      The question worth sitting with isn't whether catering is an opportunity. It's why the gap is this wide, and whether it's your food, your market, or your system that's responsible. Almost always, it's the system. And that's actually good news, because system problems are fixable.
    </p>

    <h2 id="goldmine-bigger" style="font-size:1.5rem;font-weight:700;color:#1A1A1A;margin-top:3rem;margin-bottom:1.25rem;">
      The Goldmine is Bigger Than You Think
    </h2>
    <p style="margin-bottom:1.25rem;">
      Here's what's true about the market within five to ten miles of most restaurant locations right now.
    </p>
    <p style="margin-bottom:1.25rem;">
      There are tech companies, law firms, healthcare offices, co-working spaces, and campus companies that order catering on a recurring basis. Weekly team lunches, monthly all-hands, quarterly client events. The total annual catering spend concentrated in a typical urban or suburban trade area runs into the millions of dollars. It doesn't fluctuate dramatically with the economy. It doesn't disappear when dine-in slows. It reorders on a rhythm that any restaurant with the right system can predict and capture.
    </p>
    <p style="margin-bottom:1.25rem;">
      Catering is not a three-mile game. A well-run catering operation with reliable delivery can realistically serve a ten-mile radius, which in most markets multiplies the addressable opportunity several times over. Most operators are pursuing a fraction of their available catering territory simply because nobody ever mapped the full picture. That demand exists whether you pursue it or not. The only question is who captures it.
    </p>

    <h2 id="why-8-percent" style="font-size:1.5rem;font-weight:700;color:#1A1A1A;margin-top:3rem;margin-bottom:1.25rem;">
      Why 8% Feels Normal When it Shouldn't
    </h2>
    <p style="margin-bottom:1.25rem;">
      The reason most operators accept 4 to 8% catering share isn't complacency. It's the absence of a reference point.
    </p>
    <p style="margin-bottom:1.25rem;">
      When you have no benchmark, flat catering revenue looks like stability. When you have no prospect database, the businesses ordering catering near you are invisible. When your only catering system is an email inbox someone checks when they remember to, you have no way of knowing how many inquiries arrived slowly, got a late response, and quietly moved on.
    </p>
    <p style="margin-bottom:1.25rem;">
      The gap between 8% and 20% doesn't feel like a gap from the inside. It feels like catering just being what catering is: unpredictable, hard to scale, dependent on word of mouth. That feeling is not a market reality. It's a systems problem wearing a market disguise.
    </p>

    <h2 id="blocking-goldmine" style="font-size:1.5rem;font-weight:700;color:#1A1A1A;margin-top:3rem;margin-bottom:1.25rem;">
      What's Actually Blocking the Goldmine
    </h2>
    <p style="margin-bottom:1.25rem;">
      <strong>No visibility into catering potential across the full trade area.</strong> Most operators think about catering in a narrow radius — the businesses they already know, the accounts that have called before. But within a five to ten mile territory sits a concentration of corporate demand most restaurants have never quantified. Without a mapped view of what's actually out there, operators can't compete for accounts their competitors quoted-and-forgot about.
    </p>
    <p style="margin-bottom:1.25rem;">
      <strong>No contact database.</strong> Knowing that demand exists in your trade area and knowing who to call are two different problems. Most operators have neither. Building a real catering prospect database means going beyond the businesses you've heard of. It means scraping and verifying contact records for the decision-makers who actually book catering: office managers, executive assistants, operations leads, HR coordinators. These are the people placing the orders. Without a structured database of verified contacts mapped to your trade area, outreach is guesswork at best.
    </p>
    <p style="margin-bottom:1.25rem;">
      <strong>No structured outbound motion.</strong> A database without a motion is just a list. The operators consistently growing catering have a structured outreach cadence — not a one-time email blast, but a prospecting sequence built around prospect clusters: high-frequency industries first, largest companies by headcount second, businesses within the tightest delivery radius third. Each cluster gets messaging calibrated to their context. Each sequence runs on a defined cadence with follow-up built in. The difference between a restaurant capturing 8% catering share and one capturing 20% is almost never the food. It is almost always the presence or absence of this motion.
    </p>
    <p style="margin-bottom:1.25rem;">
      <strong>Deals lost on response time.</strong> Corporate catering buyers contact two or three restaurants simultaneously. The first to respond with a coherent quote wins the majority of the time. Operations where catering lives in a shared inbox, gets handled between other tasks, and takes three to six hours to turn around a quote are not losing on food quality. They're losing on speed. Every hour of response lag is a percentage point of conversion rate.
    </p>
    <p style="margin-bottom:1.25rem;">
      <strong>Accounts that ordered once and were never followed up.</strong> The single most expensive blockage in most catering operations isn't acquiring new clients. It's failing to retain the ones already won. A customer who ordered a corporate lunch in March and received no follow-up by May is not a loyal account. They're a one-time transaction who happened to call first. Turning single orders into recurring accounts is where catering revenue compounds, and it requires a retention system that almost no restaurant has built.
    </p>

    <h2 id="twenty-percent" style="font-size:1.5rem;font-weight:700;color:#1A1A1A;margin-top:3rem;margin-bottom:1.25rem;">
      The 20% is Not a Stretch Target
    </h2>
    <p style="margin-bottom:1.25rem;">
      Restaurants running catering at 15 to 20% of total revenue aren't operating in exceptional markets or running exceptional food programs. They have built three things their competitors haven't.
    </p>
    <p style="margin-bottom:1.25rem;">
      A way to see the demand that exists near each location. A system that responds to inbound inquiries fast enough to win on speed, not just quality. And so outbound motion that finds, pursues, and follows up with the businesses most likely to become recurring accounts.
    </p>
    <p style="margin-bottom:1.25rem;">
      None of that requires a dedicated catering sales team. It requires a system — one that runs the motion consistently, at the right cadence, without depending on whoever happened to check the inbox today.
    </p>
    <p style="margin-bottom:1.25rem;">
      The goldmine isn't locked because demand is low or the market is saturated. It's locked because the tools to access it were never built. And tool problems, unlike market problems, have a direct solution.
    </p>

    <h2 id="question-not-asked" style="font-size:1.5rem;font-weight:700;color:#1A1A1A;margin-top:3rem;margin-bottom:1.25rem;">
      Start With the Question You Haven't Asked
    </h2>
    <p style="margin-bottom:1.25rem;">
      Before you can unlock the goldmine, you need to know exactly what's in it. How many businesses within five to ten miles of each of your locations are active catering buyers right now? What is your average inquiry response time across channels? What percentage of your catering clients placed a second order within 90 days of the first?
    </p>
    <p style="margin-bottom:1.25rem;">
      If the honest answer to most of those is "I don't know," that's not a failure. That's the starting point. The operators who close the gap don't start with a perfect system. They start by making the blockage visible, and then building the infrastructure to remove it, one place at a time.
    </p>
    <p style="margin-bottom:1.25rem;">
      The demand is already there. It was there last week. It will be there next week. The only variable is whether your operation is built to capture it before someone else does.
    </p>
  `,
};

export default function CateringGoldminePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BlogArticle data={blogData} />
      {/*<BlogBottomCTA
        text="Kutlerri maps your catering demand, builds the prospect database, runs the outbound motion, and handles every inbound inquiry so your catering program runs like a revenue engine, not an afterthought."
        buttonLabel="See Kutlerri in Action"
        buttonHref="/get-a-demo"
      />*/}
    </main>
  );
}
