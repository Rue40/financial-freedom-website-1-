import { Phone, Mail, Clock } from "lucide-react"

export function TopBar() {
  return (
    <div className="w-full bg-primary text-primary-foreground py-2">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <a href="tel:+254741502996" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">+254 720747440</span>
            </a>
            <a
              href="mailto:kingdomwealthacademy25@gmail.com"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="h-3 w-3" />
              <span className="hidden md:inline">kingdomwealthacademy25@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-3 w-3" />
            <span>Mon - Fri: 9:00 AM - 5:00 PM EAT</span>
          </div>
        </div>
      </div>
    </div>
  )
}
