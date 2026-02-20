import { BooksHero } from "@/components/books-hero"
import { BookShowcase } from "@/components/book-showcase"
import { BookAccess } from "@/components/book-access"
import { Header } from "@/components/header"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function BooksPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <BooksHero />
        <BookShowcase />
        <BookAccess />
      </div>
      <ScrollToTop />
    </>
  )
}
