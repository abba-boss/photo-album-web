"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Camera, Heart, Mail, Phone, MapPin, ArrowUp, Instagram, Twitter, Facebook, Youtube, Send } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing email:", email)
    setEmail("")
    // Show success message or toast notification
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#8a2be2]/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl"></div>

      {/* Newsletter section */}
      <div className="container mx-auto px-4 pt-16">
        <div className="relative z-10 bg-gradient-to-r from-[#8a2be2]/20 to-blue-500/20 rounded-2xl p-8 mb-16 backdrop-blur-sm border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
              <p className="text-gray-300 max-w-md">
                Stay updated with our latest features, tips for creating amazing photo albums, and exclusive offers.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#8a2be2] text-white w-full sm:w-64"
                required
              />
              <button
                type="submit"
                className="bg-[#8a2be2] hover:bg-[#7a1bd2] text-white px-6 py-3 rounded-full flex items-center justify-center transition-colors"
              >
                Subscribe <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 relative z-10">
          <div>
            <a href="#home" className="flex items-center space-x-2 mb-6">
              <Camera className="w-6 h-6 text-blue-400" />
              <motion.span className="text-xl font-bold bg-gradient-to-r from-[#8a2be2] to-blue-400 bg-clip-text text-transparent">
                Photo Albums
              </motion.span>
            </a>
            <p className="text-gray-400 mb-6">
              Create beautiful photo albums in seconds. Preserve your memories with our easy-to-use platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#8a2be2] rounded-full mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#albums" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#8a2be2] rounded-full mr-2"></span>
                  Albums
                </a>
              </li>
              <li>
                <a href="#upload" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#8a2be2] rounded-full mr-2"></span>
                  Upload
                </a>
              </li>
              <li>
                <a href="#explore" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#8a2be2] rounded-full mr-2"></span>
                  Explore
                </a>
              </li>
              <li>
                <a href="#favorites" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#8a2be2] rounded-full mr-2"></span>
                  Favorites
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#8a2be2] rounded-full mr-2"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  GDPR
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Licensing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#8a2be2] mt-0.5" />
                <span className="text-gray-400">photoalbum0@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#8a2be2] mt-0.5" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#8a2be2] mt-0.5" />
                <span className="text-gray-400">123 Photo Street, Album City, PC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center relative z-10">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Photo Albums. All rights reserved. Made with{" "}
            <Heart className="inline-block h-4 w-4 text-red-500 fill-red-500" /> by Photo Albums Team
          </p>

          <button
            onClick={scrollToTop}
            className="bg-[#8a2be2] hover:bg-[#7a1bd2] p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
