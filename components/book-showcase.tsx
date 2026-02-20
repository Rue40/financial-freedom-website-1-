import { Button } from "@/components/ui/button"
import { BookOpen, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function BookShowcase() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Featured Book */}
          <div className="bg-gradient-to-br from-muted/40 to-muted/20 rounded-2xl p-8 md:p-12 mb-16 border">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[3/4] max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-2xl" />
                <Image
                  src="/kingdom-wealth-book-cover-gold-green-financial-fre.jpg"
                  alt="Kingdom Wealth Book Cover"
                  width={450}
                  height={600}
                  className="relative rounded-lg shadow-2xl"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Star className="w-4 h-4 fill-current" />
                  <span>Featured Book</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Kingdom Wealth</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  A transformative guide to understanding money from a Kingdom perspective. Learn timeless biblical
                  principles and practical strategies to break free from financial limitations and build lasting wealth
                  that honors God.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <p className="text-foreground">15 chapters on biblical wealth principles</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <p className="text-foreground">Practical exercises and action steps</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <p className="text-foreground">Real-life testimonies of financial transformation</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <div>
                    <p className="text-3xl font-bold text-primary">$29.99</p>
                    <p className="text-sm text-muted-foreground">Digital + Physical Bundle</p>
                  </div>
                  <Link href="/checkout">
                    <Button size="lg" className="gap-2">
                      <BookOpen className="w-4 h-4" />
                      Purchase Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-center mb-10">
              Additional Resources & Materials
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-muted-foreground" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Financial Reset Workbook</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Interactive workbook for setting and achieving your 2026 financial goals.
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-primary">$19.99</p>
                  <Button variant="outline" size="sm">
                    Add to Cart
                  </Button>
                </div>
              </div>

              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-muted-foreground" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Debt Freedom Blueprint</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Step-by-step guide to eliminating debt using Kingdom principles.
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-primary">$14.99</p>
                  <Button variant="outline" size="sm">
                    Add to Cart
                  </Button>
                </div>
              </div>

              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-muted-foreground" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Wealth Building Journal</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Daily journal for tracking financial progress and spiritual growth.
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-primary">$12.99</p>
                  <Button variant="outline" size="sm">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
