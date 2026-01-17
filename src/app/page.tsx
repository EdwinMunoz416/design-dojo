// src/app/components/Hero.tsx
'use client'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-purple-800 via-pink-600 to-red-500 text-white py-20 px-6 sm:px-12 md:px-24 flex flex-col-reverse md:flex-row items-center">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          Get Your Game On at Dave & Buster's
        </h1>
        <p className="text-lg sm:text-xl mb-8 drop-shadow-md">
          The ultimate gaming and entertainment spot — where every night is a party.
        </p>
        <button className="bg-white text-purple-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          Book Your Spot
        </button>
      </div>
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80"
          alt="Vibrant arcade scene with young adults having fun"
          className="rounded-xl shadow-xl mx-auto max-w-full h-auto"
        />
      </div>
    </section>
  )
}


// src/app/components/Features.tsx
'use client'

const features = [
  {
    title: 'Arcade Games',
    description: 'Dive into dozens of the hottest arcade games with your friends.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m-7 3v4a4 4 0 004 4h6a4 4 0 004-4v-4m-6 4V9" />
      </svg>
    )
  },
  {
    title: 'Food & Drinks',
    description: 'Enjoy delicious bites and craft cocktails to keep the night going.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  },
  {
    title: 'Live Events',
    description: 'Catch live music, DJs, and special events every weekend.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 15h3" />
      </svg>
    )
  }
]

export function Features() {
  return (
    <section className="py-16 px-6 sm:px-12 md:px-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <h2 className="text-3xl font-extrabold text-center mb-12">What Makes Us the Vibe</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {features.map(({ title, description, icon }) => (
          <div key={title} className="bg-gray-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform duration-300">
            {icon}
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// src/app/page.tsx
import { Hero } from './components/Hero'
import { Features } from './components/Features'

export default function Home() {
  return (
    <main className="min-h-screen bg-black font-sans">
      <Hero />
      <Features />
    </main>
  )
}
