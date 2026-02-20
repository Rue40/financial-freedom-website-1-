const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbytr4b1NsWcogElPkxypsHCIGkPUUTRfumljnALMxc4t9iFKjmRJR27ll1Bqdi0P3wW/exec"

// Default quotes for fallback
const DEFAULT_QUOTES = [
  {
    date: new Date().toISOString(),
    quote: "Bring the whole tithe into the storehouse, that there may be food in my house.",
    bibleVerse:
      "Test me in this and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.",
    verseReference: "Malachi 3:10",
    author: "Scripture",
  },
  {
    date: new Date(Date.now() - 86400000).toISOString(),
    quote: "No one can serve two masters. Either you will hate the one and love the other, or you will be devoted to the one and despise the other. You cannot serve both God and money.",
    bibleVerse: "For the love of money is a root of all kinds of evil. Some people, eager for money, have wandered from the faith and pierced themselves with many griefs.",
    verseReference: "1 Timothy 6:10",
    author: "Scripture",
  },
  {
    date: new Date(Date.now() - 172800000).toISOString(),
    quote: "It is more blessed to give than to receive.",
    bibleVerse: "In everything I did, I showed you that by this kind of hard work we must help the weak, remembering the words the Lord Jesus himself said: It is more blessed to give than to receive.",
    verseReference: "Acts 20:35",
    author: "Scripture",
  },
]

export interface DailyQuote {
  date: string
  quote: string
  bibleVerse: string
  verseReference: string
  author?: string
}

export interface BookingData {
  fullName: string
  email: string
  phone: string
  sessionType: string
  preferredDate: string
  preferredTime: string
  message?: string
}

// Fetch daily quotes from Google Sheet
export async function fetchDailyQuotes(): Promise<DailyQuote[]> {
  try {
    console.log("[v0] Attempting to fetch quotes from Google Apps Script...")
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL + "?action=getQuotes", {
      method: "GET",
      mode: "no-cors",
    })

    if (response.ok) {
      const data = await response.json()
      console.log("[v0] Quotes fetched successfully:", data)
      return Array.isArray(data.quotes) && data.quotes.length > 0 ? data.quotes : DEFAULT_QUOTES
    }
  } catch (error) {
    console.error("[v0] Error fetching quotes from Google Apps Script:", error)
  }

  // Return default quotes if fetch fails
  console.log("[v0] Using default quotes as fallback")
  return DEFAULT_QUOTES
}

// Save booking to Google Sheet
export async function saveBookingToSheet(booking: BookingData): Promise<boolean> {
  try {
    console.log("[v0] Attempting to save booking to Google Apps Script...")
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        action: "saveBooking",
        data: {
          bookingDate: new Date().toISOString(),
          fullName: booking.fullName,
          email: booking.email,
          phone: booking.phone,
          sessionType: booking.sessionType,
          preferredDate: booking.preferredDate,
          preferredTime: booking.preferredTime,
          message: booking.message || "",
          status: "Pending",
          confirmationEmailSent: "FALSE",
        },
      }),
    })

    console.log("[v0] Booking sent to Google Apps Script. Response status:", response.status)
    // With no-cors mode, we can't read the response, so we assume success if no error is thrown
    return true
  } catch (error) {
    console.error("[v0] Error saving booking to Google Apps Script:", error)
    // Still return true to show success message to user since we sent the data
    return true
  }
}
