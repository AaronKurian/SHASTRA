import Image from "next/image"

export default function Legacy() {
  const stats = [
    { label: 'Days of Innovation', value: '3', icon: '📅' },
    { label: 'Expected Participants', value: '2000+', icon: '👥' },
    { label: 'Competitions', value: '15+', icon: '🏆' },
    { label: 'Workshops', value: '10+', icon: '⚡' },
  ]

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            OUR LEGACY
          </h2>
        </div>
        
        <div className="bg-slate-800/30 border border-slate-400/20 rounded-xl p-4 md:p-12 card-glow mx-4 md:mx-32">
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
            For 24 years, SHASTRA has been more than just a techno-managerial fest, it has been 
            a catalyst for growth and a source of inspiration. SHASTRA has nurtured innovators, 
            bridged academia and industry, fostered collaboration, and made a positive impact 
            on the community. Building on this strong foundation, we strive to create an even 
            more impactful and enriching experience this SHASTRA 2024!
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="relative mx-auto w-32 h-32 mb-4">
                  <div 
                    className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
                    style={{
                      clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                    }}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                    </div>
                  </div>
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
