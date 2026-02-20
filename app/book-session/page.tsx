import { BookingForm } from "@/components/booking-form"
import { Header } from "@/components/header"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Video } from "lucide-react"
import Link from "next/link"

export default function BookSessionPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-balance mb-4">
                Book Your <span className="text-primary">Financial Coaching</span> Session
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Take the first step toward financial freedom. Schedule a personalized coaching session to transform your
                relationship with money through Kingdom principles.
              </p>
            </div>

            {/* Session Types with Direct Booking */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Video className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">One-on-One Coaching</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  Personalized financial guidance tailored to your unique situation and goals.
                </p>
                <Button asChild className="w-full">
                  <a
                    href="https://paystack.com/buy/the-90-minute-income-upgrade-omjlij"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Session
                  </a>
                </Button>
              </div>

              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Financial Reset Workshop</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  Comprehensive workshop on Kingdom wealth principles with practical strategies.
                </p>
                <Button asChild className="w-full">
                  <a
                    href="https://share.google/FSqNFVXG6ZIcOaU7d"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                  </a>
                </Button>
              </div>

              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Quick Consultation</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  Brief consultation for specific questions or guidance on next steps.
                </p>
                <Button asChild className="w-full">
                  <a
                    href="https://share.google/FSqNFVXG6ZIcOaU7d"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule
                  </a>
                </Button>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-card border rounded-lg p-8">
              <h2 className="font-serif text-2xl font-semibold mb-6">Schedule Your Session</h2>
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  )
}
