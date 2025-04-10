"use client"

import { motion } from "framer-motion"

interface ContactInfoProps {
  phone: string
  email: string
  address: string
}

export function ContactInfo({ phone, email, address }: ContactInfoProps) {
  return (
    <div className="space-y-4">
      <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-3 text-peacock">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-peacock/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
        <span>{phone}</span>
      </motion.div>
      <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-3 text-peacock">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-peacock/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </div>
        <span>{email}</span>
      </motion.div>
      <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-3 text-peacock">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-peacock/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>
        <span>{address.replace("Association", "Association")}</span>
      </motion.div>
    </div>
  )
}
