import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: '/hero1.jpg',
    title: 'Building Homes for Families',
    subtitle: 'Providing shelter and dignity to vulnerable families in Migori County'
  },
  {
    image: '/hero2.jpg',
    title: 'Educating the Next Generation',
    subtitle: 'Sponsoring children and supporting schools across Kitembe Village'
  },
  {
    image: '/hero3.jpg',
    title: 'Feeding Our Community',
    subtitle: 'Delivering food and relief to those who need it most'
  }
]

function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: "url(" + slide.image + ")" }}
      />

      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
        <p className="text-yellow-400 font-semibold text-lg mb-3 tracking-widest uppercase">
          Educate. Empower. Sustain.
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          {slide.title}
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          {slide.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/donate" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-full text-lg">
            Donate Now
          </Link>
          <Link to="/projects" className="border-2 border-white hover:bg-white hover:text-green-900 text-white font-bold px-8 py-4 rounded-full text-lg">
            See Our Work
          </Link>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={index === current ? "w-3 h-3 rounded-full bg-yellow-400" : "w-3 h-3 rounded-full bg-white opacity-50"}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero