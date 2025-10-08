import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Wisdom Airey - Software Engineer",
  description: "Creating innovative solutions and captivating designs. Software Engineer specializing in web development, cloud computing, and robotics.",
  keywords: ['Wisdom Airey', 'Software Engineer', 'Web Developer', 'Portfolio', 'Next.js', 'React'],
  authors: [{ name: 'Wisdom Airey' }],
  openGraph: {
    title: "Wisdom Airey - Software Engineer",
    description: "Creating innovative solutions and captivating designs.",
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
