import React from 'react';
import { 
  Smartphone, 
  Database, 
  Shield, 
  Settings, 
  Calculator, 
  Camera, 
  Phone,
  Code,
  BarChart3
} from 'lucide-react';

const Servicios = () => {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Desarrollo de Apps",
      description: "Aplicaciones móviles y web personalizadas con tecnología de vanguardia"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Governance",
      description: "Gestión y gobierno de datos para optimizar la toma de decisiones"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Identidad Digital",
      description: "Soluciones de autenticación y verificación de identidad seguras"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Gerenciamiento de Proyectos",
      description: "Gestión integral de proyectos tecnológicos con metodologías ágiles"
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Consultoría Tributaria",
      description: "Asesoramiento especializado en sistemas tributarios y fiscales"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Videovigilancia",
      description: "Sistemas de seguridad y monitoreo con tecnología avanzada"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Center",
      description: "Soluciones de atención al cliente y soporte técnico especializado"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Desarrollo Web",
      description: "Sitios web corporativos y plataformas digitales a medida"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Business Intelligence",
      description: "Análisis de datos y reportes inteligentes para la toma de decisiones"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Qué hacemos?
          </h2>
          <div className="w-24 h-1 bg-[#0056A6] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios tecnológicos diseñados para impulsar 
            la transformación digital de tu organización
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
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

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0056A6] to-[#004494] rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              ¿Necesitás una solución personalizada?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Nuestro equipo de expertos está listo para desarrollar la solución perfecta para tu organización
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-[#0056A6] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Consultanos ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;