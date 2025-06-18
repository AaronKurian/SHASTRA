'use client'
import { useRef, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Image from "next/image"
import satellite2 from "@/assets/satellite2.png"
import moon from "@/assets/moon.png"
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { IoChevronDown } from "react-icons/io5"
import ParticleBackground from './Particles'

const Globe = dynamic(() => import('react-globe.gl').catch(() => ({ default: () => null })), {
  ssr: false,
})

export default function Hero() {
  const globeEl = useRef()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className="h-screen w-full bg-slate-950 font-mechanismo relative overflow-hidden flex items-center justify-center">
      
      <ParticleBackground />
      
      <div className="absolute top-4 md:-top-4 left-2 md:left-20 w-36 md:w-48 z-30" data-aos="fade-right">
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
      <div className="absolute top-32 md:top-4 w-36 md:w-64 right-0 md:-right-10 rotate-45 opacity-40">
        <Image 
          src={satellite2} 
          alt="Satellite"
          width={250}
          height={200}
          className="opacity-30"
          data-aos="fade-left"
        />
      </div>

      <div className="absolute inset-0 -mt-60 md:-mt-72 flex items-center justify-center z-5">
        <h1 className="text-[2.4rem] md:text-[7.5rem] font-bold bg-gradient-to-b from-white via-gray-400 to-black bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        data-aos="fade-up">
          SHASTRA 2025
        </h1>
      </div>
      
      <div className="absolute bottom-[6.4rem] md:bottom-64 left-1/2 transform -translate-x-1/2 translate-y-1/2 md:translate-y-3/4 z-10">
        <Globe
          ref={globeEl}
          width={isMobile ? 1200 : 2400}
          height={isMobile ? 1200 : 2400}
          className="w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
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
      
      <div className="absolute inset-0 flex flex-col font-semibold items-center justify-center z-20">
        <div className="mt-40 text-center">
          {/* Date section */}
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-6" data-aos="fade-up">
            <FaCalendarAlt className="text-white text-lg md:text-3xl flex-shrink-0" />
            <p className="text-[1.2rem] md:text-4xl text-white">
              25, 26, 27 JANUARY
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-6" data-aos="fade-up">
            <FaMapMarkerAlt className="text-white text-lg md:text-2xl flex-shrink-0" />
            <p className="text-[0.9rem] md:text-2xl text-gray-300 text-center">
              GOVT. MODEL ENGINEERING COLLEGE
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-32 md:bottom-24 left-1/2 transform -translate-x-1/2" >
          <p className="text-sm md:text-xl text-gray-300 text-center whitespace-nowrap" data-aos="fade-up">
            INSPIRE | INNOVATE | ENGINEER
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50" >
        <button 
          onClick={scrollToNext}
          className="animate-bounce hover:cursor-pointer rounded-full p-3 hover:scale-110 transition-all duration-300 group"
          aria-label="Scroll down"
          data-aos="fade-down"
        >
          <IoChevronDown className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
        </button>
      </div>
    </section>
  )
}