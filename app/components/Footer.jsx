import Link from 'next/link'
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6'
import logo from "@/assets/logo.png";
import meclogo from "@/assets/meclogo.png";


import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* New centered section */}
        <div className="py-24 md:py-8 text-center">
          {/* Center logo */}
          <div className="mb-24">
            <h3 className="text-7xl font-bold translucent-text text-shine select-none">SHASTRA</h3>
          </div>
          
          {/* Centered text */}
          <div className="mb-8">
            <p className="text-xl font-semibold  text-white">Ready for liftoff?</p>
          </div>
          
          <div className="mb-6">
            <p className="text-lg text-gray-300">A galaxy of innovations, excitement and wonder awaits.</p>
          </div>
        </div>
        
        {/* Bottom section with logos and social icons */}
        <div className="border-t border-gray-700/70 pt-6">
          {/* Logos row */}
          <div className="flex justify-between items-center mb-6">
            <Link 
              href="/"
              className="bottom-0 left-0  -ml-4 md:-ml-24 md:-mb-24"
              aria-label="SHASTRA 2025"
            >
              <Image 
                src={logo} 
                width={300} 
                height={75} 
                alt="SHASTRA MEC Logo"
                priority 
              />
            </Link>
            
            <Link 
              href="/"
              className="bottom-0 right-0 mr-8 md:-mr-12 md:-mb-24"
              aria-label="MEC"
            >
              <Image 
                src={meclogo} 
                width={90} 
                height={75} 
                alt="MEC Logo"
                priority 
              />
            </Link>
          </div>
          
          {/* Social Media Icons row */}
          <div className="flex justify-center space-x-6 bottom-0 -mb-16 md:-mt-8">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl" aria-label="Twitter">
              <FaXTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </div>

        </div>
        
        {/* Copyright */}
        {/* <div className="text-center text-gray-400 mt-6">
          <p>&copy; 2024 SHASTRA. All rights reserved.</p>
          </div> */}
      </div>
    </footer>
  )
}
