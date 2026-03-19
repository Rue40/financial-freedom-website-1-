"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/kwa-logo.png" alt="Kingdom Wealth Academy" className="h-10 w-10 transition-transform hover:scale-110" />
          <span className="hidden font-semibold sm:inline-block"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex justify-center flex-1">
          <Button asChild variant="ghost" className="border-glow hover:bg-primary/10 rounded-full px-6">
            <Link href="#about">About</Link>
          </Button>
          <Button asChild variant="ghost" className="border-glow hover:bg-primary/10 rounded-full px-6">
            <Link href="#one-on-one">One-on-One Coaching</Link>
          </Button>
          <Button asChild variant="ghost" className="border-glow hover:bg-primary/10 rounded-full px-6">
            <Link href="/books">Books</Link>
          </Button>
          <Button asChild variant="ghost" className="border-glow hover:bg-primary/10 rounded-full px-6">
            <a href="https://paystack.com/buy/the-90-minute-income-upgrade-omjlij" target="_blank" rel="noopener noreferrer">
              Monthly Workshops
            </a>
          </Button>
          <Button asChild variant="ghost" className="border-glow hover:bg-primary/10 rounded-full px-6">
            <Link href="#diaspora">Diaspora Financial</Link>
          </Button>
          <Button asChild variant="ghost" className="border-glow hover:bg-primary/10 rounded-full px-6">
            <Link href="#organization">Organization Training</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur animate-in slide-in-from-top-5">
          <nav className="container flex flex-col gap-4 py-4">
            <Link
              href="#about"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#one-on-one"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              One-on-One Coaching
            </Link>
            <Link
              href="/books"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Books
            </Link>
            <a
              href="https://paystack.com/buy/the-90-minute-income-upgrade-omjlij"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground py-2"
            >
              Monthly Workshops
            </a>
            <Link
              href="#diaspora"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Diaspora Financial
            </Link>
            <Link
              href="#organization"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Organization Training
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
