import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log("[v0] Booking data received:", body)

    // This route is kept for potential email sending functionality
    // Bookings are now saved directly to Google Sheets via google-sheets.ts

    const emailData = {
      to: body.email,
      subject: "Kingdom Wealth Academy - Booking Confirmation",
      html: `
        <h2>Booking Confirmation</h2>
        <p>Dear ${body.fullName},</p>
        <p>Thank you for booking a session with Kingdom Wealth Academy!</p>
        <h3>Booking Details:</h3>
        <ul>
          <li><strong>Session Type:</strong> ${body.sessionType}</li>
          <li><strong>Preferred Date:</strong> ${body.preferredDate}</li>
          <li><strong>Preferred Time:</strong> ${body.preferredTime}</li>
          <li><strong>Phone:</strong> ${body.phone}</li>
        </ul>
        ${body.message ? `<p><strong>Your Goals:</strong> ${body.message}</p>` : ""}
        <p>We'll contact you within 24 hours to confirm your session and send payment instructions.</p>
        <p>Blessings,<br/>Kingdom Wealth Academy Team</p>
      `,
    }

    console.log("[v0] Email data prepared:", emailData)

    return NextResponse.json({
      success: true,
      message: "Booking processed successfully",
    })
  } catch (error) {
    console.error("[v0] Error processing booking:", error)
    return NextResponse.json({ success: false, message: "Failed to process booking" }, { status: 500 })
  }
}
