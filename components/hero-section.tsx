"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Target, Heart, Shield } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/50 to-background py-12 sm:py-20 lg:py-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
      </div>

      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div
            className={`flex flex-col gap-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary w-fit animate-in fade-in slide-in-from-left-5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
              15+ Years of Ministry & Coaching Experience
            </div>

            <h1 className="font-serif text-3xl font-bold leading-tight tracking-tighter text-balance sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Transforming Lives Through <span className="text-accent">Financial Freedom</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl">
              Break free from financial limitations and step into Kingdom wealth. Through personalized coaching,
              practical training, and biblical wisdom, you'll gain proven strategies to manage money wisely, build
              lasting wealth, and align your finances with God's purpose.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 py-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-primary/10 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer">
                <Target className="h-5 w-5 text-accent flex-shrink-0 mt-0.5 group-hover:animate-spin transition-transform" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">Our Mission</h3>
                  <p className="text-xs text-muted-foreground">Empower Kingdom financial stewardship</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-primary/10 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer">
                <Heart className="h-5 w-5 text-accent flex-shrink-0 mt-0.5 group-hover:animate-pulse transition-transform" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">Our Heart</h3>
                  <p className="text-xs text-muted-foreground">Transform lives through biblical wisdom</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-primary/10 hover:border-primary/30 transition-colors">
                <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">Our Promise</h3>
                  <p className="text-xs text-muted-foreground">Lasting wealth aligned with God's purpose</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild className="gap-2 group">
                <Link href="/book-session">
                  Book a Coaching Session
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="group bg-transparent">
                <Link href="/books">
                  <Sparkles className="h-4 w-4 mr-2 group-hover:animate-spin" />
                  Other Resources
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:items-center gap-4 sm:gap-8 pt-4">
              <div className="animate-in fade-in slide-in-from-bottom-5 delay-200">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Lives Transformed</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-border"></div>
              <div className="animate-in fade-in slide-in-from-bottom-5 delay-300">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">15+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-border"></div>
              <div className="col-span-2 sm:col-span-1 animate-in fade-in slide-in-from-bottom-5 delay-500">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Biblical Foundation</div>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 blur-2xl animate-pulse"></div>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl hover:shadow-accent/20 transition-shadow duration-500">
              <img
                src="/workshop-hero.jpg"
                alt="Coach Dorcus Njoroge - Kingdom Wealth Academy Financial Reset Workshop"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
