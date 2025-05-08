"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, Download, Trash2, Heart } from "lucide-react"
import Image from "next/image"

interface PhotoModalProps {
  photo: {
    id: string
    src: string
    alt: string
    date: string
    album: string
  }
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function PhotoModal({ photo, onClose, onNext, onPrevious }: PhotoModalProps) {
  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>

          <div className="relative h-[70vh] bg-black flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full"
              onClick={onPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous photo</span>
            </Button>

            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full"
              onClick={onNext}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next photo</span>
            </Button>
          </div>

          <div className="p-4 bg-white dark:bg-gray-950">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">{photo.alt}</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download</span>
                </Button>
                <Button variant="outline" size="icon" className="text-red-500">
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Date: {photo.date}</p>
              <p>Album: {photo.album}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
