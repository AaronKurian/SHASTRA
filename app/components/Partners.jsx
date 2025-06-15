'use client'

export default function Partners() {
  const partners = [
    { name: "HFT", type: "Platinum Partner", color: "from-yellow-400 to-yellow-600" },
    { name: "TechCorp", type: "Gold Partner", color: "from-blue-400 to-blue-600" },
    { name: "InnoLab", type: "Media Partner", color: "from-purple-400 to-purple-600" },
    { name: "Future Inc", type: "Technology Partner", color: "from-green-400 to-green-600" },
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            OUR PARTNERS
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 card-glow text-center">
              <div className={`h-20 w-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${partner.color} flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">{partner.name.slice(0, 2)}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
              <p className="text-gray-400">{partner.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}