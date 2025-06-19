import React from 'react';
import { Users, Handshake, Award, Globe, Building, Zap } from 'lucide-react';

const Alliances = () => {
  const strategicPartners = [
    {
      name: "Microsoft",
      category: "Tecnología Cloud",
      description: "Partner certificado en soluciones Azure y Microsoft 365",
      logo: "/partners/microsoft.svg",
      benefits: ["Certificaciones oficiales", "Soporte técnico directo", "Acceso a recursos exclusivos"]
    },
    {
      name: "AWS",
      category: "Infraestructura Cloud",
      description: "Partner avanzado en servicios de Amazon Web Services",
      logo: "/partners/aws.svg",
      benefits: ["Arquitectura cloud", "Migración segura", "Optimización de costos"]
    },
    {
      name: "Oracle",
      category: "Bases de Datos",
      description: "Especialistas certificados en soluciones Oracle",
      logo: "/partners/oracle.svg",
      benefits: ["Implementación enterprise", "Soporte especializado", "Optimización de performance"]
    },
    {
      name: "SAP",
      category: "ERP Empresarial",
      description: "Partner implementador de soluciones SAP",
      logo: "/partners/sap.svg",
      benefits: ["Consultoría especializada", "Implementación completa", "Soporte post-implementación"]
    }
  ];

  const partnershipBenefits = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certificaciones Oficiales",
      description: "Nuestro equipo mantiene las certificaciones más altas de la industria"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Acceso Prioritario",
      description: "Recursos exclusivos y soporte directo de nuestros partners tecnológicos"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Alcance Global",
      description: "Red internacional de partners para proyectos de cualquier escala"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0056A6] to-[#004494] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Users className="h-12 w-12 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold">
              Socios Estratégicos
            </h1>
          </div>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Colaboramos con los líderes tecnológicos mundiales para ofrecer 
            soluciones de vanguardia y garantizar el éxito de nuestros proyectos
          </p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ventajas de Nuestras Alianzas
            </h2>
            <div className="w-24 h-1 bg-[#0056A6] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestras alianzas estratégicas nos permiten ofrecer soluciones de clase mundial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-[#0056A6] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Partners Tecnológicos
            </h2>
            <div className="w-24 h-1 bg-[#0056A6] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trabajamos con las empresas tecnológicas más importantes del mundo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {strategicPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <Building className="hidden h-8 w-8 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{partner.name}</h3>
                    <span className="text-[#0056A6] font-medium">{partner.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{partner.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Beneficios:</h4>
                  <ul className="space-y-2">
                    {partner.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-[#0056A6] rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proceso de Alianza
            </h2>
            <div className="w-24 h-1 bg-[#0056A6] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cómo establecemos y mantenemos nuestras alianzas estratégicas
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Evaluación", description: "Análisis de compatibilidad tecnológica y estratégica" },
              { step: "02", title: "Certificación", description: "Obtención de certificaciones oficiales del partner" },
              { step: "03", title: "Implementación", description: "Desarrollo conjunto de soluciones integradas" },
              { step: "04", title: "Evolución", description: "Mejora continua y expansión de la alianza" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0056A6] to-[#004494] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0056A6] to-[#004494]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Handshake className="h-12 w-12 mr-4 text-white" />
            <h2 className="text-4xl font-bold text-white">
              ¿Querés ser nuestro partner?
            </h2>
          </div>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Exploremos oportunidades de colaboración estratégica para crear soluciones innovadoras
          </p>
          <a 
            href="/contacto"
            className="inline-flex items-center px-8 py-4 bg-white text-[#0056A6] font-semibold rounded-lg hover:bg-blue-50 transition-colors transform hover:scale-105"
          >
            Contactanos para Alianzas
          </a>
        </div>
      </section>
    </div>
  );
};

export default Alliances;