'use client'
import { useState } from 'react'
import ParticleBackground from '../components/Particles'


export default function Events() {
  const [selectedFilter, setSelectedFilter] = useState('ALL')
  const [sortBy, setSortBy] = useState('name')
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const allEvents = [
    // General Events
    { title: "Rage Room", category: "General", description: "Welcome to the Rage Room, where stress meets release in the most exhilarating way possible! We provide a safe and controlled environment for you to unleash pent-up emotions and frustrations by smashing and breaking items like plates, glass bottles, and old electronics, complete with dramatic lighting, themed setups and customizable music playlists to elevate your session. With safety gear including helmets, gloves, and goggles, you can enjoy the experience without any worry. Whether solo, duo, or group sessions, the Rage Room is an exciting way to de-stress and let your worries out.", time: "10:00 AM", date: "Jan 24", prize: "₹200" },
    { title: "Sparsham", category: "General", description: "Sparsham is a social initiative as a part of Excel 2024 that focuses on bringing students from special schools into the vibrant atmosphere of the fest. The program is designed to create a day of joy and togetherness through activities such as open mic sessions, fun games, visiting stalls, and participating in various programs organized by NSS volunteers. The objective of Sparsham 2.0 is to provide these students with a memorable experience, fostering curiosity and encouraging them to explore and enjoy the wonders of the world.", time: "11:00 AM", date: "Jan 25", prize: "₹150" },
    { title: "Med Expo", category: "General", description: "Med Expo exhibits the wide realms of the Biomedical Engineering field. The expo contains the following activities to recharge your pulse: A real-time simulation of a NICU and critical care unit will be showcased, offering viewers an inside look at the equipment and technology vital for advanced patient care. A maze game in the theme of brain navigating through a series of complex pathways designed to resemble the brain regions. Players would need to solve puzzles and small memory based games which could add fun and help reinforce the brain.", time: "2:00 PM", date: "Jan 24", prize: "₹300" },
    { title: "Fun Zone", category: "General", description: "Fun Zone is an engaging outdoor event featuring interactive games and activities designed to inspire connections through fun and friendly competitions. Set in a carefully curated space with vibrant props and a welcoming ambiance. The event is open to all, with no registration fee, ensuring accessibility for participants of all backgrounds and skill levels. The activities are crafted to encourage interaction and enjoyment in a vibrant environment. Three games will be held at Casa and three at the Amphitheatre, providing an ideal setting for participants to explore their skills, strategy, and teamwork. Whether experienced or new to these activities, attendees can look forward to days filled with active engagement and camaraderie.", time: "9:00 AM", date: "Jan 26", prize: "₹100" },
    { title: "Game Zone", category: "General", description: "Get ready to level up your gaming skills at Game Zone! Face off against your friends in a series of games including Valorant, Virtual Reality games and eFootball. Push limits, make memories, and have a blast with your fellow gamers.", time: "3:00 PM", date: "Jan 25", prize: "₹350" },
    { title: "Laser War", category: "General", description: "Don your vests, flex your aims, step into the neon-lit arena and let out the fun and laughter! Get ready to hide, aim and dodge laser shots as you conquer the excitement of this very colourful segment of Excel 2024. Team up with your amazing battle-mates and craft your moves to overcome the obstacles and strategic zones that cluster the arena. Arriving with a guarantee of pure pleasure and amusement, Laser War has neither winners nor losers — just high-end energy, friendship and team-spirit.", time: "4:00 PM", date: "Jan 24", prize: "₹250" },
    { title: "TechTyro 2.0", category: "General", description: "TechTyro 2.0 is a social initiative event as part of Excel 2024, that focuses on teaching school students about the latest developments in the field of engineering and coding. The program aims to reach out to schools and teach students from grade 8th about AI & ML technologies and their applications. The objective of TechTyro 2.0 is to increase the technical proficiency of students and provide them with practical training to ignite their interest in engineering.", time: "1:00 PM", date: "Jan 26", prize: "₹180" },
    { title: "Open Mic", category: "General", description: "Open Mic is a non-technical event conducted as part of Excel 2024, offering participants the opportunity to showcase their skills across various realms, including singing, dancing, storytelling, stand-up comedy or any hidden talent that celebrates self-expression in all its forms. Scheduled from January 24 to 26 during the fest, participants are assigned class-wise slots to perform for 2 to 7 minutes, allowing them to take the spotlight and let their creativity shine.", time: "6:00 PM", date: "Jan 25", prize: "₹220" },
    { title: "Go Karting", category: "General", description: "Rev up your engines and dive into the ultimate go-karting thrill ride! Imagine the wind in your face as you navigate sharp turns, accelerate down straightaways, and battle for the best lap time. Choose between a quick 3-lap sprint or go all in with a pulse-pounding 5-lap showdown—it's your race, your rules. Whether you're a motorsport pro or a first-time racer, this high-speed adventure offers non-stop action in a safe, dynamic setting. Feel the adrenaline surge as you chase the checkered flag and create memories that will leave you craving more. The track awaits—are you ready to own it?", time: "5:00 PM", date: "Jan 24", prize: "₹400" },
    { title: "Human Snadder", category: "General", description: "Human Snadder is a twist on the classic game of snakes and ladders. Players can test their luck by stumbling through a life sized board containing squares with lucky rolls, speed zones and challenge squares making it more exciting and fun. The objective is to be the first one to reach the finish point.", time: "12:00 PM", date: "Jan 26", prize: "₹170" },

    // Talk Events
    { title: "Unmasked", category: "Talk", description: "Join us for Unmasked, where the intriguing world of mentalism and hypnosis comes to life. Featuring Mentalist Shamil Muchukunnu, a professional entertainer from Kerala with an impressive Instagram following of over 183k, this event promises to captivate and amaze. Known for his remarkable skills in mind reading and psychological illusions, Shamil blends entertainment with the art of suggestion to create unforgettable performances. Don't miss this opportunity to witness magic and mentalism like never before.", time: "7:00 PM", date: "Jan 24", prize: "₹380" },
    { title: ".ISSUE!", category: "Talk", description: ".ISSUE! is a platform for informed dialogue, bringing together diverse perspectives to discuss critical social and political issues. Join us for engaging conversations with leading voices, including Adv. Abin Varkey (Congress), Adv. S Suresh (BJP), P M Arsho (LDF), social critic Sunny M Kapicadu, activist Rahul Easwar, and moderated by Christina Cherian from 24 News. Share your voice, listen to others, and let's work together to build a better future.", time: "8:00 PM", date: "Jan 25", prize: "₹400" },
    { title: "RJ Conclave", category: "Talk", description: "A vibrant and engaging event featuring 2 renowned RJs, who will take center stage to share their fascinating stories and experiences. This interactive session offers a behind-the-scenes glimpse into the captivating world of radio. From hilarious on-air moments and the evolution of the industry to handling unexpected situations and forging meaningful connections with listeners, the RJs will explore a range of intriguing topics designed to entertain and inspire. Each RJ will spotlight a topic they are passionate about—whether it's navigating live show surprises, cultivating a bond with their audience, or building a successful career in radio.", time: "7:30 PM", date: "Jan 26", prize: "₹350" },
    { title: "Digital Roads", category: "Talk", description: "Mr Suresh Kumar K, Managing Director & Founder of Skybertech Pvt Ltd., an expert in his field, is all geared up to give us ideas to ponder about the future of a dynamic, ever-evolving and exciting industry. The IT & Business sector employs almost five million people in India alone. And this industry is only projected to keep growing further! Find out more on how to leverage your business, your company or your career using the power of information technology in this exciting session.", time: "3:30 PM", date: "Jan 24", prize: "₹390" },
    { title: "Spotlights", category: "Talk", description: "Join us for an enriching panel discussion with the talented artists that are Sachin Warrier, Vinayak Sasikumar and Malayali Monkeys as they explore the powerful connection between music and storytelling. Through personal anecdotes and insightful discussions, they'll share how melodies and lyrics convey emotions, narrate journeys, and immerse listeners in unique experiences. Discover the art of storytelling through music and gain a deeper appreciation for its emotional and cultural impact.", time: "6:30 PM", date: "Jan 25", prize: "₹320" },

    // Conference Events
    { title: "Capital Connect", category: "Conference", description: "Join us for Capital Connect, an insightful session on the \"Importance of Financial Planning in Daily Life & Achieving Financial Freedom with Your Salary\" by Nayanraj, Founder & CEO of Dream Wealth Edu. This session will cover practical strategies for managing finances, starting your financial planning journey, and achieving long-term financial freedom. With actionable advice and an interactive Q&A, participants will gain valuable insights to make smarter financial decisions in everyday life.", time: "2:30 PM", date: "Jan 25", prize: "₹400" },

    // Workshop Events
    { title: "PCB Design Workshop", category: "Workshop", description: "Master the art of PCB design with our comprehensive PCB Design Workshop. This hands-on session introduces participants to the fundamentals of printed circuit boards, covering essential topics like component basics, layout design, and simulation using industry-standard software. Acquire practical knowledge about prototyping techniques and troubleshooting methods. A must-attend for all electronics enthusiasts!", time: "10:30 AM", date: "Jan 24", prize: "₹280" },
    { title: "IOT and Embedded Systems Workshop", category: "Workshop", description: "When executed correctly, the combination of software and hardware provides the foundation for a multitude of crucial functions that drive modern technology. This intricate relationship centers around microcontroller or microprocessor-based systems, the components forming the backbone of countless devices we rely on daily. The (Internet of Things) IoT refers to a vast network of physical objects embedded with sensors, software, and other connective technologies, and with its expansion comes the necessity of addressing its associated security challenges.", time: "11:30 AM", date: "Jan 25", prize: "₹300" },
    { title: "UAV Technology Workshop", category: "Workshop", description: "The UAV Technology Workshop is a comprehensive introduction to unmanned aerial vehicles (UAVs). This workshop provides an in-depth understanding of drone history, component functionality, and the software ecosystem, including hands-on experience with simulation tools like ArduPilot. Participants will gain practical insights into drone navigation and explore the potential of UAVs in future applications.", time: "9:30 AM", date: "Jan 26", prize: "₹360" },
    { title: "Computer Vision and Robotics Workshop", category: "Workshop", description: "The Computer Vision and Robotics Workshop delves into the applications of computer vision in robotics. Participants will explore foundational concepts such as image processing, vision-based navigation, and object recognition. The workshop emphasizes practical applications, emerging trends, and real-world challenges, equipping attendees with the knowledge to contribute to advancements in robotics.", time: "1:30 PM", date: "Jan 24", prize: "₹340" },
    { title: "Space Robotics Workshop", category: "Workshop", description: "The Space Robotics Workshop provides a unique opportunity for participants to delve into the intersection of robotics and space exploration. This hands-on session covers key advancements in space technology, fundamental robotics principles for space applications, and cutting-edge innovations shaping the future. Through engaging discussions, practical case studies, and an exploration of artificial intelligence in astronomy, the workshop equips attendees with the knowledge and skills to tackle real-world challenges in space robotics.", time: "4:30 PM", date: "Jan 26", prize: "₹380" }
  ]

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
    <div className="min-h-screen pt-2 bg-slate-950">
      {/* Particle Background */}
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          EVENTS
        </h1>
        
        {/* Filter and Sort Controls */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 md:p-6 border border-slate-700 mx-4">
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2 justify-center">
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

              {/* Divider */}
              <div className="w-full sm:w-px h-px sm:h-8 bg-slate-600"></div>

              {/* Sort Dropdown */}
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

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 mx-4 md:mx-24 lg:mx-80">
          {sortedEvents.map((event, index) => (
            <div key={index} className="bg-gradient-to-b from-black/10 via-blue-300/10 to-black/10 backdrop-blur-md border border-slate-700 rounded-xl p-4 md:p-6 md:px-8 hover:scale-105 transition-transform duration-300 shadow-sm shadow-white/20 hover:shadow-md hover:shadow-white/30">
              <div className="mb-4 md:mb-6 flex flex-row justify-between items-start gap-3">
                <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-white flex-1">{event.title}</h3>
                <span className={`px-3 py-1 md:px-4 md:py-2 rounded-xl text-sm md:text-base font-semibold flex-shrink-0 ${
                  event.category === 'Workshop' ? 'bg-transparent border border-green-600 text-white/70' :
                  event.category === 'Talk' ? 'bg-transparent border border-blue-600 text-white/70' :
                  event.category === 'Conference' ? 'bg-transparent border border-red-600 text-white/70' :
                  'bg-transparent border border-purple-600 text-white/70'
                }`}>
                  {event.category}
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-6 mb-4 md:mb-6">
                <p className="text-cyan-400 text-base md:text-lg font-medium">{event.date}</p>
                <p className="text-gray-400 text-base md:text-lg">{event.time}</p>
              </div>
              
              {/* Circular Down Arrow Button */}
              <div className="flex justify-center md:-mb-4">
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

        {/* Modal Popup */}
        {isModalOpen && selectedEvent && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800 rounded-2xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="pr-8">
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
                
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">{selectedEvent.title}</h2>
                
                <div className="flex flex-col sm:flex-row gap-6 mb-4">
                  <p className="text-cyan-400 text-lg font-medium">{selectedEvent.date}</p>
                  <p className="text-gray-400 text-lg">{selectedEvent.time}</p>
                </div>
                
                <div className="mb-6">
                  <span className="text-green-400 font-bold text-xl">Prize: {selectedEvent.prize}</span>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed">{selectedEvent.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* No Events Message */}
        {sortedEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No events found for the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}
