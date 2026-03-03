import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Demo | Kutlerri",
  description:
    "Schedule a personalized demo to see how Kutlerri's AI agents optimize restaurant revenue, control costs, and automate operations.",
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
