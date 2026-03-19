"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, BarChart3, Lightbulb, Award } from "lucide-react"

export function OrganizationTrainingSection() {
  const offerings = [
    {
      icon: Users,
      title: "Team Financial Literacy",
      description: "Empower your entire team with essential financial knowledge and Kingdom wealth principles.",
    },
    {
      icon: BarChart3,
      title: "Organizational Budgeting",
      description: "Develop comprehensive budgeting strategies that align organizational growth with financial health.",
    },
    {
      icon: Lightbulb,
      title: "Custom Training Programs",
      description: "Tailored workshops and seminars designed specifically for your organization's needs.",
    },
    {
      icon: Award,
      title: "Leadership Development",
      description: "Coach leadership teams on financial stewardship and Kingdom-centered decision-making.",
    },
  ]

  return (
    <section id="organization" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance mb-4">
              Organization <span className="text-primary">Training Programs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Build a financially healthy organization through specialized training and coaching for your team.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-xl border border-border/40">
            <img src="/corporate-coaching-hall.png" alt="Organization Training Corporate Coaching" className="w-full h-auto object-cover" />
          </div>

          {/* Offerings Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {offerings.map((offering, index) => (
              <Card
                key={index}
                className="p-6 border-glow hover:shadow-xl transition-all duration-300 animate-slide-up opacity-0"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <offering.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{offering.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{offering.description}</p>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            <p className="text-muted-foreground mb-6">
              Interested in bringing financial training to your organization? Let's discuss your needs.
            </p>
            <Button size="lg" asChild className="gap-2">
              <a href="mailto:kingdomwealthacademy25@gmail.com">
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
