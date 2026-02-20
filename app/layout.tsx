import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Kingdom Wealth Academy | Transform Your Financial Future",
  description:
    "Empowering individuals to break free from financial limitations and step into Kingdom wealth through biblical financial coaching, training, and resources. Coach Dorcus Njoroge - kingdomwealthacademy25@gmail.com | +254720747440",
  generator: "v0.app",
  icons: {
    icon: "/kwa-logo.png",
    apple: "/kwa-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorantGaramond.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
