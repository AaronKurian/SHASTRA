'use client'
import { useState } from 'react'
import ParticleBackground from '../Components/Particles'
import { masterEventData } from '../../helpers/eventsData'

export default function Events() {
  const [selectedFilter, setSelectedFilter] = useState('ALL')
  const [sortBy, setSortBy] = useState('name')
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const allEvents = masterEventData
    .filter(event => event.category !== 'Competition')
    .map(event => {
      const day = Object.keys(event.schedule).find(day => event.schedule[day] !== null)
      return {
        title: event.title,
        category: event.category,
        description: event.description,
        time: event.schedule[day]?.split(' TO ')[0] || 'TBA',
        date: day === 'Day 1' ? 'Jan 25' : day === 'Day 2' ? 'Jan 26' : 'Jan 27',
        prize: event.prize
      }
    })

  const filterOptions = ['ALL', 'General', 'Talk', 'Conference', 'Workshop']
  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'time', label: 'Time' },
    { value: 'prize', label: 'Prize' }
  ]

  const filteredEvents = selectedFilter === 'ALL' 
    ? allEvents 
    : allEvents.filter(event => event.category === selectedFilter)

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title)
      case 'time':
        return a.time.localeCompare(b.time)
      case 'prize':
        return parseInt(a.prize.replace(/[₹,]/g, '')) - parseInt(b.prize.replace(/[₹,]/g, ''))
      default:
        return 0
    }
  })

  const openModal = (event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedEvent(null)
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-950">

      <ParticleBackground />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold font-mechanismo text-center mb-12 gradient-text"
          data-aos="fade-up">
            EVENTS
          </h1>
          
          <div className="flex justify-center mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 md:p-6 border border-slate-700 mx-4" data-aos="fade-up">
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4" data-aos="fade-up">
                <div className="flex flex-wrap gap-2 justify-center" data-aos="fade-up">
                  {filterOptions.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSelectedFilter(filter)}
                      className={`px-2 py-2 md:px-4 md:py-2 rounded-2xl font-medium md:font-semibold transition-all duration-300 text-xs md:text-base ${
                        selectedFilter === filter
                          ? 'bg-gray-100/20 border-2 border-purple-500 text-white'
                          : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                <div className="w-full sm:w-px h-px sm:h-8 bg-slate-600"></div>

                <div className="flex items-center gap-2">
                  <span className="text-gray-300 font-medium text-sm md:text-base">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-slate-700 text-white border border-slate-600 rounded-xl px-2 py-1 md:px-3 md:py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-sm md:text-base"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:gap-12 mx-4 md:mx-24 lg:mx-80" data-aos="fade-up">
            {sortedEvents.map((event, index) => (
              <div key={index} className="bg-gradient-to-b from-black/10 via-blue-300/10 to-black/10 backdrop-blur-sm border border-slate-700 rounded-xl p-4 md:p-6 md:px-8 hover:scale-105 transition-transform duration-300 shadow-sm shadow-white/20 hover:shadow-md hover:shadow-white/30"
              data-aos="fade-up">
                <div className="mb-4 md:mb-6 flex flex-row justify-between items-start gap-3">
                  <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-white flex-1" data-aos="fade-up">{event.title}</h3>
                  <span className={`px-3 py-1 md:px-4 md:py-2 rounded-xl text-sm md:text-base font-semibold flex-shrink-0 ${
                    event.category === 'Workshop' ? 'bg-transparent border border-green-600 text-white/70' :
                    event.category === 'Talk' ? 'bg-transparent border border-blue-600 text-white/70' :
                    event.category === 'Conference' ? 'bg-transparent border border-red-600 text-white/70' :
                    'bg-transparent border border-purple-600 text-white/70'
                  }`}>
                    {event.category}
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-6 mb-4 md:mb-6" data-aos="fade-up">
                  <p className="text-cyan-400 text-base md:text-lg font-medium">{event.date}</p>
                  <p className="text-gray-400 text-base md:text-lg">{event.time}</p>
                </div>
                
                <div className="flex justify-center md:-mb-4" data-aos="zoom-out">
                  <button 
                    onClick={() => openModal(event)}
                    className="w-8 h-8 bg-black/10 border border-blue-600 rounded-full flex items-center justify-center hover:border-blue-400 transition-colors hover:scale-110"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {isModalOpen && selectedEvent && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-slate-800/10 border border-slate-300/20 backdrop-blur-md rounded-2xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              data-aos="fade-up">
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-8 h-8 bg-transparent border border-slate-300/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                  data-aos="zoom-out"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="pr-8" data-aos="fade-up">
                  <div className="mb-6 flex flex-col sm:flex-row justify-between items-start gap-3">
                    <span className={`px-4 py-2 rounded-xl text-base font-semibold ${
                      selectedEvent.category === 'Workshop' ? 'bg-transparent border-2 border-green-600 text-white/70' :
                      selectedEvent.category === 'Talk' ? 'bg-transparent border-2 border-blue-600 text-white/70' :
                      selectedEvent.category === 'Conference' ? 'bg-transparent border-2 border-red-600 text-white/70' :
                      'bg-transparent border-2 border-purple-600 text-white/70'
                    }`}>
                      {selectedEvent.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-6" data-aos="fade-up">{selectedEvent.title}</h2>
                  
                  <div className="flex flex-col sm:flex-row gap-6 mb-4" data-aos="fade-up">
                    <p className="text-cyan-400 text-lg font-medium">{selectedEvent.date}</p>
                    <p className="text-gray-400 text-lg">{selectedEvent.time}</p>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-green-400 font-bold text-xl" data-aos="fade-up">Prize: {selectedEvent.prize}</span>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed" data-aos="fade-up">{selectedEvent.description}</p>
                </div>
              </div>
            </div>
          )}

          {sortedEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No events found for the selected filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
