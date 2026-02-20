import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { DailyQuotes } from "@/components/daily-quotes"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DailyQuotes />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
