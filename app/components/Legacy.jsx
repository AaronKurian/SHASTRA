export default function Legacy() {
  const stats = [
    { label: 'Days of Innovation', value: '3', icon: '📅' },
    { label: 'Expected Participants', value: '2000+', icon: '👥' },
    { label: 'Competitions', value: '15+', icon: '🏆' },
    { label: 'Workshops', value: '10+', icon: '⚡' },
  ]

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            OUR LEGACY
          </h2>
        </div>
        
        <div className="bg-slate-900/50 rounded-2xl p-8 md:p-12 card-glow">
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
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
