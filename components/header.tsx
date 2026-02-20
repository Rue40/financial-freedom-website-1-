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
          <span className="hidden font-semibold sm:inline-block">Kingdom Wealth Academy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="#about"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="/books"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Books
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Testimonials
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden sm:flex">
            <Link href="/book-session">Book a Session</Link>
          </Button>
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
              href="#services"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/books"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Books
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Button asChild className="w-full">
              <Link href="/book-session" onClick={() => setMobileMenuOpen(false)}>
                Book a Session
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
