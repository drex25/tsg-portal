import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users, Zap, Star, Award, Handshake, Building, MapPin, Globe, User, Lightbulb } from 'lucide-react';
import FAQ from '../components/FAQ';

const Home = () => {
  const stats = [
    { number: '+200', label: 'Profesionales' },
    { number: '7', label: 'Provincias' },
    { number: '360°', label: 'Visión integral' },
    { number: '+15', label: 'Años de experiencia' }
  ];

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Desarrollo de Software",
      description: "Aplicaciones web y móviles de última generación"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Consultoría IT",
      description: "Asesoramiento estratégico en transformación digital"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovación Tecnológica",
      description: "Soluciones disruptivas para el futuro"
    }
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
      icon: <Users className="h-8 w-8" />,
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

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <div className="w-24 h-1 bg-[#0056A6] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones tecnológicas integrales que transforman la manera 
              en que las organizaciones operan y crecen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0056A6] to-[#004494] text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0056A6] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/servicios"
              className="inline-flex items-center px-8 py-4 bg-[#0056A6] text-white font-semibold rounded-lg hover:bg-[#004494] transition-colors transform hover:scale-105"
            >
              Ver todos los servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Trust Section with dark theme */}
      <section className="py-20 bg-[#0A0E20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Por qué confiar en TSGroup
            </h2>
            <div className="w-24 h-1 bg-[#0056A6] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0056A6] to-[#004494] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excelencia</h3>
              <p className="text-gray-300 leading-relaxed">
                Más de 15 años de experiencia entregando soluciones de calidad superior 
                que superan las expectativas de nuestros clientes
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0056A6] to-[#004494] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Handshake className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Confianza</h3>
              <p className="text-gray-300 leading-relaxed">
                Relaciones sólidas y duraderas construidas sobre la transparencia, 
                el profesionalismo y el compromiso con el éxito
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0056A6] to-[#004494] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Resultados</h3>
              <p className="text-gray-300 leading-relaxed">
                Soluciones efectivas que generan valor real y medible, 
                impulsando el crecimiento y la eficiencia operativa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-20 bg-white">
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
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
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