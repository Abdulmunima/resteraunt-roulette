'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star, MapPin, Clock, DollarSign, ExternalLink } from 'lucide-react'

interface Restaurant {
  name: string
  cuisine: string
  rating: number
  priceRange: string
  address: string
  hours: string
  menuLink: string
}

export function RestaurantDetails() {
  const [restaurant, setRestaurant] = useState<Restaurant | null>({
    name: 'Delicious Bites',
    cuisine: 'Italian',
    rating: 4.5,
    priceRange: '$$',
    address: '123 Main St, Anytown, USA',
    hours: 'Mon-Sat: 11am-10pm, Sun: 12pm-9pm',
    menuLink: 'https://example.com/menu',
  })

  if (!restaurant) return null

  return (
    <Card className="rounded-3xl shadow-2xl transition-all duration-300 ease-in-out hover:shadow-3xl overflow-hidden">
      <CardHeader className="pb-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <CardTitle className="text-3xl font-bold">{restaurant.name}</CardTitle>
        <p className="text-purple-100 text-lg">{restaurant.cuisine}</p>
      </CardHeader>
      <CardContent className="p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="flex items-center">
            <Star className="h-6 w-6 text-yellow-400 mr-2" />
            <span className="text-lg font-semibold">{restaurant.rating} stars</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-6 w-6 text-green-500 mr-2" />
            <span className="text-lg font-semibold">{restaurant.priceRange}</span>
          </div>
          <div className="flex items-center col-span-2">
            <MapPin className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" />
            <span className="text-lg truncate">{restaurant.address}</span>
          </div>
          <div className="flex items-center col-span-2">
            <Clock className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" />
            <span className="text-lg truncate">{restaurant.hours}</span>
          </div>
        </div>
        <Button variant="outline" className="w-full rounded-lg text-lg font-semibold py-3 border-2 border-purple-500 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900 transition-colors duration-300" asChild>
          <a href={restaurant.menuLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-5 w-5 mr-2" />
            View Menu
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}

