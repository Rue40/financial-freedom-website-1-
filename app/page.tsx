import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { DailyQuotes } from "@/components/daily-quotes"
import { AboutSection } from "@/components/about-section"
import { OneOnOneSection } from "@/components/one-on-one-section"
import { DiasporaSection } from "@/components/diaspora-section"
import { OrganizationTrainingSection } from "@/components/organization-training-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <HeroSection />        
      
        <OneOnOneSection />
        <DiasporaSection />
        <OrganizationTrainingSection />
        <AboutSection />
        <DailyQuotes />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
