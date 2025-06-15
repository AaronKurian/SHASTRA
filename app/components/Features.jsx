export default function Features() {
  const features = [
    {
      title: 'Technical Competitions',
      description: 'Showcase your coding, robotics, and innovation skills',
      icon: '🚀'
    },
    {
      title: 'Workshops & Seminars',
      description: 'Learn from industry experts and tech leaders',
      icon: '🎓'
    },
    {
      title: 'Networking',
      description: 'Connect with like-minded tech enthusiasts',
      icon: '🤝'
    },
    {
      title: 'Innovation Showcase',
      description: 'Present your groundbreaking projects',
      icon: '💡'
    }
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 card-glow text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
