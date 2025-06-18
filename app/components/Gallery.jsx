import Image from "next/image"
import Link from "next/link"
import Marquee from "react-fast-marquee"
import g1 from "@/assets/g1.jpeg"
import g2 from "@/assets/g2.jpeg"
import g3 from "@/assets/g3.jpeg"
import g4 from "@/assets/g4.jpeg"
import satellite from "@/assets/satellite1.png"

export default function Gallery() {
  const galleryImages = [g1, g2, g3, g4, g1, g2, g3, g4] // Duplicate for seamless loop

  return (
    <section className="py-20 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-2 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mechanismo mb-6 gradient-text" data-aos="fade-up">
            GALLERY
          </h2>
        </div>
        
        <Marquee speed={70} gradient={false} pauseOnHover={true}>
          {galleryImages.map((image, index) => (
            <div key={index} className="border border-gray-500 rounded-xl overflow-hidden mx-3" data-aos="zoom-in">
              <div className="h-44 w-60 md:h-64 md:w-80" data-aos="zoom-in">
                <Image 
                  src={image} 
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                  width={320}
                  height={256}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
      {/* Satellite image positioned at left bottom and flipped vertically */}
      <div className="absolute -bottom-16 md:-bottom-32 left-0 md:left-4 z-10" data-aos="fade-right">
        <Image
          src={satellite}
          alt="Satellite"
          className="w-40 md:w-64 h-auto opacity-50 scale-x-[-1]"
          priority
        />
      </div>
    </section>
  )
}
