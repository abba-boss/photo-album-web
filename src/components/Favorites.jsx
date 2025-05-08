"use client"

import { motion } from "framer-motion"
import { Heart, Star, Share2, Download, Bookmark, Plus, Trash2 } from "lucide-react"
import { useState } from "react"

const favoriteAlbums = [
  {
    id: 1,
    title: "Summer Vacation 2023",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&h=400&q=80",
    likes: 243,
    photos: 48,
    isFavorite: true,
  },
  {
    id: 2,
    title: "Wedding Day",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&h=400&q=80",
    likes: 189,
    photos: 124,
    isFavorite: true,
  },
  {
    id: 3,
    title: "Family Reunion",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&h=400&q=80",
    likes: 156,
    photos: 67,
    isFavorite: true,
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

export default function Favorites() {
  const [favorites, setFavorites] = useState(favoriteAlbums)

  const toggleFavorite = (id) => {
    setFavorites(favorites.map((album) => (album.id === id ? { ...album, isFavorite: !album.isFavorite } : album)))
  }

  const removeAlbum = (id) => {
    setFavorites(favorites.filter((album) => album.id !== id))
  }

  return (
    <section id="favorites" className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#8a2be2] to-blue-500 bg-clip-text text-transparent">
              Save Your Favorites
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Bookmark your favorite albums and photos for quick access. Share them with friends and family with just a
              few clicks.
            </p>

            <div className="space-y-6 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Like & Favorite</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Mark photos you love and organize them into collections
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <Share2 className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Share Instantly</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Share albums via email, social media, or direct link
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
                  <Download className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Download Anytime</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Download your albums in high resolution for printing
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <button className="bg-[#8a2be2] hover:bg-[#7a1bd2] text-white px-8 py-4 rounded-full text-lg shadow-lg transition-all hover:shadow-xl flex items-center">
                <Bookmark className="mr-2 h-5 w-5" /> View All Favorites
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-1 gap-6"
          >
            {favorites.map((album) => (
              <motion.div
                key={album.id}
                variants={item}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex h-32 md:h-40">
                  <div className="w-1/3 relative overflow-hidden">
                    <img
                      src={album.image || "/placeholder.svg"}
                      alt={album.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="w-2/3 bg-white dark:bg-gray-800 p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold mb-1">{album.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{album.photos} photos</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Heart
                          className={`h-4 w-4 ${album.isFavorite ? "text-pink-500 fill-pink-500" : "text-gray-400"}`}
                          onClick={() => toggleFavorite(album.id)}
                        />
                        <span className="text-sm">{album.likes}</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                          <Share2 className="h-4 w-4" />
                        </button>
                        <button className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                          <Download className="h-4 w-4" />
                        </button>
                        <button
                          className="p-1.5 rounded-full bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 text-red-500 transition-colors"
                          onClick={() => removeAlbum(album.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 p-1.5 rounded-full shadow-md">
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={item}
              className="bg-gradient-to-r from-[#8a2be2]/10 to-blue-500/10 rounded-xl p-6 border border-purple-200 dark:border-purple-900/30"
            >
              <p className="text-center text-gray-600 dark:text-gray-300">
                <span className="block font-semibold mb-2">Create your own collection</span>
                Start saving your favorite photos and create personalized albums
              </p>
              <div className="mt-4 flex justify-center">
                <button className="border border-[#8a2be2] text-[#8a2be2] hover:bg-[#8a2be2]/10 px-4 py-2 rounded-full flex items-center transition-colors">
                  <Plus className="mr-2 h-4 w-4" /> Create Collection
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
