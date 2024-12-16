'use client'

import { motion } from 'framer-motion'
import { Utensils, Clock, Layout } from 'lucide-react'

const features = [
  {
    icon: Utensils,
    title: "Unique Selection",
    description: "Let fate guide your culinary journey."
  },
  {
    icon: Clock,
    title: "Quick Decision",
    description: "Find your perfect meal in seconds."
  },
  {
    icon: Layout,
    title: "Elegant Interface",
    description: "Navigate with ease and style."
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <feature.icon className="h-8 w-8 text-black mb-4 mx-auto" />
              <h3 className="text-xl font-light mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

