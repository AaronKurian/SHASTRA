'use client'
import { FaEnvelope, FaLinkedinIn, FaPhone } from 'react-icons/fa'
import { useState, useRef } from 'react'
import Image from 'next/image';
import sreeparvathy from '@/assets/sreeparvathy.png';
import ParticleBackground from '../components/Particles'


export default function Contact() {
  const teamMembers = [
    { name: "Sreeparvathy S Nair", position: "Chairperson", email: "sreeparvathy@shastra2024.com", linkedin: "#", phone: "+91 9876543210", image: sreeparvathy },
    { name: "Arif Basheer", position: "General Secretary", email: "arif@shastra2024.com", linkedin: "#", phone: "+91 9876543211", image: sreeparvathy },
    { name: "Akash V P", position: "Joint Secretary", email: "akash@shastra2024.com", linkedin: "#", phone: "+91 9876543212", image: sreeparvathy },
    { name: "Shekhar M Menon", position: "Finance Manager", email: "shekhar@shastra2024.com", linkedin: "#", phone: "+91 9876543213", image: sreeparvathy },
    { name: "Agnay T P", position: "Event Manager", email: "agnay@shastra2024.com", linkedin: "#", phone: "+91 9876543214", image: sreeparvathy },
    { name: "Jeevan SP", position: "Event Manager", email: "jeevan@shastra2024.com", linkedin: "#", phone: "+91 9876543215", image: sreeparvathy },
    { name: "Harin V Chirappanath", position: "Marketing Manager", email: "harin@shastra2024.com", linkedin: "#", phone: "+91 9876543216", image: sreeparvathy },
    { name: "Vaidyanath B", position: "CS Tech Manager", email: "vaidyanath@shastra2024.com", linkedin: "#", phone: "+91 9876543217", image: sreeparvathy },
    { name: "Niya Shiyas", position: "Web Manager", email: "niya@shastra2024.com", linkedin: "#", phone: "+91 9876543218", image: sreeparvathy },
    { name: "Rishikesh S", position: "General Tech Manager", email: "rishikesh@shastra2024.com", linkedin: "#", phone: "+91 9876543219", image: sreeparvathy },
    { name: "Eshida Lakshmi", position: "Non Tech Manager", email: "eshida@shastra2024.com", linkedin: "#", phone: "+91 9876543220", image: sreeparvathy },
    { name: "Annu Kuruvilla", position: "Design Manager", email: "annu@shastra2024.com", linkedin: "#", phone: "+91 9876543221", image: sreeparvathy },
    { name: "Saniya Biby", position: "Media Relations", email: "saniya@shastra2024.com", linkedin: "#", phone: "+91 9876543222", image: sreeparvathy },
    { name: "Sana Mariya", position: "Conference and Workshops Manager", email: "sana@shastra2024.com", linkedin: "#", phone: "+91 9876543223", image: sreeparvathy },
    { name: "Laya Sara Joy", position: "Social Initiatives Manager", email: "laya@shastra2024.com", linkedin: "#", phone: "+91 9876543224", image: sreeparvathy },
    { name: "Aishwarya V", position: "Online Media Relations Manager", email: "aishwarya@shastra2024.com", linkedin: "#", phone: "+91 9876543225", image: sreeparvathy },
    { name: "Althaf A K", position: "Publicity Manager", email: "althaf@shastra2024.com", linkedin: "#", phone: "+91 9876543226", image: sreeparvathy },
    { name: "Rifana M A", position: "Publicity Manager", email: "rifana@shastra2024.com", linkedin: "#", phone: "+91 9876543227", image: sreeparvathy },
    { name: "P K Jathaved", position: "Marketing Manager (PC)", email: "jathaved@shastra2024.com", linkedin: "#", phone: "+91 9876543228", image: sreeparvathy },
    { name: "Anandu Kishor Kumar", position: "Content Manager", email: "anandu@shastra2024.com", linkedin: "#", phone: "+91 9876543229", image: sreeparvathy },
    { name: "Aravind K A", position: "Creatives Manager", email: "aravind@shastra2024.com", linkedin: "#", phone: "+91 9876543230", image: sreeparvathy },
    { name: "Ayoona Roy", position: "Conference and Workshops Manager (PC)", email: "ayoona@shastra2024.com", linkedin: "#", phone: "+91 9876543231", image: sreeparvathy },
    { name: "Arundhati Girish", position: "Talks Manager", email: "arundhati@shastra2024.com", linkedin: "#", phone: "+91 9876543232", image: sreeparvathy },
    { name: "Aswindev M V", position: "Ambience Manager", email: "aswindev@shastra2024.com", linkedin: "#", phone: "+91 9876543233", image: sreeparvathy },
  ];

  return (
    <div className="min-h-screen bg-slate-950">

      {/* Particle Background */}
      <ParticleBackground />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold font-mechanismo text-center mb-12 gradient-text" data-aos="fade-up">
          CONTACTS
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 md:mx-48">
          {teamMembers.map((member, index) => {
            const [isHovered, setIsHovered] = useState(false);
            const [transform, setTransform] = useState('');
            const cardRef = useRef(null);

            const handleMouseMove = (e) => {
              if (!cardRef.current) return;
              
              const card = cardRef.current;
              const rect = card.getBoundingClientRect();
              
              // Calculate mouse position relative to card center
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              
              // Calculate rotation values (-15 to 15 degrees for subtler effect)
              const rotateX = ((y - centerY) / centerY) * -15;
              const rotateY = ((x - centerX) / centerX) * 15;
              
              setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(30px)`);
            };

            const handleMouseEnter = () => {
              setIsHovered(true);
            };

            const handleMouseLeave = () => {
              setIsHovered(false);
              setTransform('');
            };

            return (
              <div 
                key={index} 
                ref={cardRef}
                className="bg-gradient-to-bl from-black/10 via-purple-300/10 to-black/10 backdrop-blur-sm border border-slate-700 rounded-xl p-6  card-glow text-center cursor-pointer transition-all duration-300 ease-out"
                style={{
                  transform: transform,
                  transformStyle: 'preserve-3d',
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                data-aos="fade-up"
              >
                {/* Profile Picture */}
                <div className={`w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden transition-transform duration-300 ${isHovered ? 'scale-104' : ''}`}>
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={120}
                    height={120}
                    className="w-full h-full object-cover drop-shadow-[0_0_10px_#5e00ff]"
                    data-aos="zoom-in"
                  />
                </div>
                
                {/* Name and Position */}
                <h3 className="text-xl font-semibold text-white mb-2" data-aos="fade-up" >{member.name}</h3>
                <p className="text-cyan-400 mb-4 text-sm" data-aos="fade-up" >{member.position}</p>
                
                {/* Contact Icons */}
                <div className="flex justify-center space-x-4" data-aos="fade-up" >
                  <a 
                    href={`mailto:${member.email}`} 
                    className={`text-gray-400 hover:text-indigo-400 transition-all duration-300 text-xl hover:scale-125`}
                    aria-label="Email"
                  >
                    <FaEnvelope />
                  </a>
                  <a 
                    href={member.linkedin} 
                    className={`text-gray-400 hover:text-indigo-400 transition-all duration-300 text-xl hover:scale-125`}
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a 
                    href={`tel:${member.phone}`} 
                    className={`text-gray-400 hover:text-indigo-400 transition-all duration-300 text-xl hover:scale-125`}
                    aria-label="Phone"
                  >
                    <FaPhone />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
