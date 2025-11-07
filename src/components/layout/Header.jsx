import { Menu, X } from 'lucide-react';
import React from 'react';

function Header({ navLinks, isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <header className="bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 w-full shadow-lg shadow-cyan-500/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors duration-300">
          Saksham Malviya
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }} 
          className="md:hidden z-50 text-white"
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      <nav 
        className={`absolute top-full left-0 w-full bg-gray-900 shadow-lg md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}


export default Header;