import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'
import Navigation from '@/components/layout/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50 px-4 pt-0 pb-8">
        {/* Content wrapper with border */}
        <div className="max-w-5xl mx-auto bg-white border-l border-r border-b border-gray-200 shadow-sm">
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}
