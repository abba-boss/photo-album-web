"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

interface SlideshowProps {
  photos: Array<{
    id: string
    src: string
    alt: string
  }>
  autoPlay?: boolean
  interval?: number
}

export function Slideshow({ photos, autoPlay = true, interval = 5000 }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isPlaying) {
      timer = setInterval(goToNext, interval)
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [isPlaying, interval])

  if (photos.length === 0) {
    return <div>No photos to display</div>
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0 relative">
        <div className="relative aspect-video">
          <Image
            src={photos[currentIndex].src || "/placeholder.svg"}
            alt={photos[currentIndex].alt}
            fill
            className="object-cover transition-opacity duration-500"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />

          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/20 hover:bg-black/40 text-white rounded-full"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="bg-black/20 hover:bg-black/40 text-white rounded-full"
              onClick={goToNext}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
            {photos.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute bottom-4 right-4 bg-black/20 hover:bg-black/40 text-white rounded-full"
            onClick={togglePlayPause}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            <span className="sr-only">{isPlaying ? "Pause" : "Play"} slideshow</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
