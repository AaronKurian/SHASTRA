'use client'
import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Image from "next/image"
import satellite2 from "@/assets/satellite2.png"
import d2 from "@/assets/d2.png"
import moon from "@/assets/moon.png"
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import ParticleBackground from './Particles'

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import('react-globe.gl'), {
  ssr: false,
})

export default function Hero() {
  const globeEl = useRef()

  return (
    <section className="min-h-screen bg-slate-950 relative overflow-hidden flex items-center justify-center">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Moon image on top left */}
      <div className="absolute top-4 md:-top-4 left-2 md:left-20  w-36 md:w-full z-30">
        <Image 
          src={moon} 
          alt="Moon"
          width={200}
          height={200}
          className="opacity-30"
          style={{
            mask: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)',
            WebkitMask: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)'
          }}
        />
      </div>
      <div className="absolute top-32 md:top-4 w-36 md:w-64 -right-10 rotate-45 z-30">
        <Image 
          src={satellite2} 
          alt="Moon"
          width={250}
          height={200}
          className="opacity-30"
        />
      </div>

      {/* SHASTRA 2025 text behind globe */}
      <div className="absolute inset-0 -mt-60 md:-mt-72 flex items-center justify-center z-5">
        <h1 className="text-[2.7rem] md:text-[9rem] font-bold bg-gradient-to-b from-white via-gray-400 to-black bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          SHASTRA 2025
        </h1>
      </div>
      
      {/* 3D Globe centered at bottom */}
      <div className="absolute bottom-64 left-1/2 transform -translate-x-1/2 translate-y-3/4 z-10">
        <Globe
          ref={globeEl}
          width={2400}
          height={2400}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          showAtmosphere={true}
          atmosphereColor="blue"
          atmosphereAltitude={0.13}
          animateIn={true}
          enablePointerInteraction={true}
        />
      </div>
      
      {/* Other text content above globe */}
      <div className="absolute inset-0 flex flex-col font-semibold items-center justify-center z-20">
        <div className="mt-40">
          <div className="flex items-center justify-center mb-6">
            <FaCalendarAlt className="text-white md:text-3xl mr-3" />
            <p className="text-2xl md:text-4xl text-white text-center">
              25, 26, 27 JANUARY
            </p>
          </div>
          
          <div className="flex items-center justify-center">
            <FaMapMarkerAlt className="text-white md:text-2xl mr-3" />
            <p className="text-md md:text-2xl text-gray-300 text-center">
              GOVT. MODEL ENGINEERING COLLEGE
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}