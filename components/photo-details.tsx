"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Pencil, Save, X } from "lucide-react"

interface PhotoDetailsProps {
  photo: {
    id: string
    src: string
    alt: string
    date: string
    album: string
    description?: string
    location?: string
    tags?: string[]
  }
}

export function PhotoDetails({ photo }: PhotoDetailsProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [photoData, setPhotoData] = useState(photo)

  const handleSave = () => {
    // Here you would implement the actual save logic
    // For example, using a server action or API endpoint
    console.log("Saving photo details:", photoData)
    setIsEditing(false)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Photo Details</CardTitle>
        {!isEditing ? (
          <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
            <Pencil className="h-4 w-4 mr-2" />
            Edit
          </Button>
        ) : (
          <Button variant="ghost" size="sm" onClick={() => setIsEditing(false)}>
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {!isEditing ? (
          <div className="space-y-2">
            <div>
              <span className="font-medium">Title:</span> {photoData.alt}
            </div>
            <div>
              <span className="font-medium">Date:</span> {photoData.date}
            </div>
            <div>
              <span className="font-medium">Album:</span> {photoData.album}
            </div>
            {photoData.description && (
              <div>
                <span className="font-medium">Description:</span> {photoData.description}
              </div>
            )}
            {photoData.location && (
              <div>
                <span className="font-medium">Location:</span> {photoData.location}
              </div>
            )}
            {photoData.tags && photoData.tags.length > 0 && (
              <div>
                <span className="font-medium">Tags:</span>{" "}
                {photoData.tags.map((tag) => (
                  <span key={tag} className="inline-block bg-muted px-2 py-1 text-xs rounded-full mr-1">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="photo-title">Title</Label>
              <Input
                id="photo-title"
                value={photoData.alt}
                onChange={(e) => setPhotoData({ ...photoData, alt: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="photo-date">Date</Label>
              <Input
                id="photo-date"
                type="date"
                value={photoData.date}
                onChange={(e) => setPhotoData({ ...photoData, date: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="photo-description">Description</Label>
              <Textarea
                id="photo-description"
                value={photoData.description || ""}
                onChange={(e) => setPhotoData({ ...photoData, description: e.target.value })}
                placeholder="Add a description..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="photo-location">Location</Label>
              <Input
                id="photo-location"
                value={photoData.location || ""}
                onChange={(e) => setPhotoData({ ...photoData, location: e.target.value })}
                placeholder="Add a location..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="photo-tags">Tags (comma separated)</Label>
              <Input
                id="photo-tags"
                value={photoData.tags?.join(", ") || ""}
                onChange={(e) =>
                  setPhotoData({
                    ...photoData,
                    tags: e.target.value
                      .split(",")
                      .map((tag) => tag.trim())
                      .filter(Boolean),
                  })
                }
                placeholder="Add tags..."
              />
            </div>
          </div>
        )}
      </CardContent>
      {isEditing && (
        <CardFooter>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
