"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Globe, TrendingUp, Home, Shield } from "lucide-react"

export function DiasporaSection() {
  const features = [
    {
      icon: Globe,
      title: "International Money Management",
      description: "Effective strategies for managing finances across multiple countries and currencies.",
    },
    {
      icon: Home,
      title: "Dual Financial Goals",
      description: "Balance supporting family back home while building wealth in your current location.",
    },
    {
      icon: TrendingUp,
      title: "Wealth Building Abroad",
      description: "Create sustainable income streams and investment strategies tailored for diaspora living.",
    },
    {
      icon: Shield,
      title: "Financial Security",
      description: "Protect your assets and plan for long-term financial stability across borders.",
    },
  ]

  return (
    <section id="diaspora" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance mb-4">
              Diaspora <span className="text-primary">Financial Management</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Specialized financial coaching for those living and working abroad. Master your finances while supporting loved ones back home.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-xl border border-border/40">
            <img src="/coach-presentation.png" alt="Coach Dorcus Diaspora Financial Training" className="w-full h-auto object-cover" />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 border-glow hover:shadow-xl transition-all duration-300 animate-slide-up opacity-0"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            <p className="text-muted-foreground mb-6">
              Start managing your diaspora finances with Kingdom principles and proven strategies.
            </p>
            <Button size="lg" asChild className="gap-2">
              <a href="https://calendly.com/kingdomwealthacademy25/45min" target="_blank" rel="noopener noreferrer">
                Schedule a Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
