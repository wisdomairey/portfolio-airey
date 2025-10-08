'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-16 pt-24 lg:pt-28">
      <div className="w-full mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center items-center mb-8"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/profile.jpg"
                alt="Wisdom Airey"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Hey, I&apos;m{' '}
            <span className="text-black">
              Wisdom Airey.
            </span>
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl font-semibold mb-6 text-gray-800"
        >
          Software Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-sm md:text-base text-gray-600 mb-3"
        >
          Creating innovative solutions and captivating designs.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xs md:text-sm text-gray-500 mb-8"
        >
          Crafting digital experiences that work — beautifully.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-7 py-3 text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105"
          >
            Hire Me!
          </a>
          <span className="px-7 py-3 text-sm font-medium border-2 border-gray-200 rounded-full text-gray-600">
            Available for new project
          </span>
        </motion.div>
      </div>
    </section>
  )
}
