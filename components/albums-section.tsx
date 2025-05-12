"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const albumCategories = [
  {
    title: "Family",
    image: "/family1.jpg",
    count: "24 albums",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    title: "Travel",
    image: "/travel2.png",
    count: "16 albums",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    title: "Events",
    image: "/event2.jpg",
    count: "12 albums",
    gradient: "from-blue-500 to-teal-500",
  },
  {
    title: "Nature",
    image: "/nature.jpeg",
    count: "8 albums",
    gradient: "from-amber-500 to-pink-500",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function AlbumsSection() {
  return (
    <section id="albums" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#8a2be2] to-blue-500 bg-clip-text text-transparent">
            Discover Our Album Collections
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our curated album categories and find the perfect template for your memories.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {albumCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={category.image || "/family1.jpg"}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                <p className="text-sm text-white/80 mb-3">{category.count}</p>
                <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20 p-0 h-auto">
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div
                className={`absolute top-4 right-4 bg-gradient-to-r ${category.gradient} p-1.5 rounded-full text-white`}
              >
                <Star className="h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button className="bg-[#8a2be2] hover:bg-[#7a1bd2] text-white px-8 py-6 rounded-full text-lg">
            Browse All Albums
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
