import { BookOpen } from "lucide-react"

export function BooksHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted/20 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-balance mb-6">
            Resources for <span className="text-primary">Financial Freedom</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
            Discover transformative books and materials that teach Kingdom principles for building wealth, managing
            money wisely, and living in financial abundance.
          </p>
        </div>
      </div>
    </section>
  )
}
