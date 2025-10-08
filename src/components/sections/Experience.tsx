'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const experiences = [
  {
    period: 'Sept 2024-Present',
    title: 'Founder & CEO',
    company: 'Pxxl App',
    logo: '/pxxl-logo.png',
  },
  {
    period: '2025-Present',
    title: 'Frontend Developer',
    company: 'Steadfast Int.',
    logo: '/steadfast-logo.png',
  },
  {
    period: '2024-Present',
    title: 'Fullstack Developer',
    company: 'TheEccomerceBoss',
    logo: '/ecommerce-logo.png',
  },
  {
    period: '2019-2022',
    title: 'Backend Developer',
    company: 'OrganStation',
    logo: '/organ-logo.png',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={ref} className="py-20 lg:py-32 px-6 bg-gray-50 relative overflow-hidden">
      {/* Decorative Doodle */}
      <div className="absolute right-0 top-20 w-64 h-64 opacity-5 pointer-events-none">
        <Image
          src="/doodle.png"
          alt="Doodle decoration"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-16 text-center">
            Work Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 relative flex-shrink-0 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain p-3"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-2 font-medium">{exp.period}</p>
                    <h3 className="text-xl lg:text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-gray-600 font-medium">at</p>
                    <p className="text-gray-800 font-semibold">{exp.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
