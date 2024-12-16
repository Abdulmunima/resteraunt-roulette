'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    title: "Top Restaurants",
    description: "Curated list of must-visit eateries.",
    author: "Jane Doe",
    date: "11 Jan 2022"
  },
  {
    title: "Global Flavors",
    description: "Explore world cuisines and dishes.",
    author: "John Smith",
    date: "15 Feb 2022"
  },
  {
    title: "Gourmet Review",
    description: "In-depth look at a culinary hotspot.",
    author: "Emily White",
    date: "20 Mar 2022"
  }
]

export default function Blog() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light mb-12 text-center"
        >
          Culinary Insights
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h4 className="font-light text-xl mb-2">{post.title}</h4>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="text-sm text-gray-500">
                <span>{post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/blog" className="text-black hover:text-gray-600 font-light transition duration-300">
            View all articles
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

