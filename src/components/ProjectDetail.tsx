'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'
import Navigation from '@/components/layout/Navigation'

interface ProjectDetailProps {
  title: string
  subtitle: string
  description: string
  technologies: string[]
  features: string[]
  liveUrl?: string
  githubUrl?: string
  image: string
  gallery?: string[]
  date: string
}

export default function ProjectDetail({
  title,
  subtitle,
  description,
  technologies,
  features,
  liveUrl,
  githubUrl,
  image,
  gallery,
  date,
}: ProjectDetailProps) {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        {/* Back Button */}
        <div className="max-w-5xl mx-auto px-6 lg:px-16 pt-24 pb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
        >
          <FaArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 lg:px-16 pb-16"
      >
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          {/* Project Image */}
          <div className="relative w-full h-[400px] lg:h-[500px] bg-gradient-to-br from-blue-500 to-purple-500">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          {/* Project Info */}
          <div className="p-8 lg:p-12">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  {title}
                </h1>
              </div>
              <p className="text-sm text-gray-500">{date}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  View Live Demo
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-black hover:text-black transition-all"
                >
                  <FaGithub className="w-5 h-5" />
                  View on GitHub
                </a>
              )}
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold mb-4">About this project</h2>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>

            {/* Technologies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery */}
            {gallery && gallery.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {gallery.map((img, index) => (
                    <div
                      key={index}
                      className="relative h-80 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-gray-100"
                    >
                      <Image
                        src={img}
                        alt={`${title} screenshot ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
    </>
  )
}
