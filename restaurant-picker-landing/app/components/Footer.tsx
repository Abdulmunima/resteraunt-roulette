'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const footerLinks = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Terms', href: '/terms' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <span className="text-gray-600">&copy; 2024 what do I eat?</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            {footerLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-black transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

