"use client"

import { motion } from "framer-motion"
import { Upload, Check, ImageIcon, Film, FileText, X, Plus } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const steps = [
  {
    title: "Select Photos",
    description: "Choose photos from your device, Google Photos, or social media",
    icon: ImageIcon,
    color: "bg-purple-500",
  },
  {
    title: "Customize Layout",
    description: "Arrange photos, add captions, and choose your favorite design",
    icon: FileText,
    color: "bg-blue-500",
  },
  {
    title: "Preview & Share",
    description: "Preview your album and share it with friends and family",
    icon: Film,
    color: "bg-pink-500",
  },
]

export default function UploadSection() {
  const [selectedFiles, setSelectedFiles] = useState([])
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).slice(0, 6) // Limit to 6 files
      const newFiles = filesArray.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }))
      setSelectedFiles((prev) => [...prev, ...newFiles].slice(0, 6))
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files) {
      const filesArray = Array.from(e.dataTransfer.files).slice(0, 6 - selectedFiles.length)
      const newFiles = filesArray.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }))
      setSelectedFiles((prev) => [...prev, ...newFiles].slice(0, 6))
    }
  }

  const removeFile = (index) => {
    const newFiles = [...selectedFiles]
    URL.revokeObjectURL(newFiles[index].preview)
    newFiles.splice(index, 1)
    setSelectedFiles(newFiles)
  }

  return (
    <section id="upload" className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#8a2be2] to-blue-500 bg-clip-text text-transparent">
              Upload & Create in Minutes
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our intuitive upload process makes it easy to create stunning photo albums in just a few clicks. No
              technical skills required.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className={`${step.color} p-3 rounded-full text-white shrink-0`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <button className="bg-[#8a2be2] hover:bg-[#7a1bd2] text-white px-8 py-4 rounded-full text-lg shadow-lg transition-all hover:shadow-xl flex items-center">
                <Upload className="mr-2 h-5 w-5" /> Start Uploading
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div
              className={`relative p-6 rounded-2xl border-2 border-dashed transition-all ${
                isDragging
                  ? "border-[#8a2be2] bg-[#8a2be2]/10"
                  : "border-gray-300 dark:border-gray-600 hover:border-[#8a2be2]"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="text-center py-8">
                <input
                  type="file"
                  id="file-upload"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
                  <Upload className="h-12 w-12 text-[#8a2be2] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Drag & Drop your photos here</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">or click to browse</p>
                  <button className="bg-[#8a2be2] hover:bg-[#7a1bd2] text-white px-6 py-2 rounded-full transition-all">
                    Select Files
                  </button>
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  Supported formats: JPG, PNG, GIF (max 10MB each)
                </p>
              </div>

              {selectedFiles.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-medium mb-3">Selected Photos ({selectedFiles.length}/6)</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {selectedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="relative rounded-lg overflow-hidden h-24 bg-gray-100 dark:bg-gray-700"
                      >
                        <Image
                          src={file.preview || "/placeholder.svg"}
                          alt={`Preview ${index}`}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                        <button
                          className="absolute top-1 right-1 bg-black/50 rounded-full p-1 text-white"
                          onClick={() => removeFile(index)}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                    {selectedFiles.length < 6 && (
                      <label
                        htmlFor="file-upload"
                        className="flex items-center justify-center h-24 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 cursor-pointer hover:border-[#8a2be2] transition-colors"
                      >
                        <Plus className="h-6 w-6 text-gray-400" />
                      </label>
                    )}
                  </div>
                </div>
              )}
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-4 z-20 flex items-center gap-3"
            >
              <div className="bg-green-500 rounded-full p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium">Upload Complete!</span>
            </motion.div>

            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-blue-500 rounded-full opacity-20 blur-2xl" />
            <div className="absolute -top-6 -left-6 h-32 w-32 bg-purple-500 rounded-full opacity-20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
