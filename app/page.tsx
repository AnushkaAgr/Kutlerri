import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeatureCards } from "@/components/feature-cards"
import { GrowthSection } from "@/components/growth-section"
import { QuestionsSection } from "@/components/questions-section"
import { ManagedServices } from "@/components/managed-services"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      {/* <FeatureCards /> */}
      <GrowthSection />
      <QuestionsSection />
      <ManagedServices />
      {/* <Footer /> */}
    </main>
  )
}
