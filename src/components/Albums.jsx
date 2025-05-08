"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Star, Heart, Share2, Grid, List } from "lucide-react"

const albumCategories = [
  {
    title: "Family",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=600&h=400&q=80",
    count: "24 albums",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    title: "Travel",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&h=400&q=80",
    count: "16 albums",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    title: "Events",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&h=400&q=80",
    count: "12 albums",
    gradient: "from-blue-500 to-teal-500",
  },
  {
    title: "Nature",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&h=400&q=80",
    count: "8 albums",
    gradient: "from-amber-500 to-pink-500",
  },
]

const featuredAlbums = [
  {
    title: "Summer Vacation 2023",
    cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&h=400&q=80",
    photos: 42,
    likes: 128,
    date: "Aug 2023",
  },
  {
    title: "Wedding Day",
    cover: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&h=400&q=80",
    photos: 156,
    likes: 243,
    date: "Jun 2023",
  },
  {
    title: "Mountain Hiking",
    cover: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&h=400&q=80",
    photos: 78,
    likes: 92,
    date: "Sep 2023",
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

export default function Albums() {
  const [viewMode, setViewMode] = useState("grid")

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
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

        {/* View mode toggle */}
        <div className="flex justify-end mb-6">
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md ${
                viewMode === "grid" ? "bg-[#8a2be2] text-white" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md ${
                viewMode === "list" ? "bg-[#8a2be2] text-white" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Categories */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {albumCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                <p className="text-sm text-white/80 mb-3">{category.count}</p>
                <button className="text-white hover:text-white hover:underline flex items-center">
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div
                className={`absolute top-4 right-4 bg-gradient-to-r ${category.gradient} p-1.5 rounded-full text-white`}
              >
                <Star className="h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Albums */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Featured Albums</h3>
            <button className="flex items-center text-[#8a2be2] hover:underline">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>

          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-3 gap-8" : "space-y-4"}>
            {featuredAlbums.map((album, index) =>
              viewMode === "grid" ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={album.cover || "/placeholder.svg"}
                      alt={album.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                      {album.photos} photos
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-1">{album.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{album.date}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 text-red-500 mr-1" />
                        <span className="text-sm">{album.likes}</span>
                      </div>
                      <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
                >
                  <div className="w-1/4 relative">
                    <img
                      src={album.cover || "/placeholder.svg"}
                      alt={album.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-3/4 p-4 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-lg">{album.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {album.date} • {album.photos} photos
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 text-red-500 mr-1" />
                        <span className="text-sm">{album.likes}</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                          <Share2 className="h-4 w-4" />
                        </button>
                        <button className="bg-[#8a2be2] text-white px-3 py-1 rounded-full text-sm">View</button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-[#8a2be2] hover:bg-[#7a1bd2] text-white px-8 py-4 rounded-full text-lg shadow-lg transition-all hover:shadow-xl">
            Browse All Albums
          </button>
        </motion.div>
      </div>
    </section>
  )
}
