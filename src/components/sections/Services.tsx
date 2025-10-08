'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 lg:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            How Can I Help?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-16">
            Let&apos;s turn your vision into something amazing.
          </p>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="p-8 lg:p-10 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 lg:w-10 lg:h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Building modern, responsive websites and web applications with the latest technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="p-8 lg:p-10 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 lg:w-10 lg:h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Cloud Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Deploying scalable cloud infrastructure and platforms for modern applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="p-8 lg:p-10 bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 lg:w-10 lg:h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">App Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating intuitive mobile and desktop applications for iOS, Android, and beyond.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
