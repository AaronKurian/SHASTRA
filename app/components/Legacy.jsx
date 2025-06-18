import Image from "next/image"
import meteor from "@/assets/meteor2.png"
import l1 from "@/assets/l1.png"
import l2 from "@/assets/l2.png"
import l3 from "@/assets/l3.png"
import l4 from "@/assets/l4.png"



export default function Legacy() {
  const legacyImages = [
    { image: l1, alt: 'Legacy 1' },
    { image: l3, alt: 'Legacy 3' },
    { image: l4, alt: 'Legacy 4' },
    { image: l2, alt: 'Legacy 2' },
    { image: l1, alt: 'Legacy 1' },
    { image: l3, alt: 'Legacy 3' },
    { image: l4, alt: 'Legacy 4' },
    { image: l1, alt: 'Legacy 1' },
    { image: l3, alt: 'Legacy 3' },
  ]

  return (
    <section className="min-h-screen max-w-screen overflow-visible py-20 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mechanismo mb-6 gradient-text" data-aos="fade-up">
            OUR LEGACY
          </h2>
        </div>
        
        <div className="bg-slate-800/30 border border-slate-400/20 rounded-xl p-4 md:p-12 card-glow mx-4 md:mx-32" data-aos="fade-up">
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8" data-aos="fade-up">
            For 24 years, SHASTRA has been more than just a techno-managerial fest, it has been 
            a catalyst for growth and a source of inspiration. SHASTRA has nurtured innovators, 
            bridged academia and industry, fostered collaboration, and made a positive impact 
            on the community. Building on this strong foundation, we strive to create an even 
            more impactful and enriching experience this SHASTRA 2025!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-12 max-w-xl mx-auto" data-aos="zoom-in">
            {legacyImages.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mx-auto w-24 h-24 mb-4">
                  <div 
                    className="w-full h-full card-glow rounded-full flex items-center justify-center p-2 overflow-hidden hover:scale-110 transition-transform duration-300 ease-in-out"
                    data-aos="zoom-in">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover rounded-full"
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Meteor image positioned at right bottom */}
      <div className="absolute right-0 z-10" data-aos="fade-left">
        <Image
          src={meteor}
          alt="Meteor"
          className="w-40 md:w-56 h-auto opacity-40"
          priority
        />
      </div>
    </section>
  )
}
