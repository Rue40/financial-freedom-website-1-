import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckoutForm } from "@/components/checkout-form"
import { Header } from "@/components/header"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ArrowLeft, ShieldCheck, Lock, CreditCard } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Link href="/books">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Books
            </Button>
          </Link>

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Secure Checkout</h1>
              <p className="text-muted-foreground text-lg">Complete your order to access Kingdom wealth resources</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Checkout Form */}
              <div>
                <Card className="p-6 md:p-8">
                  <CheckoutForm />
                </Card>

                {/* Trust Badges */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary" />
                    <span>SSL Encrypted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <span>All Cards Accepted</span>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <Card className="p-6 md:p-8 bg-muted/30">
                  <h2 className="font-serif text-2xl font-bold mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6 pb-6 border-b">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-20 bg-background rounded flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">Kingdom Wealth</h3>
                        <p className="text-sm text-muted-foreground">Digital + Physical Bundle</p>
                      </div>
                      <p className="font-semibold">$29.99</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 pb-6 border-b">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">$29.99</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium">$5.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax</span>
                      <span className="font-medium">$2.80</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-8">
                    <span className="font-serif text-xl font-bold">Total</span>
                    <span className="font-serif text-2xl font-bold text-primary">$37.79</span>
                  </div>

                  <div className="bg-primary/10 rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold text-sm">What's Included:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Instant digital download</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Physical book shipped to your address</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Exclusive online resources</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Lifetime access to updates</span>
                      </li>
                    </ul>
                  </div>
                </Card>

                <div className="mt-6 bg-accent/10 rounded-lg p-4">
                  <p className="text-sm text-center text-muted-foreground">
                    By completing this purchase, you agree to our Terms of Service and Privacy Policy. You will receive a
                    confirmation email with access instructions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  )
}
