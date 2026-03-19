"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Clock, Target, Zap } from "lucide-react"
import Link from "next/link"

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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance mb-4">
              One-on-One <span className="text-primary">Coaching</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Get personalized guidance from Coach Dorcus to transform your financial life and achieve your Kingdom wealth goals.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-xl border border-border/40">
            <img src="/coach-one-on-one.jpg" alt="Coach Dorcus One-on-One Coaching" className="w-full h-auto object-cover" />
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 border-glow hover:shadow-xl transition-all duration-300 animate-slide-up opacity-0"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            <p className="text-muted-foreground mb-6">
              Ready to transform your financial journey? Schedule your first consultation today.
            </p>
            <Button size="lg" asChild className="gap-2">
              <a href="https://calendly.com/kingdomwealthacademy25/45min" target="_blank" rel="noopener noreferrer">
                Book Your Session
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
