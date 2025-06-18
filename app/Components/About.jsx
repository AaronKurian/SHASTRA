import Image from "next/image"
import meteor from "@/assets/meteor1.png"


export default function About() {
  return (
    <section className="min-h-screen max-w-screen py-20 bg-slate-950 overflow-visible relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mechanismo gradient-text" data-aos="fade-up">
            ABOUT
          </h2>
        </div>
        
        <div className="bg-slate-700/20 border border-slate-500 rounded-2xl p-6 md:p-12 md:mx-32 " data-aos="fade-up">
          <p className="text-md md:text-xl font-huninn leading-relaxed text-gray-300" data-aos="fade-up">
            SHASTRA, the premier techno-managerial festival of India, hosted by the students of 
            Govt. Model Engineering College, Kochi is a beacon of innovation and a celebration 
            of young minds. Since its inception in 2001, SHASTRA has always pushed the limits of 
            creativity as a dynamic platform for students to explore, innovate, and excel. 
            SHASTRA returns for a momentous 25th edition this SHASTRA 2024 and promises to be an 
            unforgettable journey. Join us for a constellation of events that includes workshops, 
            competitions, talks, and all kinds of fun.
          </p>
        </div>
      </div>
      
      <div className="absolute -left-12 z-10" data-aos="fade-right">
        <Image
          src={meteor}
          alt="Meteor"
          className="w-40 md:w-56 h-auto opacity-40"
          priority
        />
      </div>
    </section>
  )
}
