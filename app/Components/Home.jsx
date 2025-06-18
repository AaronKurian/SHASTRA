'use client'
import Hero from './Landing'
import About from './About'
import Legacy from './Legacy'
import Gallery from './Gallery'
import Partners from './Partners'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Hero />
      <About />
      <Legacy />
      <Gallery />
      <Partners />
    </div>
  )
}
