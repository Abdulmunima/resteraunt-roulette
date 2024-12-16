import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-600 to-blue-500">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Restaurant Roulette</h1>
        <ThemeToggle />
      </header>
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 animate-fade-in-up">
            Discover Your Next Favorite Meal
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Spin the wheel and let fate decide your culinary adventure. From hidden gems to popular hotspots, find the perfect restaurant in seconds.
          </p>
          <Link href="/roulette" passHref>
            <Button size="lg" className="text-xl px-8 py-6 rounded-full bg-white text-purple-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-600">
              Start Spinning
            </Button>
          </Link>
        </div>
      </main>
      <footer className="p-6 text-center text-white">
        <p>&copy; 2023 Restaurant Roulette. All rights reserved.</p>
      </footer>
    </div>
  );
}

