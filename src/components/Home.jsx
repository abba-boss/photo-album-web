"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Home() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-16 max-w-3xl">
        <motion.h1
          className="text-5xl font-extrabold sm:text-6xl lg:text-7xl mb-4 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Create Beautiful Photo Albums in Seconds
        </motion.h1>

        {/* Auto Typing Text */}
        <motion.div
          className="text-xl sm:text-2xl mb-6 text-white/90 h-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <TypeAnimation
            sequence={[
              "Relive your cherished memories with a stunning, easy-to-create album.",
              3000,
              "",
              1000,
              "Create photo books in no time and preserve your special moments.",
              3000,
              "",
              1000,
            ]}
            speed={50}
            wrapper="p"
            repeat={Number.POSITIVE_INFINITY}
          />
        </motion.div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 justify-center">
          <motion.button
            className="bg-white text-[#2a1a5e] px-8 py-4 rounded-full shadow-lg text-lg hover:bg-white/80 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full shadow-lg text-lg hover:bg-white/20 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse Albums
          </motion.button>
        </div>
      </div>
    </section>
  )
}
