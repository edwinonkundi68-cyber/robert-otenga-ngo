import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import { MdEmail, MdPhone } from 'react-icons/md'

function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Column 1 - Logo and Mission */}
        <div className="flex flex-col items-start gap-3">
          <img src="/logo.jpg" alt="Otenga JNR Foundation" className="h-16 w-16 rounded-full object-cover" />
          <h3 className="font-bold text-lg">OTENGA JNR FOUNDATION</h3>
          <p className="text-green-200 text-sm">
            Educating, empowering, and sustaining communities across Migori County, Kenya through housing, education, and relief.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-green-200">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-white">Our Projects</Link></li>
            <li><Link to="/donate" className="hover:text-white">Donate</Link></li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h4 className="font-bold text-lg mb-4">Contact Us</h4>
          <div className="flex flex-col gap-3 text-green-200 text-sm">
            <div className="flex items-center gap-2">
              <MdEmail className="text-yellow-400 text-lg" />
              <span>otengajnr@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MdPhone className="text-yellow-400 text-lg" />
              <span>+254 724052665</span>
            </div>
            <div className="flex gap-4 mt-3 text-2xl">
                <a href="https://www.facebook.com/61552235871884/" target="_blank" rel="noreferrer" className="hover:text-yellow-400">
                    <FaFacebook />
                </a>
                <a href="https://www.instagram.com/otenga_jnr_foundation?igsh=MW16MXZnemoydXphMA==" target="_blank" rel="noreferrer" className="hover:text-yellow-400">
                    <FaInstagram />
                </a>
                <a href="https://youtube.com/@otengajnr?si=9FARwSPOe9ezFNXG" target="_blank" rel="noreferrer" className="hover:text-yellow-400">
                    <FaYoutube />
                </a>
                <a href="https://wa.me/254724052665" target="_blank" rel="noreferrer" className="hover:text-yellow-400">
                    <FaWhatsapp />
                </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-600 text-center py-4 text-green-300 text-sm">
        &copy; 2026 Otenga JNR Foundation. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer