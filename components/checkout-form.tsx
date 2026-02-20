"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { CreditCard } from "lucide-react"

export function CheckoutForm() {
  const { toast } = useToast()
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Order Successful!",
      description: "Check your email for download instructions and shipping confirmation.",
    })

    setIsProcessing(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          Payment Details
        </h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Cardholder Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number *</Label>
            <Input
              id="cardNumber"
              value={formData.cardNumber}
              onChange={(e) => handleChange("cardNumber", e.target.value)}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date *</Label>
              <Input
                id="expiry"
                value={formData.expiry}
                onChange={(e) => handleChange("expiry", e.target.value)}
                placeholder="MM/YY"
                maxLength={5}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC *</Label>
              <Input
                id="cvc"
                value={formData.cvc}
                onChange={(e) => handleChange("cvc", e.target.value)}
                placeholder="123"
                maxLength={4}
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">Shipping Address</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="address">Street Address *</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              placeholder="123 Main Street"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                placeholder="New York"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State *</Label>
              <Select value={formData.state} onValueChange={(value) => handleChange("state", value)} required>
                <SelectTrigger id="state">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="ca">California</SelectItem>
                  <SelectItem value="tx">Texas</SelectItem>
                  <SelectItem value="fl">Florida</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="zipCode">ZIP Code *</Label>
            <Input
              id="zipCode"
              value={formData.zipCode}
              onChange={(e) => handleChange("zipCode", e.target.value)}
              placeholder="10001"
              maxLength={5}
              required
            />
          </div>
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isProcessing}>
        {isProcessing ? "Processing Payment..." : "Complete Purchase"}
      </Button>
    </form>
  )
}
