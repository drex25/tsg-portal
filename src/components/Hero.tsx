import React from 'react';
import { ArrowRight, Code, Users, Zap } from 'lucide-react';
import tsgImage from '../assets/tsg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-16"
      style={{
        backgroundImage: `url(${tsgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Soluciones tecnológicas para la{' '}
                <span className="text-blue-300">innovación</span> en organizaciones públicas y privadas
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Ofrecemos Soluciones Tecnológicas con una visión 360°
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('quienes-somos')}
                className="inline-flex items-center px-8 py-4 bg-[#0056A6] text-white font-semibold rounded-lg hover:bg-[#004494] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Conocé más
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0056A6] transition-all duration-300"
              >
                Contactanos
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">+200</div>
                <div className="text-sm text-gray-200">Profesionales</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">7</div>
                <div className="text-sm text-gray-200">Provincias</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">360°</div>
                <div className="text-sm text-gray-200">Visión integral</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#0056A6] to-[#004494] rounded-xl p-6 text-white">
                  <Code className="h-8 w-8 mb-4" />
                  <h3 className="font-semibold mb-2">Desarrollo</h3>
                  <p className="text-sm opacity-90">Apps innovadoras</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                  <Users className="h-8 w-8 mb-4 text-white" />
                  <h3 className="font-semibold mb-2 text-white">Equipo</h3>
                  <p className="text-sm text-gray-200">+200 expertos</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                  <Zap className="h-8 w-8 mb-4 text-white" />
                  <h3 className="font-semibold mb-2 text-white">Innovación</h3>
                  <p className="text-sm text-gray-200">Tecnología de punta</p>
                </div>
                <div className="bg-gradient-to-br from-[#0056A6] to-[#004494] rounded-xl p-6 text-white">
                  <div className="h-8 w-8 mb-4 bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <h3 className="font-semibold mb-2">Soluciones</h3>
                  <p className="text-sm opacity-90">Visión 360°</p>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;