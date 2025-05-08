"use client"

import { useState } from "react"
import Image from "next/image"
import { PhotoModal } from "@/components/photo-modal"
import { Card, CardContent } from "@/components/ui/card"

// Sample photo data - in a real app, this would come from your database
const photos = [
  {
    id: "1",
    src: "/placeholder.svg?height=600&width=800",
    alt: "Beach sunset",
    date: "June 15, 2023",
    album: "Vacation",
  },
  {
    id: "2",
    src: "/placeholder.svg?height=800&width=600",
    alt: "Mountain view",
    date: "July 22, 2023",
    album: "Hiking",
  },
  {
    id: "3",
    src: "/placeholder.svg?height=600&width=800",
    alt: "Family dinner",
    date: "December 25, 2023",
    album: "Family",
  },
  {
    id: "4",
    src: "/placeholder.svg?height=800&width=800",
    alt: "City skyline",
    date: "January 10, 2024",
    album: "Travel",
  },
  {
    id: "5",
    src: "/placeholder.svg?height=600&width=800",
    alt: "Pet dog",
    date: "February 5, 2024",
    album: "Pets",
  },
  {
    id: "6",
    src: "/placeholder.svg?height=800&width=600",
    alt: "Birthday party",
    date: "March 18, 2024",
    album: "Celebrations",
  },
  {
    id: "7",
    src: "/placeholder.svg?height=600&width=800",
    alt: "Garden flowers",
    date: "April 22, 2024",
    album: "Nature",
  },
  {
    id: "8",
    src: "/placeholder.svg?height=800&width=800",
    alt: "Concert",
    date: "May 1, 2024",
    album: "Events",
  },
]

export function PhotoAlbum() {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo) => (
        <Card
          key={photo.id}
          className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => setSelectedPhoto(photo)}
        >
          <CardContent className="p-0">
            <div className="relative aspect-square">
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
            <div className="p-3">
              <p className="font-medium truncate">{photo.alt}</p>
              <p className="text-sm text-muted-foreground">{photo.date}</p>
            </div>
          </CardContent>
        </Card>
      ))}

      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          onNext={() => {
            const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id)
            const nextIndex = (currentIndex + 1) % photos.length
            setSelectedPhoto(photos[nextIndex])
          }}
          onPrevious={() => {
            const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id)
            const prevIndex = (currentIndex - 1 + photos.length) % photos.length
            setSelectedPhoto(photos[prevIndex])
          }}
        />
      )}
    </div>
  )
}
