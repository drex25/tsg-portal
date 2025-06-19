import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/logo-tsgroup.svg" 
              alt="TSGroup" 
              className="h-8 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden text-2xl font-bold text-[#0056A6]">TSGroup</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('quienes-somos')}
                className="text-gray-700 hover:text-[#0056A6] px-3 py-2 text-sm font-medium transition-colors"
              >
                Quiénes Somos
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-gray-700 hover:text-[#0056A6] px-3 py-2 text-sm font-medium transition-colors"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-gray-700 hover:text-[#0056A6] px-3 py-2 text-sm font-medium transition-colors"
              >
                Contacto
              </button>
              <button 
                onClick={() => scrollToSection('trabaja-con-nosotros')}
                className="bg-[#0056A6] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#004494] transition-colors"
              >
                Trabajá con Nosotros
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#0056A6] p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button 
                onClick={() => scrollToSection('quienes-somos')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#0056A6] hover:bg-gray-50"
              >
                Quiénes Somos
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#0056A6] hover:bg-gray-50"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#0056A6] hover:bg-gray-50"
              >
                Contacto
              </button>
              <button 
                onClick={() => scrollToSection('trabaja-con-nosotros')}
                className="block w-full text-left px-3 py-2 text-base font-medium bg-[#0056A6] text-white rounded-lg hover:bg-[#004494] mt-2"
              >
                Trabajá con Nosotros
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;