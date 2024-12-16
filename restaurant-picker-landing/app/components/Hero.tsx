'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-light mb-6"
        >
          Discover Your Next Meal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto"
        >
          Effortlessly find your perfect dining experience with our intuitive and elegant platform.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <Link href="/explore" className="bg-black text-white px-8 py-3 rounded-full font-light hover:bg-gray-800 transition duration-300 flex items-center">
            Explore <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

