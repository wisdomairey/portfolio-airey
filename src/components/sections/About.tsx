'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-16 lg:py-24 px-6 lg:px-12 bg-gray-50">
      <div className="w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-12 text-center">
            About
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                I like to craft solid and scalable products with exceptional user
                experiences, focusing on innovation and problem-solving across
                various industries.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                I&apos;m Wisdom Airey, a 19-year-old Nigerian software developer,
                with 7.5+ years of experience in web development, app development,
                robotics, cloud computing, and game development. I specialize in
                building robust applications, cloud platforms, and cutting-edge
                robotics solutions.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                A self-taught programmer, ranked among the top programmers in Port
                Harcourt, Nigeria, I am an active tech content creator, speaker, and
                mentor passionate about empowering others in tech. I&apos;m also the CEO
                and founder of Pxxl App, a cloud deployment platform for websites,
                APIs, and databases.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
