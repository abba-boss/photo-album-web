"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, X } from "lucide-react"

export function UploadButton() {
  const [open, setOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)

      // Create preview
      const reader = new FileReader()
      reader.onload = (event) => {
        setPreview(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpload = () => {
    // Here you would implement the actual upload logic
    // For example, using a server action or API endpoint
    console.log("Uploading file:", selectedFile)

    // Reset and close dialog
    setSelectedFile(null)
    setPreview(null)
    setOpen(false)
  }

  const clearSelection = () => {
    setSelectedFile(null)
    setPreview(null)
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <Upload className="mr-2 h-4 w-4" />
        Upload Photos
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Upload new photos</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {!preview ? (
              <div className="flex flex-col gap-4">
                <Label htmlFor="photo-upload">Select photo</Label>
                <Input id="photo-upload" type="file" accept="image/*" onChange={handleFileChange} />
              </div>
            ) : (
              <div className="relative">
                <img
                  src={preview || "/placeholder.svg"}
                  alt="Preview"
                  className="w-full h-64 object-contain border rounded-md"
                />
                <Button variant="destructive" size="icon" className="absolute top-2 right-2" onClick={clearSelection}>
                  <X className="h-4 w-4" />
                </Button>
                <p className="mt-2 text-sm font-medium">{selectedFile?.name}</p>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <Label htmlFor="photo-title">Title</Label>
              <Input id="photo-title" placeholder="Enter a title for your photo" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="photo-album">Album</Label>
              <Select>
                <SelectTrigger id="photo-album">
                  <SelectValue placeholder="Select album" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vacation">Vacation</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
                  <SelectItem value="nature">Nature</SelectItem>
                  <SelectItem value="events">Events</SelectItem>
                  <SelectItem value="pets">Pets</SelectItem>
                  <SelectItem value="travel">Travel</SelectItem>
                  <SelectItem value="new">+ Create new album</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpload} disabled={!selectedFile}>
              Upload
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
