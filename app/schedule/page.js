'use client'
import { useState } from 'react'
import ParticleBackground from '../components/Particles'


export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState('Day 1')
  const [filterBy, setFilterBy] = useState('ALL')

  const allSchedule = {
    "Day 1": [
      { time: "9:30 AM TO 10:30 AM", event: "REVERSE CODING - PRELIMS", venue: "COMPUTER LAB 2", category: "Competition" },
      { time: "9:30 AM TO 4:30 PM", event: "LUMIERE", venue: "ANALOG/POWER ELECTRONICS LAB", category: "Competition" },
      { time: "9:30 AM TO 4:30 PM", event: "DEFUSE", venue: "410, 409, MICROPROCESSOR LAB", category: "Competition" },
      { time: "9:30 AM TO 4:30 PM", event: "ROBOSOCCER", venue: "AMPHITHEATRE", category: "Competition" },
      { time: "9:30 AM TO 4:30 PM", event: "MED EXPO", venue: "311, 312, 314, PROJECT LAB", category: "General" },
      { time: "9:30 AM TO 4:30 PM", event: "GO KARTING", venue: "COLLEGE GROUND", category: "General" },
      { time: "9:30 AM TO 3:30 PM", event: "SPARSHAM", venue: "201", category: "General" },
      { time: "9:30 AM TO 12:30 PM", event: "UAV TECHNOLOGY WORKSHOP", venue: "MEDIA HALL", category: "Workshop" },
      { time: "9:30 AM TO 10:00 AM", event: "ESCAPE ROOM", venue: "509,510,511", category: "General" },
      { time: "10:00 AM TO 12:30 PM", event: "SPOTLIGHTS", venue: "INTERNAL AUDITORIUM", category: "Talk" },
      { time: "10:00 AM TO 4:00 PM", event: "GAME ZONE", venue: "310", category: "General" },
      { time: "10:00 AM TO 4:00 PM", event: "OPEN MIC", venue: "ELGA", category: "General" },
      { time: "10:00 AM TO 4:00 PM", event: "FUN ZONE", venue: "AMPHITHEATRE", category: "General" },
      { time: "10:00 AM TO 4:00 PM", event: "HUMAN SNADDER", venue: "AMPHITHEATRE", category: "General" },
      { time: "10:00 AM TO 4:00 PM", event: "BMA EVENT", venue: "314", category: "General" },
      { time: "10:00 AM TO 4:00 PM", event: "TBT EVENT", venue: "515", category: "General" },
      { time: "10:00 AM TO 4:00 PM", event: "RAGE ROOM", venue: "309", category: "General" },
      { time: "10:00 AM TO 4:00 PM", event: "LASER WAR", venue: "VOLLEYBALL COURT", category: "General" },
      { time: "10:30AM TO 11:30 AM", event: "BINARY BATON - PRELIMS", venue: "COMPUTER LAB 1", category: "Competition" },
      { time: "10:30 AM TO 11:00 AM", event: "TREASURE HUNT", venue: "509,510,511", category: "General" },
      { time: "12:00 PM TO 12:30 PM", event: "CSI", venue: "509,510,511", category: "Competition" },
      { time: "1:30PM TO 4:30PM", event: "BINARY BATON - FINALS", venue: "COMPUTER LAB 1", category: "Competition" },
      { time: "1:30 PM TO 3:30 PM", event: "UNMASKED", venue: "INTERNAL AUDITORIUM", category: "Talk" },
      { time: "1:30 PM TO 3:30 PM", event: "COMPUTER SYSTEM VISION AND ROBOTICS WORKSHOP", venue: "SDPK HALL", category: "Workshop" },
      { time: "2:00 PM TO 3:30 PM", event: "REVERSE CODING - FINALS", venue: "COMPUTER LAB 2", category: "Competition" },
    ],
    "Day 2": [
      { time: "9:00 AM TO 1:30 PM", event: "MECLABS", venue: "SDPK HALL", category: "General" },
      { time: "9:30 AM TO 1:30 PM", event: "WEBCRAFT", venue: "COMPUTER LAB 2", category: "Competition" },
      { time: "9:30 AM TO 11:30 AM", event: "LORD OF CODE - PRELIMS", venue: "COMPUTER LAB 1", category: "Competition" },
      { time: "9:30 AM TO 1:30 PM", event: "ABRACADABRA", venue: "AMPHITHEATRE", category: "Competition" },
      { time: "9:30 AM TO 4:00 PM", event: "WAVE CLONING", venue: "CIRCUITS LAB, TEST LAB, 510, 509", category: "Competition" },
      { time: "9:30 AM TO 4:00 PM", event: "MED EXPO", venue: "311, 312, 314", category: "General" },
      { time: "9:30 AM TO 4:00 PM", event: "GO KARTING", venue: "COLLEGE GROUND", category: "General" },
      { time: "9:30 AM TO 12:30 PM", event: "DIGITAL ROADS", venue: "INTERNAL AUDITORIUM", category: "Talk" },
      { time: "9:30 AM TO 12:30 PM", event: "NEWS DESK", venue: "CCF HALL", category: "Competition" },
      { time: "9:30 AM TO 4:00 PM", event: "ESCAPE ROOM", venue: "209", category: "General" },
      { time: "FULL DAY", event: "TREASURE HUNT", venue: "KOCHI", category: "General" },
      { time: "9:30 AM TO 12:30 PM", event: "OPEN MIC", venue: "ELGA", category: "General" },
      { time: "10:00 AM TO 12:30 PM", event: "IOT AND EMBEDDED SYSTEMS WORKSHOP", venue: "MEDIA HALL", category: "Workshop" },
      { time: "10:00 AM TO 4:00 PM", event: "VINCERE NEGOTIUM", venue: "511", category: "Competition" },
      { time: "10:00 AM TO 4:00 PM", event: "GAME ZONE", venue: "310", category: "General" },
      { time: "10:00 AM TO 4:00 PM", event: "HUMAN SNADDER", venue: "AMPHITHEATRE", category: "General" },
      { time: "10:00 AM TO 4:00 PM", event: "FUN ZONE", venue: "AMPHITHEATRE", category: "General" },
      { time: "10:00 AM TO 4:00 PM", event: "BMA EVENT", venue: "314", category: "General" },
      { time: "10:00 AM TO 4:00 PM", event: "TBT EVENT", venue: "515", category: "General" },
      { time: "10:00 AM TO 4:00 PM", event: "CSI", venue: "COLLEGE", category: "Competition" },
      { time: "10:00 AM TO 4:00 PM", event: "RAGE ROOM", venue: "309", category: "General" },
      { time: "10:00 AM TO 4:00 PM", event: "3'S BASKETBALL", venue: "BASKETBALL COURT", category: "General" },
      { time: "10:00 AM TO 4:00 PM", event: "LASER WAR", venue: "VOLLEYBALL COURT", category: "General" },
      { time: "1:30 PM TO 4:00 PM", event: "LORD OF CODE - FINALS", venue: "COMPUTER LAB 1", category: "Competition" },
      { time: "1:30 PM TO 4:00 PM", event: ".ISSUE!", venue: "INTERNAL AUDITORIUM", category: "Talk" },
      { time: "1:30 PM TO 4:00 PM", event: "FILMAURA", venue: "MEDIA HALL", category: "Competition" },
      { time: "1:30 PM TO 4:00 PM", event: "RHYTHM RIOT", venue: "ELGA", category: "Competition" },
      { time: "2:00 PM TO 4:00 PM", event: "PCB DESIGN WORKSHOP", venue: "SDPK HALL", category: "Workshop" },
    ],
    "Day 3": [
      { time: "9:30 AM TO 3:30 PM", event: "CODE CRUSH", venue: "COMPUTER LAB 1", category: "Competition" },
      { time: "9:30 AM TO 2:30 PM", event: "CODEUM REPARO", venue: "COMPUTER LAB 2", category: "Competition" },
      { time: "9:30 AM TO 4:00 PM", event: "REVERSO", venue: "311,312", category: "Competition" },
      { time: "9:30 AM TO 4:00 PM", event: "ROBOROUTE", venue: "NEW BLOCK ENTRANCE", category: "Competition" },
      { time: "9:30 AM TO 4:00 PM", event: "GO KARTING", venue: "COLLEGE GROUND", category: "General" },
      { time: "9:30 AM TO 12:30 PM", event: "RJ CONCLAVE", venue: "INTERNAL AUDITORIUM", category: "Talk" },
      { time: "9:30 AM TO 12:30 PM", event: "INNOQUEST", venue: "CCF HALL", category: "General" },
      { time: "9:30 AM TO 12:30 PM", event: "SPACE ROBOTICS WORKSHOP", venue: "MEDIA HALL", category: "Workshop" },
      { time: "9:30 AM TO 10:00 AM", event: "ESCAPE ROOM", venue: "209", category: "General" },
      { time: "10:00 AM TO 4:00 PM", event: "GAME PLAN", venue: "315", category: "Competition" },
      { time: "10:00 AM TO 4:00 PM", event: "OPEN MIC", venue: "ELGA", category: "General" },
      { time: "10:00 AM TO 4:00 PM", event: "FUN ZONE", venue: "AMPHITHEATRE", category: "General" },
      { time: "10:00 AM TO 4:00 PM", event: "HUMAN SNADDER", venue: "AMPHITHEATRE", category: "General" },
      { time: "10:00 AM TO 4:00 PM", event: "TBT EVENT", venue: "515", category: "General" },
      { time: "10:00 AM TO 4:00 PM", event: "CYCLE RUSH", venue: "VOLLEYBALL COURT", category: "Competition" },
      { time: "10:30 PM TO 4:00 PM", event: "LIFELINE", venue: "401, MEDICAL SYSTEMS LAB", category: "Competition" },
      { time: "1:30 PM TO 3:30 PM", event: "FINANCE CONFERENCE", venue: "INTERNAL AUDITORIUM", category: "Conference" },
    ]
  }

  const dayOptions = ['Day 1', 'Day 2', 'Day 3']
  const filterOptions = ['ALL', 'General', 'Competition', 'Talk', 'Conference', 'Workshop']

  const currentDayEvents = allSchedule[selectedDay] || []
  const filteredEvents = filterBy === 'ALL' 
    ? currentDayEvents 
    : currentDayEvents.filter(event => event.category === filterBy)

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Schedule Container */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          SCHEDULE
        </h1>
        
        {/* Day and Filter Controls */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 md:p-6 mx-4 border border-slate-700">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* Day Selection */}
              <div className="flex flex-wrap gap-2">
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

              {/* Divider */}
              <div className="w-full sm:w-px h-px sm:h-8 bg-slate-600"></div>

              {/* Filter Dropdown */}
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

        {/* Schedule Table */}
        <div className="grid grid-cols-1 gap-4 mx-4 md:mx-8 lg:mx-24">
          {/* Header */}
          <div className="rounded-xl p-4 md:p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4 md:mb-12 text-center">{selectedDay}</h2>
            <div className="hidden md:grid grid-cols-3 gap-4 font-bold text-lg text-white">
              <div className="text-center">Time</div>
              <div className="text-center">Event Name</div>
              <div className="text-center">Venue</div>
            </div>
          </div>

          {/* Events */}
          {filteredEvents.map((event, index) => (
            <div key={index} className="bg-gradient-to-r from-black/10 via-blue-300/10 to-black/10 backdrop-blur-md border border-slate-700 rounded-xl p-4 md:p-6 hover:scale-105 transition-transform duration-300 shadow-sm shadow-white/20 hover:shadow-md hover:shadow-white/30">
              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-3 gap-4 items-center">
                <div className="text-center">
                  <span className="text-purple-400 font-semibold text-lg">{event.time}</span>
                </div>
                <div className="text-center">
                  <span className="text-white font-medium text-lg">{event.event}</span>
                  <div className="mt-2">
                    <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                      event.category === 'Workshop' ? 'bg-transparent border border-green-600 text-white/70' :
                      event.category === 'Talk' ? 'bg-transparent border border-blue-600 text-white/70' :
                      event.category === 'Conference' ? 'bg-transparent border border-red-600 text-white/70' :
                      event.category === 'Competition' ? 'bg-transparent border border-orange-600 text-white/70' :
                      'bg-transparent border border-purple-600 text-white/70'
                    }`}>
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-gray-400 font-medium text-lg">{event.venue}</span>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden space-y-3">
                <div className="text-center">
                  <span className="text-purple-400 font-semibold text-base">{event.time}</span>
                </div>
                <div className="text-center">
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
                <div className="text-center">
                  <span className="text-gray-400 font-medium text-sm">{event.venue}</span>
                </div>
              </div>
            </div>
          ))}

          {/* No Events Message */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No events found for the selected filter on {selectedDay}.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
