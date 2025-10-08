import Link from 'next/link'
import { FaTwitter, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 lg:py-16">
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              Copyright © 2025 Wisdom Airey.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://x.com/wisdomairey"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="https://www.instagram.com/wisdomairey"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://github.com/wisdomairey"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="mailto:wisdomaireguamen@gmail.com"
              className="hover:text-blue-300 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
