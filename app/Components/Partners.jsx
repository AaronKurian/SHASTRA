'use client'
import Image from "next/image"
import keyvalueLogo from "@/assets/keyvalue.jpg"
import geojitLogo from "@/assets/geojit.jpg"
import news24Logo from "@/assets/twentyfournews.png"
import radioMangoLogo from "@/assets/radiomango.jpg"
import satellite from "@/assets/satellite3.png"

export default function Partners() {
  const partners = [
    { name: "KEYVALUE", type: "Platinum Partner", logo: keyvalueLogo, website: "https://www.keyvalue.systems/" },
    { name: "GEOJIT", type: "Platinum Partner", logo: geojitLogo, website: "https://www.geojit.com/" },
    { name: "NEWS 24", type: "Media Partner", logo: news24Logo, website: "https://www.twentyfournews.com/" },
    { name: "RADIO MANGO", type: "Happiness Partner", logo: radioMangoLogo, website: "https://www.radiomango.fm/home.html" },
  ]

  return (
    <section className="min-h-screen max-w-screen overflow-visible py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 z-20 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mechanismo mb-6 gradient-text" data-aos="fade-up">
            OUR PARTNERS
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-4 md:mx-56" data-aos="fade-up">
          {partners.map((partner, index) => (
            <a 
              key={index} 
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-slate-700 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 block"
            >
              <div className=" mx-auto mb-4 flex items-center justify-center" data-aos="fade-up">
                <Image 
                  src={partner.logo} 
                  alt={partner.name}
                  width={240}
                  height={100}
                  className="object-contain rounded-lg"
                />
              </div>

              <p className="text-xl font-semibold text-gray-400">{partner.type}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="absolute right-0 z-10 opacity-70" >
       <Image
         src={satellite}
         alt="Satellite"
         className="w-56 md:w-72 mt-6 md:mt-0 h-auto opacity-70"
         priority
         data-aos="fade-left"
       />
     </div>
    </section>
  )
}