'use client'
import { useState } from 'react'
import Image from 'next/image'
import competition from '@/assets/competition.png'

export default function Competitions() {
  const [selectedFilter, setSelectedFilter] = useState('ALL')
  const [sortBy, setSortBy] = useState('name')

  const allCompetitions = [
    // Non Tech Competitions
    { title: "Cycle Rush", category: "Non Tech", image: competition, time: "10:00 AM", date: "Jan 24", prize: "₹5,000" },
    { title: "News Desk", category: "Non Tech", image: competition, time: "11:00 AM", date: "Jan 25", prize: "₹8,000" },
    { title: "Game Plan", category: "Non Tech", image: competition, time: "2:00 PM", date: "Jan 24", prize: "₹6,000" },
    { title: "Rhythm Riot", category: "Non Tech", image: competition, time: "3:00 PM", date: "Jan 25", prize: "₹7,000" },
    { title: "Fast Break", category: "Non Tech", image: competition, time: "4:00 PM", date: "Jan 26", prize: "₹5,500" },
    { title: "Vincere Negotium", category: "Non Tech", image: competition, time: "1:00 PM", date: "Jan 24", prize: "₹10,000" },
    { title: "Filmaura", category: "Non Tech", image: competition, time: "5:00 PM", date: "Jan 25", prize: "₹8,500" },
    { title: "Escape Room", category: "Non Tech", image: competition, time: "6:00 PM", date: "Jan 26", prize: "₹7,500" },
    { title: "RJ Hunt", category: "Non Tech", image: competition, time: "12:00 PM", date: "Jan 24", prize: "₹6,500" },
    { title: "Crime Scene Investigation", category: "Non Tech", image: competition, time: "7:00 PM", date: "Jan 25", prize: "₹9,000" },
    { title: "Treasure Hunt", category: "Non Tech", image: competition, time: "9:00 AM", date: "Jan 26", prize: "₹8,000" },

    // CS Tech Competitions
    { title: "NeuralNet Nexus", category: "CS Tech", image: competition, time: "10:30 AM", date: "Jan 24", prize: "₹25,000" },
    { title: "Binary Baton", category: "CS Tech", image: competition, time: "11:30 AM", date: "Jan 25", prize: "₹20,000" },
    { title: "Reverse Coding", category: "CS Tech", image: competition, time: "1:30 PM", date: "Jan 26", prize: "₹18,000" },
    { title: "Lord of Code", category: "CS Tech", image: competition, time: "2:30 PM", date: "Jan 24", prize: "₹30,000" },
    { title: "Code Crush", category: "CS Tech", image: competition, time: "3:30 PM", date: "Jan 25", prize: "₹22,000" },
    { title: "WebCraft", category: "CS Tech", image: competition, time: "4:30 PM", date: "Jan 26", prize: "₹15,000" },
    { title: "Codeum Reparo", category: "CS Tech", image: competition, time: "5:30 PM", date: "Jan 24", prize: "₹28,000" },

    // Gen Tech Competitions
    { title: "Reverso", category: "Gen Tech", image: competition, time: "9:30 AM", date: "Jan 25", prize: "₹12,000" },
    { title: "Lifeline", category: "Gen Tech", image: competition, time: "10:15 AM", date: "Jan 26", prize: "₹14,000" },
    { title: "abraCADabra", category: "Gen Tech", image: competition, time: "11:15 AM", date: "Jan 24", prize: "₹16,000" },
    { title: "Lumiere", category: "Gen Tech", image: competition, time: "12:15 PM", date: "Jan 25", prize: "₹13,000" },
    { title: "Wave Cloning", category: "Gen Tech", image: competition, time: "2:15 PM", date: "Jan 26", prize: "₹11,000" },
    { title: "RoboSoccer", category: "Gen Tech", image: competition, time: "3:15 PM", date: "Jan 24", prize: "₹20,000" },
    { title: "RoboRoute", category: "Gen Tech", image: competition, time: "4:15 PM", date: "Jan 25", prize: "₹18,000" },
    { title: "Defuse", category: "Gen Tech", image: competition, time: "5:15 PM", date: "Jan 26", prize: "₹15,000" },
  ]

  const filterOptions = ['ALL', 'CS Tech', 'Gen Tech', 'Non Tech']
  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'time', label: 'Time' },
    { value: 'prize', label: 'Prize' }
  ]

  const filteredCompetitions = selectedFilter === 'ALL' 
    ? allCompetitions 
    : allCompetitions.filter(comp => comp.category === selectedFilter)

  const sortedCompetitions = [...filteredCompetitions].sort((a, b) => {
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

  return (
    <div className="min-h-screen -mt-8 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          COMPETITIONS
        </h1>
        
        {/* Filter and Sort Controls */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-slate-700 w-full max-w-4xl">
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2 justify-center">
                {filterOptions.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-2 py-2 md:px-4 md:py-2 rounded-full font-medium md:font-semibold transition-all duration-300 text-xs md:text-base ${
                      selectedFilter === filter
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full sm:w-px h-px sm:h-8 bg-slate-600"></div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-gray-300 font-medium text-sm md:text-base">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-700 text-white border border-slate-600 rounded-lg px-2 py-1 md:px-3 md:py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-sm md:text-base"
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

        {/* Competitions Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mx-4 md:mx-24">
          {sortedCompetitions.map((comp, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-4 md:p-6 card-glow hover:scale-105 transition-transform duration-300 text-center w-72 md:w-80">
              {/* Competition Image */}
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-3 md:mb-4 rounded-lg overflow-hidden">
                <Image 
                  src={comp.image} 
                  alt={comp.title}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Category Badge */}
              <div className="mb-2 md:mb-3">
                <span className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold ${
                  comp.category === 'CS Tech' ? 'bg-green-600 text-white' :
                  comp.category === 'Gen Tech' ? 'bg-blue-600 text-white' :
                  'bg-purple-600 text-white'
                }`}>
                  {comp.category}
                </span>
              </div>
              
              {/* Competition Title */}
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">{comp.title}</h3>
              
              {/* Prize */}
              <div className="mb-2 md:mb-3">
                <span className="text-xl md:text-2xl font-bold text-green-400">{comp.prize}</span>
              </div>
              
              {/* Date and Time */}
              <div className="flex justify-center gap-3 md:gap-4 mb-3 md:mb-4 text-xs md:text-sm">
                <p className="text-cyan-400">{comp.date}</p>
                <p className="text-gray-400">{comp.time}</p>
              </div>
              
              {/* Register Button */}
              <button className="w-full md:w-[50%] bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 text-sm md:text-base rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors">
                Register Now
              </button>
            </div>
          ))}
        </div>

        {/* No Competitions Message */}
        {sortedCompetitions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No competitions found for the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}
