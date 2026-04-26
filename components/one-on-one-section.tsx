"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Clock, Target, Zap } from "lucide-react"

export function OneOnOneSection() {
  const benefits = [
    {
      icon: Target,
      title: "Personalized Goals",
      description: "Tailored financial strategies designed specifically for your unique situation and aspirations.",
    },
    {
      icon: Zap,
      title: "Quick Results",
      description: "See tangible progress in your financial life within weeks of starting your coaching journey.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose appointment times that work best for your busy schedule with easy rescheduling.",
    },
    {
      icon: CheckCircle2,
      title: "Accountability",
      description: "Regular check-ins and progress tracking to keep you motivated and on track to success.",
    },
  ]

  return (
    <section id="one-on-one" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header - Centered */}
        <div className="text-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance mb-4">
            One-on-One <span className="text-primary">Coaching</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get personalized guidance from Coach Dorcus to transform your financial life and achieve your Kingdom wealth goals.
          </p>
        </div>

        {/* Layout Wrapper: Column on mobile, Row-Reverse on PC (Grid Left, Image Right) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 max-w-7xl mx-auto">
          
          {/* Hero Image - Right on PC */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 transform hover:scale-[1.01] transition-transform duration-500">
              <img 
                src="/coach-one-on-one.jpg" 
                alt="Coach Dorcus One-on-One Coaching" 
                className="w-full h-auto object-cover aspect-video lg:aspect-square" 
              />
            </div>
          </div>

          {/* Benefits Grid - Left on PC */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="p-5 border-glow hover:shadow-xl transition-all duration-300 animate-slide-up opacity-0 h-full"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA - Bottom centered */}
        <div className="text-center mt-16 animate-fade-in opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
          <p className="text-muted-foreground mb-6">
            Ready to transform your financial journey? Schedule your first consultation today.
          </p>
          <Button size="lg" asChild className="gap-2 px-8">
            <a href="https://calendly.com/kingdomwealthacademy25/15min" target="_blank" rel="noopener noreferrer">
              Book Your Session
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}