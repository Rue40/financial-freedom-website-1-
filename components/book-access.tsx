"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function BookAccess() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [accessCode, setAccessCode] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)

  const handleAccessSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsVerifying(true)

    // Simulate access verification
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Access Granted!",
      description: "Check your email for download links and access instructions.",
    })

    setEmail("")
    setAccessCode("")
    setIsVerifying(false)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border rounded-xl p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-serif text-3xl font-bold mb-3">Access Your Purchased Books</h2>
              <p className="text-muted-foreground">
                Enter your email and access code to download your purchased materials.
              </p>
            </div>

            <form onSubmit={handleAccessSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="access-email">Email Address</Label>
                <Input
                  id="access-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="access-code">Access Code</Label>
                <Input
                  id="access-code"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  placeholder="Enter your access code"
                  required
                />
                <p className="text-sm text-muted-foreground">
                  You received this code in your purchase confirmation email.
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full gap-2" disabled={isVerifying}>
                {isVerifying ? (
                  "Verifying..."
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Access My Books
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-muted-foreground text-center">
                Having trouble accessing your books?{" "}
                <a href="mailto:support@kingdomwealthacademy.com" className="text-primary hover:underline">
                  Contact Support
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
