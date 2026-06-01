import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Otenga JNR Foundation"
          className="h-16 w-16 rounded-full object-cover" />
          <div className="flex flex-col">
            <span className = "text-green-800 font-bold text-sm leading-tight">
                OTENGA JNR
            </span>
            <span className="text-green-700 font-semibold text-sm leading-tight">
                FOUNDATION
            </span>
            <span>
                <span className="text-yellow-600 text-xs italic">
                    Educate. Empower. Sustain.
                </span>
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-green-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-green-600">About</Link></li>
          <li><Link to="/projects" className="hover:text-green-600">Projects</Link></li>
          <li><Link to="/donate" className="hover:text-green-600">Donate</Link></li>
        </ul>

        {/* Donate Button */}
        <Link to="/donate" className="hidden md:block bg-green-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-700">
          Donate Now
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-green-700 text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-4 pb-4 text-gray-700 font-medium">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-green-600">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-green-600">About</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-green-600">Projects</Link>
          <Link to="/donate" onClick={() => setIsOpen(false)} className="hover:text-green-600">Donate</Link>
          <Link to="/donate" onClick={() => setIsOpen(false)} className="bg-green-600 text-white text-center px-5 py-2 rounded-full font-semibold hover:bg-green-700">
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar