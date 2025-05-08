"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Sun, Camera, Moon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#albums", label: "Albums" },
  { href: "#upload", label: "Upload" },
  { href: "#explore", label: "Explore" },
  { href: "#favorites", label: "Favorites" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState("light")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      setTheme(storedTheme)
      document.documentElement.classList[storedTheme === "dark" ? "add" : "remove"]("dark")
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList[newTheme === "dark" ? "add" : "remove"]("dark")
    localStorage.setItem("theme", newTheme)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Camera className="w-6 h-6 text-[#8a2be2]" />
            <motion.span
              className="text-lg  text-[#8a2be2] font-extrabold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Photo Album
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="px-4 py-2 text-sm font-semibold transition-all text-[#4b2ea4] dark:text-[#d1c4f2] hover:text-[#8a2be2] dark:hover:text-[#a18dce]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <button
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            <Link
              href="/login"
              className="rounded-full border font-semibold border-[#5d4b8c] px-5 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="rounded-full bg-[#8a2be2] px-5 py-1.5 text-sm  text-white transition-colors hover:bg-[#7a1bd2] font-semibold"
            >
              Register
            </Link>

            <button
              className="md:hidden p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 top-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md md:hidden z-40"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container p-4">
              <ul className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="flex items-center justify-between p-3 rounded-xl text-lg font-medium transition-all hover:bg-[#8a2be2]/5 text-[#4b2ea4] dark:text-[#d1c4f2] dark:hover:bg-[#8a2be2]/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                      <ChevronDown className="h-5 w-5 opacity-50" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-3">
                <Link
                  href="/register"
                  className="w-full py-3 px-4 bg-gradient-to-r from-[#8a2be2] to-[#4169e1] text-white text-center font-medium rounded-xl shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create an Account
                </Link>

                <Link
                  href="/login"
                  className="w-full py-3 px-4 border border-[#5d4b8c] text-[#5d4b8c] dark:text-[#a18dce] text-center font-medium rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>

                <div className="flex justify-center mt-4">
                  <button className="p-3 rounded-full bg-gray-100 dark:bg-gray-800" onClick={toggleTheme}>
                    {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
