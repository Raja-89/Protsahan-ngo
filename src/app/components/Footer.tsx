import { Mail, MapPin, Phone, Heart, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#181616] text-white relative overflow-hidden isolate before:absolute before:inset-0 before:bg-[#181616] before:z-0 before:pointer-events-none">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* About Section */}
          <div className="text-center sm:text-left">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4 justify-center sm:justify-start">
              <img
                src="/protsahan-logo.png"
                alt="Protsahan logo"
                className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.endsWith('protsahan-logo.svg')) {
                    target.src = '/protsahan-logo.svg';
                  }
                }}
              />
              <h3 className="text-lg sm:text-xl font-bold">Protsahan</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">
              Empowering children through free education since October 6, 2013. 
              Transforming lives in Gejha Village, Noida.
            </p>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-300 justify-center sm:justify-start">
              <Heart className="text-[#d62828] flex-shrink-0" size={16} />
              <span>Making education accessible for all</span>
            </div>
            <p className="text-gray-400 mt-3 sm:mt-4 text-xs">
              Crafted with care by Raja Rathour
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 text-[#d62828] font-semibold">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link to="/" className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                  About Protsahan
                </Link>
              </li>
              <li>
                <Link to="/students" className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                  Students
                </Link>
              </li>
              <li>
                <Link to="/timeline" className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                  Timeline
                </Link>
              </li>
              <li className="text-xs sm:text-sm text-gray-300 italic">Trustee: Abhay Kumar Singh</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 text-[#d62828] font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2 sm:space-x-3 justify-center sm:justify-start">
                <MapPin size={16} className="text-[#9bb54c] mt-0.5 flex-shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/HSPAseMczUxgEqHU7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Gejha Village, Noida, India
                </a>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3 justify-center sm:justify-start">
                <Phone size={16} className="text-[#9bb54c] flex-shrink-0" />
                <a 
                  href="tel:+919999538269" 
                  className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
                >
                  +91 99995 38269
                </a>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3 justify-center sm:justify-start">
                <Mail size={16} className="text-[#9bb54c] flex-shrink-0" />
                <a 
                  href="mailto:protsahan.ekpathshala@gmail.com" 
                  className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3 justify-center sm:justify-start">
                <Instagram size={16} className="text-[#9bb54c] flex-shrink-0" />
                <a
                  href="https://www.instagram.com/protsahan.ekpathsala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3 justify-center sm:justify-start">
                <Facebook size={16} className="text-[#9bb54c] flex-shrink-0" />
                <a
                  href="https://www.facebook.com/protsahangejha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2a2626] mt-6 sm:mt-8 lg:mt-8 pt-6 sm:pt-8 lg:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Protsahan. All rights reserved.</p>
          <p className="mt-2">
            Transforming lives through education since 2013
          </p>
        </div>
      </div>
    </footer>
  );
}
