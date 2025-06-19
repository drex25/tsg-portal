import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award, Handshake, Building, MapPin, Globe, User, Lightbulb, CheckCircle, Users, Zap, Target } from 'lucide-react';
import FAQ from '../components/FAQ';

const Home = () => {
  const stats = [
    { number: '+200', label: 'Profesionales' },
    { number: '7', label: 'Provincias' },
    { number: '360°', label: 'Visión integral' },
    { number: '+15', label: 'Años de experiencia' }
  ];

  const locations = [
    { city: "Buenos Aires", address: "La Pampa 1391, Piso 2, CABA" },
    { city: "Posadas", address: "Bolívar 1729, Misiones" },
    { city: "Posadas", address: "Ayacucho 1475, Misiones" }
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

  return (
    <div className="pt-16">
      {/* Hero Section with New Dark Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with new dark color */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, #0A0E20 0%, rgba(10, 14, 32, 0.95) 30%, rgba(0, 86, 166, 0.8) 70%, rgba(0, 68, 148, 0.9) 100%), url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full"></div>
          
          {/* Additional floating elements */}
          <div className="absolute top-32 right-1/4 w-4 h-4 bg-blue-400/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/4 w-6 h-6 bg-purple-400/20 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/3 left-1/6 w-3 h-3 bg-white/20 rounded-full animate-bounce delay-700"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          <div className="max-w-6xl mx-auto">
            {/* Main Title with enhanced styling */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-16">
              Soluciones tecnológicas para la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-blue-200 animate-pulse">
                innovación
              </span>{' '}
              en organizaciones públicas y privadas
            </h1>
            
            {/* Enhanced Feature Boxes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
              {heroFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="group relative bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {/* Enhanced Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-blue-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  
                  <div className="relative z-10">
                    {/* Enhanced Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-blue-400/30 group-hover:to-purple-400/30 transition-all duration-300 group-hover:scale-110">
                      <div className="text-blue-200 group-hover:text-white transition-colors duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    
                    {/* Enhanced Text */}
                    <p className="text-sm md:text-base text-white/90 group-hover:text-white leading-relaxed font-medium group-hover:font-semibold transition-all duration-300">
                      {feature.title}
                    </p>
                  </div>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                to="/nosotros"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-white to-blue-50 text-[#0A0E20] font-semibold rounded-lg hover:from-blue-50 hover:to-white transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
              >
                Conocé más sobre nosotros
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contacto"
                className="inline-flex items-center px-8 py-4 border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
              >
                Hablemos de tu proyecto
              </Link>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">{stat.number}</div>
                  <div className="text-blue-200 font-medium group-hover:text-white transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section - ¿Qué hacemos? */}
      <FAQ />

      {/* Quiénes confían en nosotros */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quiénes confían en nosotros
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#0A0E20] to-[#0056A6] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Construimos relaciones a largo plazo basadas en la confianza, 
              la excelencia y el compromiso con el éxito de nuestros clientes
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Star className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excelencia</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprometidos con la calidad y la satisfacción del cliente en cada proyecto que desarrollamos
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Handshake className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Confianza</h3>
              <p className="text-gray-600 leading-relaxed">
                Relaciones sólidas construidas sobre la transparencia, el profesionalismo y la integridad
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Resultados</h3>
              <p className="text-gray-600 leading-relaxed">
                Soluciones efectivas que generan valor real y medible para nuestros clientes
              </p>
            </div>
          </div>

          {/* Animated Client Logos Carousel */}
          <div className="relative">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Nuestros Partners y Clientes
            </h3>
            
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Scrolling container */}
            <div className="overflow-hidden">
              <div className="flex animate-scroll space-x-8">
                {/* First set of logos */}
                {clientLogos.map((client, index) => (
                  <div 
                    key={`first-${index}`}
                    className="flex-shrink-0 w-48 h-24 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center border border-gray-100 group"
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-xl">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white">
                        <div className="text-center">
                          <Building className="h-8 w-8 mx-auto mb-2" />
                          <div className="font-bold text-sm">{client.name}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {clientLogos.map((client, index) => (
                  <div 
                    key={`second-${index}`}
                    className="flex-shrink-0 w-48 h-24 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center border border-gray-100 group"
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-xl">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white">
                        <div className="text-center">
                          <Building className="h-8 w-8 mx-auto mb-2" />
                          <div className="font-bold text-sm">{client.name}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-gray-50 via-blue-50 to-gray-50 rounded-3xl p-12 border border-gray-100 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0056A6]/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0A0E20]/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Star className="h-8 w-8" />
                </div>
                <blockquote className="text-2xl md:text-3xl text-gray-700 italic mb-8 font-light leading-relaxed">
                  "TSGroup ha sido un socio estratégico fundamental en nuestra transformación digital. 
                  Su profesionalismo, capacidad técnica y compromiso superaron nuestras expectativas."
                </blockquote>
                <div className="text-[#0056A6] font-bold text-lg">
                  — Cliente Satisfecho
                </div>
                <div className="text-gray-500 text-sm mt-2">
                  Sector Público
                </div>
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

      {/* Locations Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Presencia Nacional
            </h2>
            <div className="w-24 h-1 bg-[#0056A6] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Con oficinas estratégicamente ubicadas para brindar un servicio cercano y personalizado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-[#0056A6] text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Building className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{location.city}</h3>
                    <div className="flex items-start text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">{location.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;