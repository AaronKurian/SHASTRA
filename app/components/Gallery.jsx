export default function Gallery() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            GALLERY
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-slate-900 rounded-xl overflow-hidden card-glow">
              <div className="h-64 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-semibold text-2xl">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
