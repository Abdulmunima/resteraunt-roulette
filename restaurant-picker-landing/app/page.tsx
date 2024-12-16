import { Inter } from 'next/font/google'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import SlotMachine from './components/SlotMachine'
import Blog from './components/Blog'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      <Header />
      <main>
        <Hero />
        <Features />
        <SlotMachine />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

