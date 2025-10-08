'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6'
import { IoHomeOutline } from 'react-icons/io5'

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="bg-white/70 backdrop-blur-lg border border-gray-200/50 rounded-full shadow-lg px-6 py-3">
        <div className="flex items-center justify-center gap-6">
          {/* Home Icon */}
          <Link 
            href="/" 
            className="text-gray-700 hover:text-black transition-colors p-2 hover:bg-gray-100 rounded-full"
            aria-label="Home"
          >
            <IoHomeOutline className="w-5 h-5" />
          </Link>

          {/* Divider */}
          <div className="w-px h-5 bg-gray-300" />

          {/* Social Icons */}
          <a
            href="https://x.com/wisdomairey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors p-2 hover:bg-gray-100 rounded-full"
            aria-label="Twitter"
          >
            <FaXTwitter className="w-5 h-5" />
          </a>

          <a
            href="https://github.com/wisdomairey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors p-2 hover:bg-gray-100 rounded-full"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/wisdomairey/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors p-2 hover:bg-gray-100 rounded-full"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
