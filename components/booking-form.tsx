"use client"

import type React from "react"

import { useState } from "react"
import { saveBookingToSheet } from "@/lib/google-sheets"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export function BookingForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    sessionType: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email with booking details
      const emailResponse = await fetch("/api/send-booking-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      })

      if (!emailResponse.ok) {
        throw new Error("Failed to send email")
      }

      // Also save to Google Sheets
      await saveBookingToSheet(formData)

      toast({
        title: "Booking Confirmation Sent!",
        description: "Check your email for confirmation details. We'll be in touch within 24 hours.",
      })

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        sessionType: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      })
    } catch (error) {
      console.error("[v0] Error submitting booking:", error)
      toast({
        title: "Error",
        description: "Failed to submit booking. Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="john@example.com"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="+1 (555) 000-0000"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sessionType">Session Type *</Label>
          <Select value={formData.sessionType} onValueChange={(value) => handleChange("sessionType", value)} required>
            <SelectTrigger id="sessionType">
              <SelectValue placeholder="Select a session type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="one-on-one">One-on-One Coaching</SelectItem>
              <SelectItem value="workshop">Financial Reset Workshop</SelectItem>
              <SelectItem value="consultation">Quick Consultation</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="preferredDate">Preferred Date *</Label>
          <Input
            id="preferredDate"
            type="date"
            value={formData.preferredDate}
            onChange={(e) => handleChange("preferredDate", e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="preferredTime">Preferred Time *</Label>
          <Select
            value={formData.preferredTime}
            onValueChange={(value) => handleChange("preferredTime", value)}
            required
          >
            <SelectTrigger id="preferredTime">
              <SelectValue placeholder="Select a time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9am">9:00 AM</SelectItem>
              <SelectItem value="10am">10:00 AM</SelectItem>
              <SelectItem value="11am">11:00 AM</SelectItem>
              <SelectItem value="1pm">1:00 PM</SelectItem>
              <SelectItem value="2pm">2:00 PM</SelectItem>
              <SelectItem value="3pm">3:00 PM</SelectItem>
              <SelectItem value="4pm">4:00 PM</SelectItem>
              <SelectItem value="5pm">5:00 PM</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Tell Us About Your Financial Goals (Optional)</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Share what you'd like to focus on during your session..."
          rows={4}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Request Booking"}
      </Button>

      <div className="space-y-4 border-t pt-6">
        <p className="text-sm font-semibold text-foreground text-center">Or Book Directly</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Button asChild variant="outline" className="w-full bg-transparent">
            <a
              href="https://paystack.com/buy/the-90-minute-income-upgrade-omjlij"
              target="_blank"
              rel="noopener noreferrer"
            >
              One-on-One Coaching
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full bg-transparent">
            <a
              href="https://share.google/FSqNFVXG6ZIcOaU7d"
              target="_blank"
              rel="noopener noreferrer"
            >
              Workshop
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full bg-transparent">
            <a
              href="https://share.google/FSqNFVXG6ZIcOaU7d"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quick Consultation
            </a>
          </Button>
        </div>
      </div>

      <p className="text-sm text-muted-foreground text-center">
        Your booking request will be sent to kingdomwealthacademy25@gmail.com. A confirmation email will be sent to your provided email address.
      </p>
    </form>
  )
}
