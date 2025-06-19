import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/logo-tsgroup.svg" 
                alt="TSGroup" 
                className="h-8 w-auto mr-3"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden text-2xl font-bold text-white">TSGroup</div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Think Solutions Group - Soluciones tecnológicas innovadoras para la transformación 
              digital de organizaciones públicas y privadas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#0056A6] rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#0056A6] rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#0056A6] rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#0056A6] rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('quienes-somos')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contacto
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('trabaja-con-nosotros')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Trabajá con Nosotros
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <div className="font-medium text-white mb-1">Email</div>
                <a href="mailto:contacto@tsgroup.com.ar" className="hover:text-white transition-colors">
                  contacto@tsgroup.com.ar
                </a>
              </div>
              <div>
                <div className="font-medium text-white mb-1">Oficina Principal</div>
                <div>La Pampa 1391, Piso 2</div>
                <div>CABA, Argentina</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Think Solutions Group (TSGroup). Todos los derechos reservados.
          </div>
          
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-[#0056A6] hover:bg-[#004494] rounded-lg flex items-center justify-center transition-colors transform hover:scale-105"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;