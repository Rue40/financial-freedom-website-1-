"use client"

import { useEffect, useState } from "react"
import { fetchDailyQuotes } from "@/lib/google-sheets"
import type { DailyQuote } from "@/lib/google-sheets"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Book } from "lucide-react"

export function DailyQuotes() {
  const [quotes, setQuotes] = useState<DailyQuote[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const loadQuotes = async () => {
      try {
        const fetchedQuotes = await fetchDailyQuotes()
        setQuotes(fetchedQuotes.slice(0, 3))
      } catch (error) {
        console.error("[v0] Error loading quotes:", error)
      } finally {
        setIsLoading(false)
        setIsVisible(true)
      }
    }

    loadQuotes()
  }, [])

  if (isLoading) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container">
        <div
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-4">
            <Book className="h-4 w-4" />
            Daily Wisdom
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Kingdom <span className="text-accent">Financial Wisdom</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Biblical principles to guide your financial journey
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((quote, index) => (
            <Card
              key={quote.date}
              className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-primary/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Quote className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div className="space-y-4">
                    <blockquote className="text-base font-medium leading-relaxed">{quote.quote}</blockquote>

                    <div className="pt-4 border-t border-border space-y-2">
                      <div className="flex items-start gap-2">
                        <Book className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <p className="text-sm italic text-muted-foreground leading-relaxed">"{quote.bibleVerse}"</p>
                      </div>
                      <p className="text-sm font-semibold text-primary pl-6">{quote.verseReference}</p>
                    </div>

                    {quote.author && <p className="text-sm text-muted-foreground">- {quote.author}</p>}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
