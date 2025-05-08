"use client"

import { TypeAnimation } from "react-type-animation"
import { ArrowRight } from "lucide-react"
import "./hero.css"

export default function Hero() {
  return (
    <section
    className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white overflow-hidden myhero"
    style={{
      backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('/family3.png')",
    }}
  >
  
      {/* Modern gradient overlay instead of simple black */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-16 max-w-4xl">
        {/* Improved heading with gradient and better typography */}
        <h1 className="text-5 font-extrabold sm:text-6xl lg:text-2xl mt-6 mb-1 leading-tight">
          <span className="inline-block text-blue-500 ">Create Beautiful</span>
          <br />
          <span className="inline-block text-blue-500 ">Photo Albums</span>
          <br />
          <span className="relative">
            <span className="inline-block text-blue-500 ">in Seconds</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></span>
          </span>
        </h1>

        {/* Auto Typing Text with improved styling */}
        <div className="text-xl sm:text-2xl mb-5  text-gray-200 h-20  bg-[#7a1bd2]">
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
        </div>

        {/* Redesigned Call to Action Buttons with solid backgrounds */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 justify-center">
          <button className="bg-[#8a2be2] hover:bg-[#7a1bd2] text-white px-8 py-2 rounded-full text-lg font-medium shadow-lg transition-all duration-300 flex items-center">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/70 hover:border-white text-white px-8 py-2 rounded-full text-lg font-medium shadow-lg transition-all duration-300">
            Browse Albums
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </section>
  )
}
