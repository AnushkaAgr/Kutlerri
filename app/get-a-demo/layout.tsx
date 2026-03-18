import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Demo – See Kutlerri AI Agents in Action",
  description:
    "Book a personalized demo and see how Kutlerri's AI agents can grow your restaurant revenue, cut costs, and support smarter expansion.",
  alternates: { canonical: "/get-a-demo" },
  openGraph: {
    title: "See Kutlerri in Action – Book Your Demo Today",
    description:
      "30-minute walkthrough tailored to your restaurant operation. See real agents, real data, real results.",
    url: "https://kutlerri.ai/get-a-demo",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function GetDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
