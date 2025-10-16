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
                Hi, I&apos;m Wisdom Airey, a Full Stack Developer with a foundation in Electrical and Electronics Engineering and a deep passion for solving real-world problems through code.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                My journey into tech began in university, during a Visual Basic project. I still remember the excitement of seeing my first lines of code come alive — it felt like unlocking a new superpower. That moment sparked a lifelong curiosity about how software works, and since then, I&apos;ve been driven by one goal: to keep building, learning, and growing into one of the best developers in the world.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                In my final year, I combined my engineering background with programming by creating an accident alert and tracking system using Arduino — blending hardware and software to solve a real problem. That experience taught me how powerful code can be when it meets purpose.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Over time, I&apos;ve explored different programming languages and technologies, but my true focus lies in Full Stack Web Development — where creativity meets logic. I enjoy turning ideas into interactive, scalable web experiences using tools like React, Next.js, Node.js, and MongoDB.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Beyond coding, I&apos;m passionate about continuous improvement — whether it&apos;s optimizing performance, refining user interfaces, or learning the latest frameworks. I love challenges that push me to think deeper, plan smarter, and build cleaner.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                When I&apos;m not coding, you&apos;ll probably find me exploring new technologies, reading about design systems, or analyzing how great products are built.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                In short, I&apos;m an engineer at heart and a creator by choice — someone who believes that with the right mix of logic and creativity, there&apos;s no limit to what we can build.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
