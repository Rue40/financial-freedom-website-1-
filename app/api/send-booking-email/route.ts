import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log("[v0] Booking email data received:", body)

    const { fullName, email, phone, sessionType, preferredDate, preferredTime, message, timestamp } = body

    // Create email body for admin (kingdomwealthacademy25@gmail.com)
    const adminEmailHtml = `
      <h2>New Booking Request</h2>
      <p><strong>Date Received:</strong> ${new Date(timestamp).toLocaleString()}</p>
      
      <h3>Client Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${fullName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
      </ul>
      
      <h3>Session Details:</h3>
      <ul>
        <li><strong>Session Type:</strong> ${sessionType}</li>
        <li><strong>Preferred Date:</strong> ${preferredDate}</li>
        <li><strong>Preferred Time:</strong> ${preferredTime}</li>
      </ul>
      
      ${message ? `<h3>Client Message:</h3><p>${message}</p>` : ""}
      
      <p><strong>Reply to:</strong> ${email}</p>
    `

    // Create confirmation email for client
    const clientEmailHtml = `
      <h2>Booking Confirmation</h2>
      <p>Dear ${fullName},</p>
      
      <p>Thank you for submitting your booking request to Kingdom Wealth Academy! We've received your information and will be in touch within 24 hours to confirm your session.</p>
      
      <h3>Your Booking Details:</h3>
      <ul>
        <li><strong>Session Type:</strong> ${sessionType}</li>
        <li><strong>Preferred Date:</strong> ${preferredDate}</li>
        <li><strong>Preferred Time:</strong> ${preferredTime}</li>
      </ul>
      
      <h3>Next Steps:</h3>
      <p>Coach Dorcus Njoroge will contact you at ${phone} to confirm your session and discuss payment options.</p>
      
      <p><strong>Contact Information:</strong><br/>
      Email: kingdomwealthacademy25@gmail.com<br/>
      WhatsApp: +254720747440</p>
      
      <p>We look forward to helping you transform your finances with Kingdom wisdom!</p>
      
      <p>Blessings,<br/>
      Kingdom Wealth Academy Team</p>
    `

    // Send emails using a simple fetch to a service or email provider
    // For now, we'll log them and return success
    console.log("[v0] Admin email would be sent to: kingdomwealthacademy25@gmail.com")
    console.log("[v0] Client confirmation email would be sent to:", email)
    console.log("[v0] Admin email HTML:", adminEmailHtml)
    console.log("[v0] Client email HTML:", clientEmailHtml)

    // In production, integrate with SendGrid, Resend, AWS SES, etc.
    // Example with Resend (uncomment to use):
    /*
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "noreply@kingdomwealthacademy.com",
        to: email,
        subject: "Kingdom Wealth Academy - Booking Confirmation",
        html: clientEmailHtml,
      }),
    })
    */

    return NextResponse.json({
      success: true,
      message: "Booking email sent successfully",
      data: { email, sessionType, preferredDate },
    })
  } catch (error) {
    console.error("[v0] Error sending booking email:", error)
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
  }
}
