import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogArticle, type BlogData } from "@/components/blog/BlogArticle";
import { BlogBottomCTA } from "@/components/blog/BlogBottomCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Paying 25% to DoorDash on Every Order? There's a Channel Delivery Apps Can't Touch. | Kutlerri",
  description:
    "There is a channel that charges none of what DoorDash takes. Most operators running it are doing so quietly, growing it steadily. It's called catering. And delivery platforms cannot touch it.",
  alternates: { canonical: "/blog/doordash-vs-catering" },
  openGraph: {
    title:
      "Paying 25% to DoorDash? There's a Channel Delivery Apps Can't Touch | Kutlerri",
    description:
      "Why corporate catering outperforms delivery on every margin metric that matters.",
    url: "https://kutlerri.ai/blog/doordash-vs-catering",
    type: "article",
  },
};

const blogData: BlogData = {
  title:
    "Paying 25% to DoorDash on Every Order? There's a Channel Delivery Apps Can't Touch.",
  tags: ["AI", "Restaurant Tech", "Catering"],
  readTime: "2 min",
  publishDate: "February 24, 2026",
  author: {
    name: "Kiran",
    designation: "Kutlerri",
    //avatar: "/images/blogPageImages/author.png",
  },
  sidebarImage: "/images/blogPageImages/doordash.png",
  ctaText: "Book a demo and see exactly how it works for your restaurant.",
  ctaButtonLabel: "Get a Demo",
  ctaButtonHref: "/get-a-demo",
  sections: [
    {
      id: "what-delivery-costs",
      title: "What Delivery Platforms Are Actually Costing You",
    },
    {
      id: "catering-different-category",
      title: "Why Company Catering is a Different Category Entirely",
    },
    {
      id: "businesses-already-ordering",
      title: "The Businesses Around You Are Already Ordering Catering",
    },
    {
      id: "channel-is-running",
      title: "What It Looks Like When the Channel Is Running",
    },
    { id: "shift-worth-making", title: "The Shift Worth Making" },
  ],
  contentHtml: `
    <p style="font-size:1.125rem;line-height:1.75;margin-bottom:2rem;color:#323232;">
      It's Tuesday, 11:45am. Your kitchen is prepped, your staff is in, and the lunch rush that was supposed to materialize is moving slower than you'd like.
    </p>
    <p style="margin-bottom:1.25rem;">
      A DoorDash order comes in. Then another. Then a few more. By 1pm you've done $800 in delivery revenue and the kitchen did its job. But when you look at what actually landed in your account after DoorDash took its cut, the number is closer to $600. Sometimes less. That $200 didn't go to the cook. It didn't go to labor. It went to a platform that owns the customer relationship, controls your visibility, and raises its rates when it feels like it.
    </p>
    <p style="margin-bottom:1.25rem;">
      Now multiply that across every delivery order, every location, every week of the year. For a fast casual operator running three to five locations, annual commission payments to DoorDash and Uber Eats combined routinely lands between $100,000 and $400,000. Not revenue. Not profit. A fee. For the privilege of showing up in someone else's app.
    </p>
    <p style="margin-bottom:1.25rem;">
      There is a channel that charges none of that. Most operators running it are doing so quietly, growing it steadily, ordering larger order sizes, and with a predictability that almost no other channel offers. It's called catering. And delivery platforms cannot touch it.
    </p>

    <h2 id="what-delivery-costs" style="font-size:1.5rem;font-weight:700;color:#1A1A1A;margin-top:3rem;margin-bottom:1.25rem;">
      What Delivery Platforms Are Actually Costing You
    </h2>
    <p style="margin-bottom:1.25rem;">
      Getting into the alternative, the math on delivery deserves a clear look because most operators know the commission rate but haven't run the full number.
    </p>
    <p style="margin-bottom:1.25rem;">
      DoorDash charges restaurants between 15 and 30% commission per order depending on the partnership tier. Uber Eats runs a similar structure, typically 15 to 30% depending on whether you're on a basic, plus, or premium plan. On top of the commission, both platforms charge marketing fees if you want better placement, and take a percentage of any promotions you run to be visible in the app.
    </p>
    <p style="margin-bottom:1.25rem;">
      A fast casual restaurant doing $8,000 a week in delivery revenue across both platforms at an average 25% blended commission rate is handing over $2,000 every week in fees. That's $104,000 a year in fee burden. It's over a million dollars annually going to platforms that own the customer, control the algorithm, and can change the terms whenever the business case suits them.
    </p>
    <p style="margin-bottom:1.25rem;">
      That is not a cost of doing business. That is a structural dependency that gets more expensive the more successful your delivery channel becomes. You pay more for being on DoorDash, the more you pay DoorDash. And the customer who ordered from you last Tuesday? DoorDash knows who they are. You don't.
    </p>

    <h2 id="catering-different-category" style="font-size:1.5rem;font-weight:700;color:#1A1A1A;margin-top:3rem;margin-bottom:1.25rem;">
      Why Company Catering is a Different Category Entirely
    </h2>
    <p style="margin-bottom:1.25rem;">
      Corporate catering operates on a completely different economic model than delivery. Understanding that difference is what makes the opportunity clear.
    </p>
    <p style="margin-bottom:1.25rem;">
      When a tech company orders lunch for 35 people, they are not opening an app and browsing. They are contacting a restaurant directly, agreeing to a price, and placing an order that gets invoiced and paid directly. No platform in the middle. No commission taken off the top. No algorithm deciding whether your restaurant appears before the one down the street.
    </p>
    <p style="margin-bottom:1.25rem;">
      The average corporate catering order runs between $400 and $1,200 depending on headcount and format. Food cost on a well-structured catering menu typically runs 5 to 8 points lower than dine-in because the menu is tighter, portioning is standardized, and there is no table service labor attached to it. Delivery cost, when catering uses its own driver or a dedicated service, is a flat fee rather than a percentage of order value.
    </p>
    <p style="margin-bottom:1.25rem;">
      The math looks like this. A $600 corporate catering order at 28% food cost and a $40 flat delivery fee leaves roughly $390 in gross contribution before overhead. The same $600 in DoorDash revenue at 25% commission and 30% food cost leaves roughly $270. Same revenue. Very different economics.
    </p>
    <p style="margin-bottom:1.25rem;">
      At scale, that difference compounds into something significant. A fast casual operator running five locations who builds catering to just 15% of total revenue, at direct margin, is generating a channel that outperforms delivery margin per dollar by a factor the delivery numbers will never catch up to.
    </p>

    <h2 id="businesses-already-ordering" style="font-size:1.5rem;font-weight:700;color:#1A1A1A;margin-top:3rem;margin-bottom:1.25rem;">
      The Businesses Around You Are Already Ordering Catering
    </h2>
    <p style="margin-bottom:1.25rem;">
      Here is the part most operators miss completely because there is no dashboard showing it to them.
    </p>
    <p style="margin-bottom:1.25rem;">
      Within five to ten miles of each of your locations, there are companies ordering catering on a recurring basis right now. Law firms doing weekly working lunches. Tech offices ordering team meals every day. Healthcare companies ordering catering for internal training sessions. Real estate brokerages feeding agent meetings. Co-working spaces running member events.
    </p>
    <p style="margin-bottom:1.25rem;">
      These are not hypothetical customers. They are active buyers with established budgets and recurring ordering patterns. They have a vendor today, usually whoever showed up first or whoever a colleague recommended. That relationship isn't locked in. It is habit. And habits change when a better option presents itself consistently enough.
    </p>
    <p style="margin-bottom:1.25rem;">
      For a fast casual restaurant — whether that's a taco concept, a sandwich shop, a pizza operation, or a Mediterranean food brand — the corporate catering fit is often stronger than operators realize. Office buyers are not looking for fine dining. They are looking for food that travels well, portions consistently, and arrives on time. That description fits fast casual almost perfectly.
    </p>

    <h2 id="businesses-already-ordering" style="font-size:1.5rem;font-weight:700;color:#1A1A1A;margin-top:3rem;margin-bottom:1.25rem;">
      The EZCater Trap
    </h2>
    <p style="margin-bottom:1.25rem;">
Some operators have already discovered corporate catering through platforms like EZCater, which connects restaurants with corporate buyers through a marketplace model. If DoorDash is the delivery platform, EZCater is its catering equivalent. The problem is structurally identical.    </p>
    <p style="margin-bottom:1.25rem;">
EZCater charges restaurants between 15 and 20% commission on every order placed through the platform. The corporate client becomes EZCater&rsquo;s customer, not yours. If EZCater changes its algorithm, adjusts its fee structure, or a competitor outbids you for placement, your catering revenue moves with it.    </p>
    <p style="margin-bottom:1.25rem;">
EZCater is a useful starting point for operators who have never run catering before. It validates demand and generates early orders without requiring any outbound effort. But the operators building catering into a real revenue channel — one that reaches 15 to 20% of total sales and grows year over year — are the ones who use platforms like EZCater as a stepping stone rather than a destination.    </p>
    <p style="margin-bottom:1.25rem;">
      The goal is direct relationships. Direct billing. A prospect database of every business within your delivery radius that is a realistic catering buyer, contacted on your cadence, converting into accounts that reorder without a platform taking a cut of every single transaction. That is what separates a catering channel from a catering marketplace listing.
    </p>

    <h2 id="channel-is-running" style="font-size:1.5rem;font-weight:700;color:#1A1A1A;margin-top:3rem;margin-bottom:1.25rem;">
      What It Looks Like When the Channel Is Running
    </h2>
    <p style="margin-bottom:1.25rem;">
      A corporate catering program that is working doesn't feel like a side project. It feels like a separate revenue engine running in parallel to the main restaurant operation.
    </p>
    <p style="margin-bottom:1.25rem;">
      Monday morning, there are confirmed catering orders on the books for Wednesday and Thursday. The kitchen knows exactly what to prep and when. The delivery window is planned. The invoice is already generated and the payment terms are agreed. There is no last-minute scramble, no platform order arriving at an inconvenient time with a modification the kitchen didn't expect.
    </p>
    <p style="margin-bottom:1.25rem;">
      Meanwhile the outbound side of the operation is working quietly in the background. A small list of local companies is being worked by AI outreach. Existing accounts are being followed up on the 30-day mark to make sure the next order is already in motion.
    </p>
    <p style="margin-bottom:1.25rem;">
      A check-in within 48 hours of the event. A follow-up at 30 days. A proactive reach-out before the next seasonal moment when their ordering intent is naturally high. End of quarter. Back to office periods. Holiday event planning. These are the windows when a well-timed message from a vendor who understands their purchasing preferences converts immediately. None of this is complicated. All of it requires a system to enforce it, because without one, it always loses to the next immediate fire in the kitchen.
    </p>

    <h2 id="shift-worth-making" style="font-size:1.5rem;font-weight:700;color:#1A1A1A;margin-top:3rem;margin-bottom:1.25rem;">
      The Shift Worth Making
    </h2>
    <p style="margin-bottom:1.25rem;">
      Delivery platforms are not going away. DoorDash and Uber Eats generate real volume for fast casual restaurants and it would be shortsighted to stop using and relying on them. But nothing about using them well requires letting them be the primary growth driver of your catering business.
    </p>
    <p style="margin-bottom:1.25rem;">
      Every dollar you build in direct corporate catering revenue is a dollar that comes in at a better margin, through a relationship you own, from a customer in your database — one who can be contacted again next month without paying a platform for the introduction.
    </p>
    <p style="margin-bottom:1.25rem;">
      The restaurants that will look back in three years and understand exactly what they built will be the ones that started treating catering as a channel in 2025 rather than an afterthought. Not because the food got better. Because the system got built.
    </p>
    <p style="margin-bottom:1.25rem;">
      Delivery platforms will keep taking their cut. The question is how much of your revenue you want them taking it from.
    </p>
  `,
};

export default function DoorDashVsCateringPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: blogData.title,
            datePublished: "2026-02-24",
            author: { "@type": "Organization", name: "Kutlerri" },
            publisher: {
              "@type": "Organization",
              name: "Kutlerri",
              url: "https://kutlerri.ai",
            },
            mainEntityOfPage: "https://kutlerri.ai/blog/doordash-vs-catering",
          }),
        }}
      />
      <Navbar />
      <BlogArticle data={blogData} />
      {/*<BlogBottomCTA
        text="Kutlerri builds and runs your catering channel from the ground up. Demand mapping, prospect database, outbound motion, inbound handling, and weekly performance tracking across every location."
        buttonLabel="Start Your 90-Day Catering Build"
        buttonHref="/get-a-demo"
      />*/}

      {/*<Footer />*/}
    </main>
  );
}
