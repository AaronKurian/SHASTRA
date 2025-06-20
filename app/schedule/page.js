'use client'
import { useState } from 'react'
import ParticleBackground from '../Components/Particles'
import { masterEventData, formatEventForSchedule } from '../../helpers/eventsData'

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState('Day 1')
  const [filterBy, setFilterBy] = useState('ALL')

  const dayOptions = ['Day 1', 'Day 2', 'Day 3']
  const filterOptions = ['ALL', 'General', 'Competition', 'Talk', 'Conference', 'Workshop']

  const currentDayEvents = masterEventData
    .filter(event => event.schedule[selectedDay] !== null)
    .map(event => formatEventForSchedule(event, selectedDay))

  const filteredEvents = filterBy === 'ALL' 
    ? currentDayEvents 
    : currentDayEvents.filter(event => event.category === filterBy)

  return (
    <div className="min-h-screen bg-slate-950">
      
      <ParticleBackground />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold font-mechanismo text-center mb-12 gradient-text"
          data-aos="fade-up">
            SCHEDULE
          </h1>
          
          <div className="flex justify-center mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 md:p-6 mx-4 border border-slate-700" data-aos="fade-up">
              <div className="flex flex-wrap items-center justify-center gap-4" data-aos="fade-up">
                <div className="flex flex-wrap gap-2" data-aos="fade-up">
                  {dayOptions.map((day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`px-2 py-2 md:px-4 md:py-2 rounded-2xl font-medium md:font-semibold transition-all duration-300 text-xs md:text-base ${
                        selectedDay === day
                          ? 'bg-gray-100/20 border-2 border-purple-500 text-white'
                          : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                <div className="w-full sm:w-px h-px sm:h-8 bg-slate-600"></div>

                <div className="flex items-center gap-2">
                  <span className="text-gray-300 font-medium">Filter by:</span>
                  <select
                    value={filterBy}
                    onChange={(e) => setFilterBy(e.target.value)}
                    className="bg-slate-700 text-white border border-slate-600 rounded-xl px-2 py-2 md:px-3 md:py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  >
                    {filterOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mx-4 md:mx-8 lg:mx-24" data-aos="fade-up">
            <div className="rounded-xl p-4 md:p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4 md:mb-12 text-center">{selectedDay}</h2>
              <div className="hidden md:grid grid-cols-3 gap-4 font-bold text-lg md:text-2xl text-white">
                <div className="text-center" data-aos="fade-up">Time</div>
                <div className="text-center" data-aos="fade-up">Event Name</div>
                <div className="text-center" data-aos="fade-up">Venue</div>
              </div>
            </div>

            {filteredEvents.map((event, index) => (
              <div key={index} className="bg-gradient-to-r from-black/10 via-blue-300/10 to-black/10 backdrop-blur-sm border border-slate-700 rounded-xl p-4 md:p-6 hover:scale-105 transition-transform duration-300 shadow-sm shadow-white/20 hover:shadow-md hover:shadow-white/30" data-aos="fade-up">

                <div className="hidden md:grid grid-cols-3 gap-4 items-center">
                  <div className="text-center" data-aos="fade-up">
                    <span className="text-purple-400 font-semibold text-lg">{event.time}</span>
                  </div>
                  <div className="text-center" data-aos="fade-up">
                    <span className="text-white font-medium text-lg">{event.event}</span>
                    <div className="mt-2" data-aos="fade-up">
                      <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                        event.category === 'Workshop' ? 'bg-transparent border border-green-600 text-white0' :
                        event.category === 'Talk' ? 'bg-transparent border border-blue-600 text-white' :
                        event.category === 'Conference' ? 'bg-transparent border border-red-600 text-white' :
                        event.category === 'Competition' ? 'bg-transparent border border-yellow-600 text-white' :
                        'bg-transparent border border-purple-600 text-white'
                      }`}>
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-center" data-aos="fade-up">
                    <span className="text-gray-400 font-medium text-lg">{event.venue}</span>
                  </div>
                </div>

                <div className="md:hidden space-y-3" data-aos="fade-up">
                  <div className="text-center" data-aos="fade-up">
                    <span className="text-purple-400 font-semibold text-base">{event.time}</span>
                  </div>
                  <div className="text-center" data-aos="fade-up">
                    <h3 className="text-white font-medium text-base mb-2">{event.event}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      event.category === 'Workshop' ? 'bg-green-600 text-white' :
                      event.category === 'Talk' ? 'bg-blue-600 text-white' :
                      event.category === 'Conference' ? 'bg-red-600 text-white' :
                      event.category === 'Competition' ? 'bg-orange-600 text-white' :
                      'bg-purple-600 text-white'
                    }`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="text-center" data-aos="fade-up">
                    <span className="text-gray-400 font-medium text-sm">{event.venue}</span>
                  </div>
                </div>
              </div>
            ))}

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No events found for the selected filter on {selectedDay}.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
