import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Protsahan', path: '/about' },
    { name: 'Students', path: '/students' },
    { name: 'Memories', path: '/memories' },
    { name: 'Timeline', path: '/timeline' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-[#d62828]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/protsahan-logo.png"
              alt="Protsahan logo"
              className="w-10 sm:w-12 h-10 sm:h-12 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.endsWith('protsahan-logo.svg')) {
                  target.src = '/protsahan-logo.svg';
                }
              }}
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#d62828] hidden sm:inline">Protsahan</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 lg:space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2 sm:px-3 py-2 rounded-md transition-colors font-medium text-xs sm:text-sm lg:text-base ${
                  isActive(link.path)
                    ? 'text-[#d62828] bg-[#fdecec]'
                    : 'text-gray-800 hover:text-[#d62828] hover:bg-[#fdecec]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-3 border-t">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md mb-1 font-medium text-sm ${
                  isActive(link.path)
                    ? 'text-[#d62828] bg-[#fdecec]'
                    : 'text-gray-800 hover:text-[#d62828] hover:bg-[#fdecec]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
