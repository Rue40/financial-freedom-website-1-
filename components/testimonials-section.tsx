"use client"

import { Star, Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function TestimonialsSection() {
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

  const testimonials = [
    {
      quote:
        "Working with this ministry changed my entire perspective on money. I went from living paycheck to paycheck to having savings and a clear financial plan. The biblical principles made all the difference.",
      name: "Sarah M.",
      location: "Dallas, TX",
      image: "/african-american-woman-smiling-professional.jpg",
      delay: "100ms",
    },
    {
      quote:
        "The Kingdom Wealth book opened my eyes to how God wants to bless us financially. I've paid off $30,000 in debt and I'm now building wealth for my family's future. Truly life-changing!",
      name: "Michael R.",
      location: "Atlanta, GA",
      image: "/african-american-man-smiling-professional.jpg",
      delay: "200ms",
    },
    {
      quote:
        "The coaching sessions gave me practical steps and accountability. I finally understand how to manage money God's way and I've seen breakthrough in areas that were stuck for years.",
      name: "Jennifer L.",
      location: "Houston, TX",
      image: "/hispanic-woman-smiling-professional.jpg",
      delay: "300ms",
    },
  ]

  return (
    <section id="testimonials" className="py-12 sm:py-20 bg-background" ref={sectionRef}>
      <div className="container">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4">
            Stories of <span className="text-primary">Transformation</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Lives changed through Kingdom wealth principles and financial coaching.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card border rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group relative ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: testimonial.delay }}
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed text-sm sm:text-base">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-accent/40 transition-colors">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
