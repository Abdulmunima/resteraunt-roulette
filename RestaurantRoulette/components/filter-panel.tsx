'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'

export function FilterPanel() {
  const [location, setLocation] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [priceRange, setPriceRange] = useState('')
  const [excludeVisited, setExcludeVisited] = useState(false)

  const applyFilters = () => {
    // Implement filter application logic
    console.log('Applying filters:', { location, cuisine, priceRange, excludeVisited })
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 lg:w-96 transition-all duration-300 ease-in-out">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Filters</h2>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="location" className="text-sm font-medium text-gray-600 dark:text-gray-300">Location</Label>
          <Input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter city or zip code"
            className="rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cuisine" className="text-sm font-medium text-gray-600 dark:text-gray-300">Cuisine</Label>
          <Select value={cuisine} onValueChange={setCuisine}>
            <SelectTrigger id="cuisine" className="rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <SelectValue placeholder="Select cuisine" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="italian">Italian</SelectItem>
              <SelectItem value="chinese">Chinese</SelectItem>
              <SelectItem value="mexican">Mexican</SelectItem>
              <SelectItem value="indian">Indian</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="price-range" className="text-sm font-medium text-gray-600 dark:text-gray-300">Price Range</Label>
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger id="price-range" className="rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <SelectValue placeholder="Select price range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="$">$</SelectItem>
              <SelectItem value="$$">$$</SelectItem>
              <SelectItem value="$$$">$$$</SelectItem>
              <SelectItem value="$$$$">$$$$</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="exclude-visited"
            checked={excludeVisited}
            onCheckedChange={setExcludeVisited}
          />
          <Label htmlFor="exclude-visited" className="text-sm font-medium text-gray-600 dark:text-gray-300">Exclude previously visited</Label>
        </div>
        <Button onClick={applyFilters} className="w-full rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 text-lg">
          Apply Filters
        </Button>
      </div>
    </div>
  )
}

