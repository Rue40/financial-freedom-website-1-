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
        {/* Header - Stays Centered at top */}
        <div className="text-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance mb-4">
            Diaspora <span className="text-primary">Financial Management</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Specialized financial coaching for those living and working abroad. Master your finances while supporting loved ones back home.
          </p>
        </div>

        {/* Main Content Wrapper: Column on mobile, Row on PC */}
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
          
          {/* Features Grid - Now on the Left for PC */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-5 border-glow hover:shadow-xl transition-all duration-300 animate-slide-up opacity-0 h-full"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Hero Image - Now on the Right for PC */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="/coach-presentation.png" 
                alt="Coach Dorcus Diaspora Financial Training" 
                className="w-full h-full object-cover aspect-video lg:aspect-square" 
              />
            </div>
          </div>
        </div>

        {/* CTA - Bottom centered */}
        <div className="text-center mt-16 animate-fade-in opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
          <p className="text-muted-foreground mb-6">
            Start managing your diaspora finances with Kingdom principles and proven strategies.
          </p>
          <Button size="lg" asChild className="gap-2 px-8">
            <a href="https://calendly.com/kingdomwealthacademy25/45min" target="_blank" rel="noopener noreferrer">
              Schedule a Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}