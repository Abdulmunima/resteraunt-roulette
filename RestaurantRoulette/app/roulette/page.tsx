import Link from 'next/link'
import { SlotMachine } from '@/components/slot-machine'
import { FilterPanel } from '@/components/filter-panel'
import { RestaurantDetails } from '@/components/restaurant-details'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function RoulettePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <Link href="/" passHref>
              <Button variant="ghost" size="sm" className="mr-4 text-white hover:text-blue-200">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
            <h1 className="text-5xl font-bold tracking-tight text-white">Restaurant Roulette</h1>
          </div>
          <ThemeToggle />
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-grow space-y-8">
            <SlotMachine />
            <RestaurantDetails />
          </div>
          <FilterPanel />
        </div>
      </div>
    </main>
  )
}

