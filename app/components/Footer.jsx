import Link from 'next/link'
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'
import logo from "@/assets/logo.png";

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* New centered section */}
        <div className="py-12 text-center">
          {/* Center logo */}
          <div className="mb-24">
            <h3 className="text-4xl font-bold gradient-text">SHASTRA</h3>
          </div>
          
          {/* Centered text */}
          <div className="mb-8">
            <p className="text-xl font-semibold text-white">Ready for liftoff?</p>
          </div>
          
          <div className="mb-6">
            <p className="text-lg text-gray-300">A galaxy of innovations, excitement and wonder awaits.</p>
          </div>
        </div>
        
        {/* Bottom section with logos and social icons */}
        <div className="border-t border-gray-700 pt-8 flex justify-between items-center">
          <div className="text-gray-400">
            <span className="font-semibold">ExcelLogo</span>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </div>
          
          <div className="text-gray-400">
            <span className="font-semibold">mec</span>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-400 mt-6">
          <p>&copy; 2024 SHASTRA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
