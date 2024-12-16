'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-light"
          >
            <Link href="/">what do I eat?</Link>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Contact', 'Explore'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/${item.toLowerCase()}`} className="text-gray-600 hover:text-black transition duration-300">
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white"
        >
          <div className="flex flex-col items-center py-4">
            {['Home', 'About', 'Contact', 'Explore'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="py-2 text-gray-600 hover:text-black transition duration-300">
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}

