import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Smartphone, Database, Zap, Shield, Settings, Calculator, Camera, Phone } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿QUÉ HACEMOS?",
      answer: "En TSGroup ofrecemos soluciones tecnológicas integrales con una visión 360°. Nos especializamos en transformar organizaciones públicas y privadas a través de la innovación tecnológica, combinando expertise en tributación y tecnología para crear soluciones que impulsan el crecimiento y la eficiencia.",
      icon: <HelpCircle className="h-6 w-6" />,
      category: "General"
    },
    {
      question: "Desarrollo de aplicaciones web y mobile",
      answer: "Desarrollamos aplicaciones web y móviles de última generación utilizando las tecnologías más avanzadas. Nuestro equipo de expertos crea soluciones personalizadas que optimizan procesos, mejoran la experiencia del usuario y impulsan la transformación digital de tu organización.",
      icon: <Smartphone className="h-6 w-6" />,
      category: "Desarrollo"
    },
    {
      question: "Análisis IT & Data Governance",
      answer: "Implementamos estrategias de gobierno de datos y análisis IT que permiten a las organizaciones tomar decisiones informadas basadas en datos confiables. Nuestros servicios incluyen arquitectura de datos, calidad de datos, políticas de governance y compliance.",
      icon: <Database className="h-6 w-6" />,
      category: "Datos"
    },
    {
      question: "Soluciones de Transformación Digital",
      answer: "Guiamos a las organizaciones en su proceso de transformación digital integral. Desde la estrategia hasta la implementación, ayudamos a modernizar procesos, adoptar nuevas tecnologías y crear una cultura digital que impulse la innovación y el crecimiento sostenible.",
      icon: <Zap className="h-6 w-6" />,
      category: "Transformación"
    },
    {
      question: "Identidad Digital",
      answer: "Desarrollamos soluciones robustas de identidad digital que garantizan la seguridad y autenticación de usuarios. Implementamos sistemas de autenticación biométrica, single sign-on, gestión de identidades y certificados digitales para proteger la información sensible.",
      icon: <Shield className="h-6 w-6" />,
      category: "Seguridad"
    },
    {
      question: "Gerenciamiento de proyectos",
      answer: "Ofrecemos servicios de gestión integral de proyectos tecnológicos utilizando metodologías ágiles. Nuestro equipo de Project Managers certificados asegura entregas exitosas en tiempo y forma, gestionando riesgos y manteniendo la calidad en cada etapa del proyecto.",
      icon: <Settings className="h-6 w-6" />,
      category: "Gestión"
    },
    {
      question: "Consultoría tributaria",
      answer: "Brindamos asesoramiento especializado en sistemas tributarios y fiscales. Nuestros expertos ayudan a optimizar procesos tributarios, garantizar el cumplimiento normativo, implementar automatización y generar reportes regulatorios precisos.",
      icon: <Calculator className="h-6 w-6" />,
      category: "Tributario"
    },
    {
      question: "Videovigilancia",
      answer: "Implementamos sistemas de videovigilancia de última generación con tecnología IP, análisis inteligente y monitoreo 24/7. Nuestras soluciones incluyen cámaras de alta definición, software de análisis de video e integración con sistemas de alarmas para máxima seguridad.",
      icon: <Camera className="h-6 w-6" />,
      category: "Seguridad"
    },
    {
      question: "Call Center de cobranzas y recupero de deuda y atención al usuario",
      answer: "Ofrecemos soluciones completas de call center especializadas en cobranzas, recupero de deuda y atención al cliente. Incluimos contact center avanzado, IVR inteligente, CRM integrado y analytics de llamadas para optimizar la gestión y mejorar la experiencia del usuario.",
      icon: <Phone className="h-6 w-6" />,
      category: "Atención"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#0056A6]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#0A0E20]/5 to-transparent rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-2xl mb-8 shadow-2xl">
            <HelpCircle className="h-10 w-10" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Preguntas Frecuentes
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#0A0E20] to-[#0056A6] mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Descubre todo lo que necesitas saber sobre nuestros servicios y soluciones tecnológicas
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#0056A6] hover:text-white cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E20]/10 via-[#0056A6]/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  {/* Question Header */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-8 text-left flex items-center justify-between group-hover:bg-gradient-to-r group-hover:from-[#0A0E20]/5 group-hover:to-[#0056A6]/5 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-6">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        openIndex === index 
                          ? 'bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white shadow-lg scale-110' 
                          : 'bg-gray-100 text-gray-600 group-hover:bg-[#0056A6] group-hover:text-white'
                      }`}>
                        {faq.icon}
                      </div>
                      
                      {/* Question Text */}
                      <div>
                        <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                          openIndex === index 
                            ? 'text-[#0A0E20]' 
                            : 'text-gray-900 group-hover:text-[#0056A6]'
                        }`}>
                          {faq.question}
                        </h3>
                        <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Toggle Icon */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-[#0A0E20] text-white rotate-180' 
                        : 'bg-gray-100 text-gray-600 group-hover:bg-[#0056A6] group-hover:text-white'
                    }`}>
                      <ChevronDown className="h-5 w-5" />
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 pb-8">
                      <div className="pl-20">
                        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border-l-4 border-[#0056A6]">
                          <p className="text-gray-700 leading-relaxed text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle Animation Line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#0A0E20] to-[#0056A6] transition-all duration-500 ${
                  openIndex === index ? 'w-full' : 'w-0'
                }`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#0A0E20] via-[#0056A6] to-[#004494] rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-300 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                ¿No encontraste lo que buscabas?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Nuestro equipo de expertos está listo para responder todas tus preguntas 
                y ayudarte a encontrar la solución perfecta para tu organización
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center px-8 py-4 bg-white text-[#0A0E20] font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  Contactar Especialista
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0A0E20] transition-all duration-300">
                  Ver Todos los Servicios
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;