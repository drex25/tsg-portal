import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Users, MapPin, Heart, Building, Shield, Zap, Globe, Building2, Music, Eye, FileCheck } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Equipo', path: '/equipo' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const megaMenuSections = [
    {
      title: "ALIANZAS",
      items: [
        { name: "Socios Estratégicos", icon: <Users className="h-4 w-4" />, path: "/alianzas/socios" }
      ]
    },
    {
      title: "PRESENCIAS",
      items: [
        { name: "Oficinas Regionales", icon: <MapPin className="h-4 w-4" />, path: "/presencias/oficinas" }
      ]
    },
    {
      title: "ACCIONES",
      items: [
        { name: "Impacto Social", icon: <Heart className="h-4 w-4" />, path: "/acciones/impacto-social" }
      ]
    },
    {
      title: "SECTORES",
      items: [
        { name: "Ciudad Inteligente", icon: <Building className="h-4 w-4" />, path: "/sectores/ciudad-inteligente" },
        { name: "Administración Pública", icon: <Shield className="h-4 w-4" />, path: "/sectores/administracion-publica" },
        { name: "Industria y Energía", icon: <Zap className="h-4 w-4" />, path: "/sectores/industria-energia" },
        { name: "Servicios de Salud", icon: <Building2 className="h-4 w-4" />, path: "/sectores/salud" },
        { name: "Entretenimiento y Eventos", icon: <Music className="h-4 w-4" />, path: "/sectores/entretenimiento" }
      ]
    },
    {
      title: "INTEGRIDAD Y TRANSPARENCIA",
      items: [
        { name: "Línea Ética", icon: <Eye className="h-4 w-4" />, path: "/integridad/linea-etica" },
        { name: "Auditorías Externas", icon: <FileCheck className="h-4 w-4" />, path: "/integridad/auditorias" }
      ]
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleMegaMenuEnter = () => {
    setShowMegaMenu(true);
  };

  const handleMegaMenuLeave = () => {
    setShowMegaMenu(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
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
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-[#0056A6] border-b-2 border-[#0056A6]'
                      : 'text-gray-700 hover:text-[#0056A6]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mega Menu Trigger */}
              <div 
                className="relative"
                onMouseEnter={handleMegaMenuEnter}
                onMouseLeave={handleMegaMenuLeave}
              >
                <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0056A6] transition-colors">
                  Más
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${showMegaMenu ? 'rotate-180' : ''}`} />
                </button>

                {/* Responsive Mega Menu */}
                {showMegaMenu && (
                  <div className="absolute top-full right-0 mt-2 w-screen max-w-5xl xl:max-w-6xl">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                      <div className="relative">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0056A6]/5 to-transparent"></div>
                        
                        {/* Header */}
                        <div className="relative bg-gradient-to-r from-[#0056A6] to-[#004494] text-white p-4 lg:p-6">
                          <div className="flex items-center">
                            <Globe className="h-6 w-6 lg:h-8 lg:w-8 mr-3" />
                            <div>
                              <h3 className="text-lg lg:text-xl font-bold">Explora TSGroup</h3>
                              <p className="text-blue-100 text-xs lg:text-sm">Descubre todas nuestras áreas de especialización</p>
                            </div>
                          </div>
                        </div>

                        {/* Content Grid - Responsive */}
                        <div className="relative p-4 lg:p-8">
                          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-8">
                            {megaMenuSections.map((section, index) => (
                              <div key={index} className="space-y-3 lg:space-y-4">
                                <h4 className="font-bold text-gray-900 text-xs lg:text-sm uppercase tracking-wide border-b border-[#0056A6]/20 pb-2">
                                  {section.title}
                                </h4>
                                <ul className="space-y-2 lg:space-y-3">
                                  {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                      <Link
                                        to={item.path}
                                        className="group flex items-center p-2 rounded-lg hover:bg-[#0056A6]/5 transition-all duration-200"
                                        onClick={() => setShowMegaMenu(false)}
                                      >
                                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-100 group-hover:bg-[#0056A6] text-gray-600 group-hover:text-white rounded-lg flex items-center justify-center mr-2 lg:mr-3 transition-colors flex-shrink-0">
                                          {item.icon}
                                        </div>
                                        <span className="text-xs lg:text-sm text-gray-700 group-hover:text-[#0056A6] font-medium transition-colors leading-tight">
                                          {item.name}
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          {/* Bottom CTA - Responsive */}
                          <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-200">
                            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 lg:p-6">
                              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                                <div className="text-center lg:text-left">
                                  <h4 className="font-bold text-gray-900 mb-2 text-sm lg:text-base">¿Necesitás una solución personalizada?</h4>
                                  <p className="text-gray-600 text-xs lg:text-sm">Nuestro equipo está listo para ayudarte</p>
                                </div>
                                <Link
                                  to="/contacto"
                                  className="bg-[#0056A6] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold hover:bg-[#004494] transition-colors transform hover:scale-105 text-sm lg:text-base whitespace-nowrap"
                                  onClick={() => setShowMegaMenu(false)}
                                >
                                  Contactanos
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/carreras"
                className="bg-[#0056A6] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#004494] transition-colors"
              >
                Trabajá con Nosotros
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
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
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t max-h-screen overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-[#0056A6] bg-blue-50'
                      : 'text-gray-700 hover:text-[#0056A6] hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Mega Menu Items */}
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Más Secciones
                </div>
                {megaMenuSections.map((section) => (
                  <div key={section.title} className="mb-4">
                    <div className="px-3 py-1 text-sm font-medium text-gray-700">
                      {section.title}
                    </div>
                    {section.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center px-6 py-2 text-sm text-gray-600 hover:text-[#0056A6] hover:bg-gray-50"
                      >
                        <div className="w-6 h-6 bg-gray-100 text-gray-500 rounded mr-3 flex items-center justify-center">
                          {item.icon}
                        </div>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              <Link
                to="/carreras"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium bg-[#0056A6] text-white rounded-lg hover:bg-[#004494] mt-2"
              >
                Trabajá con Nosotros
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;