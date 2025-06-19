import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Users, MapPin, Heart, Building, Shield, Zap, Globe, Building2, Music, Eye, FileCheck } from 'lucide-react';
import logo from '../../assets/LOGO-TSGROUP.png';

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
    { 
      name: 'Servicios', 
      action: () => {
        if (location.pathname === '/') {
          const element = document.getElementById('que-hacemos');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = '/#que-hacemos';
        }
      }
    },
    { name: 'Quiénes Somos', path: '/quienes-somos' },
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
        { name: "Entretenimiento", icon: <Music className="h-4 w-4" />, path: "/sectores/entretenimiento" }
      ]
    },
    {
      title: "INTEGRIDAD",
      items: [
        { name: "Línea Ética", icon: <Eye className="h-4 w-4" />, path: "/integridad/linea-etica" },
        { name: "Auditorías", icon: <FileCheck className="h-4 w-4" />, path: "/integridad/auditorias" }
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

  const handleNavItemClick = (item: any) => {
    if (item.action) {
      item.action();
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#0A0E20]/95 backdrop-blur-xl shadow-2xl border-b border-white/10' 
        : 'bg-gradient-to-r from-[#0A0E20] via-[#0A0E20] to-[#0056A6]'
    }`}>
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-32 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-80 h-32 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <div className="relative">
              <img 
                src={logo} 
                alt="TSGroup" 
                className="h-12 w-auto filter brightness-0 invert group-hover:scale-105 transition-transform duration-300"
              />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-white/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                item.path ? (
                  <Link
                    key={index}
                    to={item.path}
                    className={`relative px-4 py-3 text-sm font-semibold transition-all duration-300 group ${
                      isActive(item.path)
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {/* Active indicator */}
                    {isActive(item.path) && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    )}
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                ) : (
                  <button
                    key={index}
                    onClick={() => handleNavItemClick(item)}
                    className="relative px-4 py-3 text-sm font-semibold transition-all duration-300 group text-white/80 hover:text-white"
                  >
                    <span className="relative z-10">{item.name}</span>
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                )
              ))}
              
              {/* Mega Menu Trigger */}
              <div 
                className="relative"
                onMouseEnter={handleMegaMenuEnter}
                onMouseLeave={handleMegaMenuLeave}
              >
                <button className="group relative flex items-center px-4 py-3 text-sm font-semibold text-white/80 hover:text-white transition-all duration-300">
                  <span className="relative z-10 mr-1">Más</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showMegaMenu ? 'rotate-180' : ''}`} />
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                {/* Mega Menu */}
                {showMegaMenu && (
                  <div className="absolute top-full left-0 mt-2 w-[800px] transform -translate-x-3/4">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                      {/* Header */}
                      <div className="bg-gradient-to-r from-[#0056A6] to-[#004494] text-white px-6 py-4">
                        <div className="flex items-center">
                          <Globe className="h-6 w-6 mr-3" />
                          <div>
                            <h3 className="font-bold text-lg">Explora TSGroup</h3>
                            <p className="text-blue-100 text-sm">Todas nuestras áreas de especialización</p>
                          </div>
                        </div>
                      </div>

                      {/* Content Grid */}
                      <div className="p-8">
                        <div className="grid grid-cols-5 gap-8">
                          {megaMenuSections.map((section, index) => (
                            <div key={index} className="space-y-4">
                              <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider border-b border-[#0056A6]/30 pb-2">
                                {section.title}
                              </h4>
                              <ul className="space-y-3">
                                {section.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <Link
                                      to={item.path}
                                      className="group flex items-start p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-200"
                                      onClick={() => setShowMegaMenu(false)}
                                    >
                                      <div className="w-8 h-8 bg-gray-100 group-hover:bg-[#0056A6] text-gray-600 group-hover:text-white rounded-lg flex items-center justify-center mr-3 transition-all duration-300 flex-shrink-0">
                                        {item.icon}
                                      </div>
                                      <span className="text-sm text-gray-700 group-hover:text-[#0056A6] font-medium transition-colors leading-tight">
                                        {item.name}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-bold text-gray-900 text-lg">¿Necesitás una solución personalizada?</h4>
                              <p className="text-gray-600 text-sm">Nuestro equipo está listo para ayudarte</p>
                            </div>
                            <Link
                              to="/contacto"
                              className="bg-gradient-to-r from-[#0056A6] to-[#004494] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#004494] hover:to-[#003371] transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap ml-6"
                              onClick={() => setShowMegaMenu(false)}
                            >
                              Contactanos
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/carreras"
                className="relative bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl text-sm font-semibold hover:from-white/30 hover:to-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40 shadow-lg"
              >
                <span className="relative z-10">Trabajá con Nosotros</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-white hover:text-blue-200 p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-6 space-y-1 bg-[#0A0E20]/95 backdrop-blur-xl border-t border-white/10 rounded-b-2xl mt-2">
              {navItems.map((item, index) => (
                item.path ? (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-white bg-white/20 border border-white/30'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={index}
                    onClick={() => {
                      handleNavItemClick(item);
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 text-white/80 hover:text-white hover:bg-white/10"
                  >
                    {item.name}
                  </button>
                )
              ))}
              
              {/* Mobile Mega Menu Items */}
              <div className="border-t border-white/20 mt-6 pt-6">
                <div className="px-4 py-2 text-xs font-semibold text-white/60 uppercase tracking-wide">
                  Más Secciones
                </div>
                {megaMenuSections.map((section) => (
                  <div key={section.title} className="mb-6">
                    <div className="px-4 py-2 text-sm font-semibold text-white/80 border-l-2 border-blue-400">
                      {section.title}
                    </div>
                    {section.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center px-8 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 ml-2"
                      >
                        <div className="w-6 h-6 bg-white/10 text-white/60 rounded mr-3 flex items-center justify-center">
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
                className="block px-4 py-3 text-base font-semibold bg-gradient-to-r from-white/20 to-white/10 text-white rounded-xl hover:from-white/30 hover:to-white/20 transition-all duration-300 mt-4 border border-white/20"
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