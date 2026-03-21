import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Demo - See Kutlerri AI Agents in Action",
  description:
    "Book a personalized demo and see how Kutlerri's AI agents can grow your restaurant revenue, cut costs, and support smarter expansion.",
  keywords: [
    "Kutlerri demo restaurant AI",
    "AI agents for restaurants",
  ],
  alternates: { canonical: "/get-a-demo" },
  openGraph: {
    title: "Get a Demo | Kutlerri",
    description:
      "See how AI agents can scale your restaurant with a personalized walkthrough.",
    url: "https://kutlerri.ai/get-a-demo",
    type: "website",
  },
};

export default function GetDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
