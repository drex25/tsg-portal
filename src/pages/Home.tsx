import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award, Handshake, Building, MapPin, Globe, User, Lightbulb, CheckCircle, Users, Zap, Target, ChevronLeft, ChevronRight, Phone, Mail, Shield, Cloud, Database, Cpu } from 'lucide-react';
import LocationMap from '../components/LocationMap';
import FAQ from '../components/FAQ';

const Home = () => {
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

  const stats = [
    { number: '+200', label: 'Profesionales' },
    { number: '7', label: 'Provincias' },
    { number: '360°', label: 'Visión integral' },
    { number: '+15', label: 'Años de experiencia' }
  ];

  const locations = [
    {
      city: "Buenos Aires",
      address: "La Pampa 1391, Piso 2",
      region: "CABA",
      type: "Oficina Principal",
      coordinates: { lat: -34.6037, lng: -58.3816 }
    },
    {
      city: "Posadas",
      address: "Bolívar 1729",
      region: "Misiones",
      type: "Oficina Regional",
      coordinates: { lat: -27.3676, lng: -55.8961 }
    },
    {
      city: "Posadas",
      address: "Ayacucho 1475",
      region: "Misiones",
      type: "Oficina Operativa",
      coordinates: { lat: -27.3650, lng: -55.8940 }
    }
  ];

  const heroFeatures = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Ofrecemos Soluciones Tecnológicas con una visión 360°."
    },
    {
      icon: <User className="h-8 w-8" />,
      title: "Contamos con un equipo de más de 200 profesionales altamente calificados en tributación y tecnología."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Contamos con presencia en 7 provincias."
    },
    {
      icon: <User className="h-8 w-8" />,
      title: "Ofrecemos un enfoque personalizado para cada cliente."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Combinamos dos universos complejos, lo público y privado, potenciándolos para la innovación."
    }
  ];

  // Logos de empresas que confían en TSGroup
  const clientLogos = [
    { name: "Microsoft", logo: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Google", logo: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Amazon", logo: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "IBM", logo: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Oracle", logo: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "SAP", logo: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Salesforce", logo: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Adobe", logo: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Cisco", logo: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Intel", logo: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" }
  ];

  // Partners Estratégicos
  const strategicPartners = [
    { 
      name: "Microsoft", 
      category: "Cloud & Productivity",
      logo: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=250&h=120&fit=crop",
      icon: <Cloud className="h-6 w-6" />
    },
    { 
      name: "Amazon Web Services", 
      category: "Cloud Infrastructure",
      logo: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=250&h=120&fit=crop",
      icon: <Database className="h-6 w-6" />
    },
    { 
      name: "Oracle", 
      category: "Enterprise Solutions",
      logo: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=250&h=120&fit=crop",
      icon: <Shield className="h-6 w-6" />
    },
    { 
      name: "SAP", 
      category: "Business Applications",
      logo: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=250&h=120&fit=crop",
      icon: <Cpu className="h-6 w-6" />
    },
    { 
      name: "Salesforce", 
      category: "CRM Solutions",
      logo: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=250&h=120&fit=crop",
      icon: <Users className="h-6 w-6" />
    },
    { 
      name: "Adobe", 
      category: "Digital Experience",
      logo: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=250&h=120&fit=crop",
      icon: <Zap className="h-6 w-6" />
    },
    { 
      name: "Cisco", 
      category: "Network Security",
      logo: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=250&h=120&fit=crop",
      icon: <Shield className="h-6 w-6" />
    },
    { 
      name: "Intel", 
      category: "Hardware Solutions",
      logo: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=250&h=120&fit=crop",
      icon: <Cpu className="h-6 w-6" />
    },
    { 
      name: "VMware", 
      category: "Virtualization",
      logo: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=250&h=120&fit=crop",
      icon: <Cloud className="h-6 w-6" />
    },
    { 
      name: "IBM", 
      category: "AI & Analytics",
      logo: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=250&h=120&fit=crop",
      icon: <Database className="h-6 w-6" />
    }
  ];

  const proposalFeatures = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Experiencia y profesionalismo",
      description: "Un equipo experto comprometido con tu éxito."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Soluciones innovadoras",
      description: "Usamos tecnología para mejorar la eficiencia y el crecimiento."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Enfoque personalizado",
      description: "Adaptamos nuestros servicios a tus necesidades."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Capital humano clave",
      description: "Contamos con equipos de alto rendimiento."
    }
  ];

  const nextLocation = () => {
    setCurrentLocationIndex((prev) => (prev + 1) % locations.length);
  };

  const prevLocation = () => {
    setCurrentLocationIndex((prev) => (prev - 1 + locations.length) % locations.length);
  };

  const currentLocation = locations[currentLocationIndex];

  return (
    <div className="pt-16">
      {/* Hero Section - Enhanced Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Background with better gradients */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, #0A0E20 0%, rgba(10, 14, 32, 0.98) 25%, rgba(0, 86, 166, 0.85) 75%, rgba(0, 68, 148, 0.95) 100%), url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Main gradient orbs */}
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Central glow effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-white/8 via-white/3 to-transparent rounded-full"></div>
          
          {/* Floating particles */}
          <div className="absolute top-32 right-1/4 w-4 h-4 bg-blue-400/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/4 w-6 h-6 bg-purple-400/30 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/3 left-1/6 w-3 h-3 bg-white/30 rounded-full animate-bounce delay-700"></div>
          <div className="absolute top-2/3 right-1/6 w-5 h-5 bg-blue-300/25 rounded-full animate-pulse delay-300"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        {/* Enhanced Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Main Title */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-snug mb-4 tracking-tight">
                Soluciones tecnológicas para la{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-blue-200 animate-pulse">
                    innovación
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 rounded-full animate-pulse"></div>
                </span>{' '}
                en organizaciones públicas y privadas
              </h1>
              
              {/* Enhanced subtitle */}
              <p className="text-lg md:text-xl text-blue-100 font-light max-w-3xl mx-auto leading-relaxed">
                Transformamos ideas en soluciones digitales que impulsan el crecimiento y la eficiencia
              </p>
            </div>
            
            {/* Enhanced Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
              {heroFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="group relative bg-black/20 backdrop-blur-md border border-white/20 rounded-3xl p-6 hover:bg-black/30 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  {/* Enhanced gradient border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"></div>
                  
                  <div className="relative z-10">
                    {/* Enhanced Icon Container */}
                    <div className="w-16 h-16 bg-gradient-to-br from-white/25 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gradient-to-br group-hover:from-blue-400/40 group-hover:to-purple-400/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <div className="text-blue-200 group-hover:text-white transition-colors duration-500 transform group-hover:scale-110">
                        {feature.icon}
                      </div>
                    </div>
                    
                    {/* Enhanced Text */}
                    <p className="text-sm md:text-base text-white/90 group-hover:text-white leading-relaxed font-medium group-hover:font-semibold transition-all duration-500">
                      {feature.title}
                    </p>
                  </div>
                  
                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Subtle border animation */}
                  <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/30 transition-all duration-700"></div>
                </div>
              ))}
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                to="/nosotros"
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-white to-blue-50 text-[#0A0E20] font-bold rounded-2xl hover:from-blue-50 hover:to-white transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/30 hover:shadow-2xl"
                style={{
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
                }}
              >
                <span className="mr-2">Conocé más sobre nosotros</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                to="/contacto"
                className="group inline-flex items-center px-10 py-5 border-2 border-white/80 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white transition-all duration-500 backdrop-blur-md transform hover:scale-105"
                style={{
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
                }}
              >
                <span className="mr-2">Hablemos de tu proyecto</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Enhanced Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="text-4xl md:text-5xl font-black text-white mb-3 group-hover:text-blue-200 transition-colors duration-500 transform group-hover:scale-110">
                      {stat.number}
                    </div>
                    <div className="text-blue-200 font-semibold group-hover:text-white transition-colors duration-500 text-lg">
                      {stat.label}
                    </div>
                    {/* Subtle underline effect */}
                    <div className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto group-hover:w-16 transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="group cursor-pointer">
            <div className="w-6 h-12 border-2 border-white/60 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-1.5 h-4 bg-gradient-to-b from-white/80 to-white/40 rounded-full mt-2 animate-pulse group-hover:animate-bounce"></div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-white/60 text-xs mt-2 font-medium group-hover:text-white transition-colors duration-300">
              Desliza
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - ¿Qué hacemos? */}
      <FAQ />

      {/* Quiénes confían en nosotros */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 left-1/4 w-80 h-80 bg-[#0056A6]/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-24 right-1/4 w-64 h-64 bg-[#0A0E20]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header mejorado */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-2xl mb-6 shadow-xl">
              <Star className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
              Quiénes confían en nosotros
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0A0E20] to-[#0056A6] mx-auto mb-4 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Construimos relaciones a largo plazo basadas en la confianza, la excelencia y el compromiso con el éxito de nuestros clientes
            </p>
          </div>

          {/* Carrusel de logos automático */}
          <div className="relative mb-8">
            <div className="overflow-hidden">
              <div className="flex animate-scroll gap-8 py-4 min-w-full items-center">
                {/* Primer set de logos */}
                {clientLogos.map((client, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 w-40 h-24 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group relative p-0 border-0"
                  >
                    <div className="flex items-center justify-center w-full h-full">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-full h-full object-contain mx-auto block bg-transparent border-0 shadow-none rounded-none p-0 m-0"
                        style={{ boxShadow: 'none', border: 'none', background: 'transparent', padding: 0, margin: 0, filter: 'none' }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    </div>
                    {/* Placeholder si no hay logo */}
                    <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-2xl">
                      <Building className="h-8 w-8 mx-auto mb-2" />
                      <div className="font-bold text-xs text-center">{client.name}</div>
                    </div>
                  </div>
                ))}
                {/* Segundo set para loop infinito */}
                {clientLogos.map((client, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 w-40 h-24 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group relative p-0 border-0"
                  >
                    <div className="flex items-center justify-center w-full h-full">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-full h-full object-contain mx-auto block bg-transparent border-0 shadow-none rounded-none p-0 m-0"
                        style={{ boxShadow: 'none', border: 'none', background: 'transparent', padding: 0, margin: 0, filter: 'none' }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    </div>
                    <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-2xl">
                      <Building className="h-8 w-8 mx-auto mb-2" />
                      <div className="font-bold text-xs text-center">{client.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva Sección: Nuestra Propuesta */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#0056A6]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#0A0E20]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-400/5 to-transparent rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-3xl mb-8 shadow-2xl">
              <Handshake className="h-10 w-10" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Nuestra Propuesta
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#0A0E20] to-[#0056A6] mx-auto mb-8"></div>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-8 font-light">
                En TSGroup, no solo ofrecemos servicios, sino que construimos relaciones de confianza.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Te invitamos a conocer cómo podemos ayudarte a lograr tus objetivos.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {proposalFeatures.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0A0E20]/10 via-[#0056A6]/10 to-[#004494]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex items-start space-x-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0056A6] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Subtle Animation Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#0A0E20] to-[#0056A6] transition-all duration-500 w-0 group-hover:w-full"></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#0A0E20] via-[#0056A6] to-[#004494] rounded-3xl p-16 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-8">
                  ¿Listo para comenzar?
                </h3>
                <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Conversemos sobre cómo nuestras soluciones pueden transformar tu organización 
                  y llevarte al siguiente nivel de eficiencia y crecimiento
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    to="/contacto"
                    className="inline-flex items-center px-10 py-5 bg-white text-[#0A0E20] font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
                  >
                    Contactanos ahora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link 
                    to="/servicios"
                    className="inline-flex items-center px-10 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#0A0E20] transition-all duration-300 text-lg"
                  >
                    Ver nuestros servicios
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section with Full Width Map and Floating Info Box */}
      <section className="relative h-screen bg-gray-900">
        {/* Full Width Map */}
        <div className="absolute inset-0">
          <LocationMap
            locations={locations}
            currentLocation={currentLocation}
            onMarkerClick={setCurrentLocationIndex}
          />
        </div>

        {/* Floating Info Box */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 min-w-[400px] max-w-lg">
            {/* Navigation */}
            <div className="flex justify-between items-center mb-6">
              <button 
                onClick={prevLocation}
                className="w-12 h-12 bg-[#0056A6] hover:bg-[#004494] text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <div className="flex space-x-2">
                {locations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentLocationIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentLocationIndex 
                        ? 'bg-[#0056A6] scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextLocation}
                className="w-12 h-12 bg-[#0056A6] hover:bg-[#004494] text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Location Info */}
            <div className="text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {currentLocation.city}
                </h3>
                <span className="inline-block px-4 py-2 bg-[#0056A6] text-white text-sm font-medium rounded-full">
                  {currentLocation.type}
                </span>
              </div>
              
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#0056A6] mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-medium">{currentLocation.address}</div>
                    <div className="text-sm text-gray-500">{currentLocation.region}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Overlay */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent h-32 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-2">
                Presencia Nacional
              </h2>
              <p className="text-blue-100">
                Oficinas estratégicamente ubicadas para brindar un servicio cercano
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Estratégicos Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-3xl mb-8 shadow-2xl">
              <Handshake className="h-10 w-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partners Estratégicos
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#0A0E20] to-[#0056A6] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Colaboramos con los líderes tecnológicos mundiales para ofrecer 
              soluciones de vanguardia y garantizar el éxito de nuestros proyectos
            </p>
          </div>

          {/* Partnership Benefits */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Certificaciones Oficiales</h3>
              <p className="text-gray-600 text-sm">
                Nuestro equipo mantiene las certificaciones más altas de la industria
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Acceso Prioritario</h3>
              <p className="text-gray-600 text-sm">
                Recursos exclusivos y soporte directo de nuestros partners tecnológicos
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Alcance Global</h3>
              <p className="text-gray-600 text-sm">
                Red internacional de partners para proyectos de cualquier escala
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Soporte Especializado</h3>
              <p className="text-gray-600 text-sm">
                Asistencia técnica especializada y consultoría de expertos
              </p>
            </div>
          </div>

          {/* Strategic Partners Carousel */}
          <div className="relative">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Nuestros Socios Tecnológicos
            </h3>
            
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Scrolling container */}
            <div className="overflow-hidden">
              <div className="flex animate-scroll space-x-8">
                {/* First set of partners */}
                {strategicPartners.map((partner, index) => (
                  <div 
                    key={`first-${index}`}
                    className="flex-shrink-0 w-64 h-32 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 group relative overflow-hidden"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-20 group-hover:opacity-30"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-gray-50/95"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 h-full flex flex-col justify-center">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                          {partner.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg group-hover:text-[#0056A6] transition-colors duration-300">
                            {partner.name}
                          </h4>
                          <p className="text-sm text-gray-600 font-medium">
                            {partner.category}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0056A6]/20 rounded-xl transition-all duration-300"></div>
                  </div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {strategicPartners.map((partner, index) => (
                  <div 
                    key={`second-${index}`}
                    className="flex-shrink-0 w-64 h-32 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 group relative overflow-hidden"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-20 group-hover:opacity-30"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-gray-50/95"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 h-full flex flex-col justify-center">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                          {partner.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg group-hover:text-[#0056A6] transition-colors duration-300">
                            {partner.name}
                          </h4>
                          <p className="text-sm text-gray-600 font-medium">
                            {partner.category}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0056A6]/20 rounded-xl transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Partnership CTA */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-gray-50 via-blue-50 to-gray-50 rounded-3xl p-12 border border-gray-100 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0056A6]/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0A0E20]/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Handshake className="h-8 w-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  ¿Querés ser nuestro partner?
                </h3>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Exploremos oportunidades de colaboración estratégica para crear soluciones innovadoras 
                  que generen valor para nuestros clientes
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contacto"
                    className="inline-flex items-center px-8 py-4 bg-[#0056A6] text-white font-semibold rounded-lg hover:bg-[#004494] transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Handshake className="h-5 w-5 mr-2" />
                    Contactanos para Alianzas
                  </Link>
                  <Link 
                    to="/alianzas/socios"
                    className="inline-flex items-center px-8 py-4 border-2 border-[#0056A6] text-[#0056A6] font-semibold rounded-lg hover:bg-[#0056A6] hover:text-white transition-all duration-300"
                  >
                    Ver Todas las Alianzas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with dark theme */}
      <section className="py-20 bg-gradient-to-r from-[#0A0E20] via-[#0056A6] to-[#004494]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para transformar tu organización?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Conversemos sobre cómo nuestras soluciones tecnológicas pueden impulsar 
            el crecimiento y la eficiencia de tu empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contacto"
              className="inline-flex items-center px-8 py-4 bg-white text-[#0A0E20] font-semibold rounded-lg hover:bg-blue-50 transition-colors transform hover:scale-105"
            >
              Contactanos ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/servicios"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0A0E20] transition-colors"
            >
              Ver nuestros servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;