'use client'
import Hero from './Hero'
import About from './About'
import Legacy from './Legacy'
import Features from './Features'
import Gallery from './Gallery'
import Partners from './Partners'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Hero />
      <About />
      <Legacy />
      <Features />
      <Gallery />
      <Partners />
    </div>
  )
}
