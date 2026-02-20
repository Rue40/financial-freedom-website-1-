"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, TrendingUp, Heart } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="about" className="py-12 sm:py-20 lg:py-32" ref={sectionRef}>
      <div className="container">
        <div
          className={`mx-auto max-w-3xl text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance mb-4">
            Your Journey to <span className="text-accent">Kingdom Wealth</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
            Whether you're seeking clarity, financial breakthrough, or a deeper understanding of money from a Kingdom
            perspective, I guide you toward freedom, impact, and prosperity that lasts.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            className={`border-border bg-card hover:shadow-xl hover:scale-105 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Biblical Teaching</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Timeless principles rooted in Scripture to transform your financial mindset
              </p>
            </CardContent>
          </Card>

          <Card
            className={`border-border bg-card hover:shadow-xl hover:scale-105 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Users className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Personalized Coaching</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                One-on-one guidance tailored to your unique financial situation and goals
              </p>
            </CardContent>
          </Card>

          <Card
            className={`border-border bg-card hover:shadow-xl hover:scale-105 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Practical Strategies</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Proven methods to build wealth, manage money wisely, and achieve financial freedom
              </p>
            </CardContent>
          </Card>

          <Card
            className={`border-border bg-card hover:shadow-xl hover:scale-105 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Heart className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Kingdom Purpose</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Align your finances with God's purpose for lasting impact and prosperity
              </p>
            </CardContent>
          </Card>
        </div>

        <div
          className={`mt-12 sm:mt-16 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-6 sm:p-8 md:p-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight mb-4">About Coach Dorcus Njoroge</h3>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  With over 15 years of experience in ministry, coaching, and biblical teaching, Coach Dorcus is dedicated to empowering individuals to break free from financial limitations and step into the abundant life God
                  intended.
                </p>
                <p>
                  Through personalized coaching sessions and biblical wisdom, she has helped hundreds of people transform their relationship with money and discover
                  true financial freedom rooted in Kingdom principles.
                </p>
                <p>
                  Her approach combines practical financial wisdom with deep spiritual insight, ensuring that your
                  journey to wealth is not just about accumulation, but about stewarding resources for Kingdom impact.
                </p>
               
              </div>
            </div>
            <div className="relative order-first md:order-last">
              <div className="mx-auto h-[280px] w-[280px] max-w-full rounded-xl overflow-hidden border-4 border-primary/20 shadow-2xl transition-all duration-500 hover:scale-105 hover:border-accent/40 sm:h-[340px] sm:w-[340px] md:h-[420px] md:w-[420px]">
                <img
                  src="/coach-dorcus-portrait.jpg"
                  alt="Coach Dorcus Njoroge - Financial Coach"
                  className="h-full w-full object-contain bg-muted/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
