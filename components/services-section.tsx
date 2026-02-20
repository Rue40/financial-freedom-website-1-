"use client"

import { Button } from "@/components/ui/button"
import { Video, Users, BookOpen, Calendar } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function ServicesSection() {
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

  const services = [
    {
      icon: Video,
      title: "Personal Coaching",
      description: "One-on-one financial coaching tailored to your unique situation and goals.",
      link: "/book-session",
      linkText: "Learn More",
      delay: "100ms",
    },
    {
      icon: Users,
      title: "2026 Financial Reset Workshop",
      description: "Interactive workshop on Kingdom wealth principles with practical application. Pay 1000 KSH via Paystack.",
      link: "https://paystack.com/buy/2026-financial-reset-workshop-szbysi",
      external: true,
      linkText: "Book Workshop",
      delay: "200ms",
    },
    {
      icon: BookOpen,
      title: "Other Resources",
      description: "Comprehensive guides and materials for self-paced learning and growth.",
      link: "/books",
      linkText: "Browse Resources",
      delay: "300ms",
    },
    {
      icon: Calendar,
      title: "Free Consultation",
      description: "Schedule a free quick consultation with Calendly to discuss your financial journey.",
      link: "https://calendly.com/clarity-hub-coaching/one-on-one-coaching-session",
      external: true,
      linkText: "Schedule Now",
      delay: "400ms",
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-20 bg-muted/30" ref={sectionRef}>
      <div className="container">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4">
            How I Can <span className="text-primary">Serve You</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Multiple pathways to financial freedom tailored to your needs and where you are on your journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-card border rounded-lg p-6 hover:shadow-xl hover:scale-105 hover:border-primary/40 transition-all duration-300 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: service.delay }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
              {service.external ? (
                <Button asChild variant="link" className="p-0 h-auto group-hover:text-primary transition-colors">
                  <a href={service.link} target="_blank" rel="noopener noreferrer">
                    {service.linkText}
                  </a>
                </Button>
              ) : (
                <Button asChild variant="link" className="p-0 h-auto group-hover:text-primary transition-colors">
                  <Link href={service.link}>{service.linkText}</Link>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
