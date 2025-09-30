"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import WhatsAppLink from "@/components/whatsapp-link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent bg-clip-text">
            The Aqua Club
          </span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
              <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact Us
              </Link>
        </nav>

        <div className="hidden md:inline-flex">
          <WhatsAppLink label="Book a Game" />
        </div>

        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container flex flex-col space-y-3 py-4 px-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
                <Link
                  href="#services"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="#contact"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
            <div onClick={() => setIsMenuOpen(false)}>
              <WhatsAppLink label="Book a Game" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
