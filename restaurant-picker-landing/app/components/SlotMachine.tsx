'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

const cuisines = ['Italian', 'Chinese', 'Mexican', 'Japanese', 'Indian', 'Thai', 'French', 'Greek']

export default function SlotMachine() {
  const [result, setResult] = useState('')
  const [isSpinning, setIsSpinning] = useState(false)

  const spin = () => {
    setIsSpinning(true)
    let counter = 0
    const interval = setInterval(() => {
      setResult(cuisines[Math.floor(Math.random() * cuisines.length)])
      counter++
      if (counter > 20) {
        clearInterval(interval)
        setIsSpinning(false)
      }
    }, 100)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light mb-8"
        >
          Find Your Next Meal
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 rounded-lg shadow-sm inline-block"
        >
          <div className="text-4xl font-light mb-8 h-16 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={result}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {result || 'Tap to decide'}
              </motion.span>
            </AnimatePresence>
          </div>
          <Button
            onClick={spin}
            disabled={isSpinning}
            className="bg-black hover:bg-gray-800 text-white font-light py-2 px-6 rounded-full transition duration-300"
          >
            {isSpinning ? 'Deciding...' : 'Decide for me'}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

