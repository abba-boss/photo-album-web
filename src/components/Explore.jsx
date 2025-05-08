"use client"

import { motion } from "framer-motion"
import { Search, Filter, Map, Calendar, Tag, Compass, Check, Grid3X3, LayoutGrid } from "lucide-react"
import { useState } from "react"

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Find photos by location, date, people, or objects in the image",
  },
  {
    icon: Filter,
    title: "Advanced Filters",
    description: "Apply filters to enhance your photos and create a cohesive look",
  },
  {
    icon: Map,
    title: "Location Mapping",
    description: "View your photos on a map and organize by travel destinations",
  },
  {
    icon: Calendar,
    title: "Timeline View",
    description: "Browse your photos chronologically with our interactive timeline",
  },
  {
    icon: Tag,
    title: "Auto-Tagging",
    description: "AI-powered tagging identifies people, places, and objects automatically",
  },
  {
    icon: Compass,
    title: "Discover Mode",
    description: "Get inspired by curated collections and trending themes",
  },
]

const photoGrid = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["nature", "landscape"],
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["travel", "mountain"],
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["food", "restaurant"],
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["architecture", "italy"],
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1520443240718-fce21901db79?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["people", "portrait"],
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["animal", "cat"],
  },
]

export default function Explore() {
  const [activeTag, setActiveTag] = useState("all")
  const [layout, setLayout] = useState("grid")

  const tags = ["all", "nature", "travel", "food", "architecture", "people", "animal"]

  const filteredPhotos = activeTag === "all" ? photoGrid : photoGrid.filter((photo) => photo.tags.includes(activeTag))

  return (
    <section id="explore" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#8a2be2] to-blue-500 bg-clip-text text-transparent">
            Explore Your Photos Like Never Before
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Powerful tools to help you discover, organize, and enjoy your photo collection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="relative h-[500px] w-full">
              <img
                src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1600&h=900&q=80"
                alt="Explore Interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#8a2be2] p-2 rounded-lg">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search your photos..."
                    className="bg-transparent border-none outline-none text-white w-full placeholder:text-white/70"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            {/* <h3 className="text-2xl font-bold mb-4">Intelligent Organization</h3> */}
            {/* <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our AI-powered tools automatically organize your photos by people, places, and events, making it easy to
              find exactly what you're looking for.
            </p> */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full text-purple-600 dark:text-purple-400">
                  <Check className="h-5 w-5" />
                </div>
                <span>Face recognition groups photos by people</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full text-purple-600 dark:text-purple-400">
                  <Check className="h-5 w-5" />
                </div>
                <span>Location data creates travel maps automatically</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full text-purple-600 dark:text-purple-400">
                  <Check className="h-5 w-5" />
                </div>
                <span>Date clustering identifies events and occasions</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Photo Browser */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                    activeTag === tag
                      ? "bg-[#8a2be2] text-white"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setLayout("grid")}
                className={`p-2 rounded-md ${
                  layout === "grid"
                    ? "bg-[#8a2be2] text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                <Grid3X3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setLayout("masonry")}
                className={`p-2 rounded-md ${
                  layout === "masonry"
                    ? "bg-[#8a2be2] text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                <LayoutGrid className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            className={`grid gap-4 ${
              layout === "grid" ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2 md:grid-cols-3 auto-rows-[200px]"
            }`}
          >
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`overflow-hidden rounded-lg ${layout === "masonry" && index % 3 === 0 ? "row-span-2" : ""}`}
              >
                <div className="relative h-full group cursor-pointer">
                  <img
                    src={photo.src || "/placeholder.svg"}
                    alt={`Photo ${photo.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      View Photo
                    </button>
                  </div>
                  <div className="absolute bottom-2 left-2 flex gap-1">
                    {photo.tags.map((tag) => (
                      <span key={tag} className="bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-gradient-to-br from-[#8a2be2] to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-[#8a2be2] hover:bg-[#7a1bd2] text-white px-8 py-4 rounded-full text-lg shadow-lg transition-all hover:shadow-xl">
            Start Exploring
          </button>
        </motion.div>
      </div>
    </section>
  )
}
