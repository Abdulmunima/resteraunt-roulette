'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Loader2 } from 'lucide-react'

const restaurants = ['Delicious Bites', 'Spice Palace', 'Burger Haven', 'Sushi Delight', 'Pizza Paradise']

export function SlotMachine() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const { toast } = useToast()

  const spin = () => {
    setIsSpinning(true)
    setResult(null)
    // Simulating API call to get a random restaurant
    setTimeout(() => {
      setIsSpinning(false)
      const randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)]
      setResult(randomRestaurant)
      toast({
        title: 'Restaurant found!',
        description: `We've found a great place for you to try: ${randomRestaurant}`,
      })
    }, 3000)
  }

  useEffect(() => {
    // Add sound effects here
  }, [isSpinning, result])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 transition-all duration-300 ease-in-out transform hover:shadow-3xl">
      <div className="flex justify-center items-center h-64 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mb-8 overflow-hidden relative">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        {isSpinning ? (
          <div className="slot-machine-reel flex flex-col items-center relative z-10">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="text-4xl font-bold py-4 text-white">{restaurant}</div>
            ))}
          </div>
        ) : (
          <div className="text-5xl font-bold text-center transition-all duration-300 ease-in-out text-white relative z-10">
            {result || 'Spin to find a restaurant!'}
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <Button
          onClick={spin}
          disabled={isSpinning}
          size="lg"
          className="text-lg px-12 py-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold"
        >
          {isSpinning ? (
            <Loader2 className="h-6 w-6 animate-spin mr-2" />
          ) : null}
          {isSpinning ? 'Spinning...' : 'Spin'}
        </Button>
      </div>
    </div>
  )
}

