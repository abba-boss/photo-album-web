"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

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
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* Using Next.js Image component for better performance */}
            <Image src="/logo.png" alt="Photo Album Website Logo" width={32} height={32} className="w-8 h-8" />
            <motion.span
              className="text-2xl font-bold bg-gradient-to-r from-[#8a2be2] to-blue-400 bg-clip-text text-transparent dark:from-blue-300 dark:to-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Photo Album Website
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-bold text-white transition-all hover:text-[#a18dce] group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <button
              className="hidden md:flex p-2 rounded-full text-white hover:bg-white/10"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            <Link
              href="/login"
              className="rounded-full border border-white px-6 py-1.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="rounded-full bg-[#8a2be2] px-6 py-1.5 text-sm font-bold text-white transition-colors hover:bg-[#7a1bd2]"
            >
              Register
            </Link>

            <button
              className="md:hidden p-2 rounded-full text-white hover:bg-white/10"
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
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="relative flex items-center justify-between p-3 rounded-lg text-lg font-bold transition-colors hover:bg-gray-100 text-gray-700 dark:text-white dark:hover:bg-gray-800 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#8a2be2] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                      <ChevronDown className="h-5 w-5 opacity-50" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid gap-4">
                <Link
                  href="/register"
                  className="w-full py-2 px-4 bg-[#8a2be2] hover:bg-[#7a1bd2] text-white text-center font-bold rounded-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>

                <div className="flex justify-center gap-4">
                  <button
                    className="p-2 rounded-full border border-gray-200 dark:border-gray-700"
                    onClick={toggleTheme}
                  >
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
