'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    title: 'NexaShop',
    subtitle: 'Full-Stack E-commerce Platform',
    description: 'Full-stack MERN e-commerce platform with shopping cart, Stripe checkout, and admin dashboard for product management and sales analytics',
    link: '/projects/nexashop',
    image: '/nextShop/1.jpg',
    tags: ['React.js', 'Node.js', 'MongoDB'],
  },
  {
    title: 'PropertyHub',
    subtitle: 'Real Estate Listings Platform',
    description: 'Modern real estate platform with interactive maps, advanced filters, and secure admin dashboard for complete property management',
    link: '/projects/propertyhub',
    image: '/PropertyHub/1.jpg',
    tags: ['React.js', 'Express.js', 'Mapbox'],
  },
  {
    title: 'ResumeForge',
    subtitle: 'Interactive Resume Builder',
    description: 'Responsive resume builder featuring real-time editing, multiple professional templates, and instant PDF export',
    link: '/projects/resumeforge',
    image: '/resumeb/1.jpg',
    tags: ['React.js', 'TailwindCSS', 'Zustand'],
  },
  {
    title: 'Business Automation Platform',
    subtitle: 'Custom Workflow Automation',
    description: 'Node.js automation platform streamlining business workflows with 99.9% faster response times and 2,731% ROI for clients',
    link: '/projects/automation',
    image: '/zap/1.jpg',
    tags: ['Node.js', 'Gmail API', 'Google Sheets'],
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" ref={ref} className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-12 text-center">
            Here&apos;s What I&apos;ve Been Up To.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={project.link}>
                  <div className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100">
                    {/* Project Image */}
                    <div className="relative h-48 lg:h-56 bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 lg:p-8">
                      <div className="mb-4">
                        <h3 className="text-xl lg:text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-gray-500 font-medium">{project.subtitle}</p>
                      </div>

                      <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all text-sm">
                        View Project
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center mt-12 lg:mt-16"
          >
            <Link
              href="/projects"
              className="inline-block px-8 py-3 text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105"
            >
              View All
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
