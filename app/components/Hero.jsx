'use client'

export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="gradient-text">SHASTRA</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-cyan-400">
          2024
        </h2>
        <p className="text-xl md:text-2xl mb-6 text-gray-300">
          24, 25, 26 January
        </p>
        <p className="text-lg md:text-xl mb-8 text-gray-400">
          Govt. Model Engineering College
        </p>
        <div className="space-y-4">
          <p className="text-xl md:text-2xl font-semibold text-white">
            Ready for liftoff?
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            A galaxy of innovations, excitement and wonder awaits.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Explore Events
          </button>
        </div>
      </div>
    </section>
  )
}
