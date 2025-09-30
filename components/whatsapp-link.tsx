import Link from "next/link"
import { cn } from "@/lib/utils"

type Props = {
  label?: string
  className?: string
}

export default function WhatsAppLink({ label = "WhatsApp", className }: Props) {
  return (
    <Link
      href="https://wa.me/442076026489"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:from-cyan-600 hover:to-teal-600 transition-colors",
        className
      )}
      aria-label="Chat on WhatsApp"
    >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            <path d="M8 9h8"/>
            <path d="M8 13h6"/>
          </svg>
      <span>{label}</span>
    </Link>
  )
}