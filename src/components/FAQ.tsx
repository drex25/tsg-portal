import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Smartphone, Database, Zap, Shield, Settings, Calculator, Camera, Phone, Code, Cloud } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Desarrollo de aplicaciones web y mobile",
      answer: "Creamos aplicaciones web y mobile personalizadas para satisfacer tus necesidades, apoyando la transformación digital y la escalabilidad tecnológica de tu negocio.",
      icon: <Smartphone className="h-6 w-6" />,
      category: "Desarrollo",
      color: "from-blue-500 to-blue-600"
    },
    {
      question: "Análisis IT & Data Governance",
      answer: "Desarrollamos un conjunto de procesos, políticas, estándares y métricas enfocados en garantizar la calidad, disponibilidad, integridad y seguridad de los datos de tu organización.",
      icon: <Database className="h-6 w-6" />,
      category: "Datos",
      color: "from-purple-500 to-purple-600"
    },
    {
      question: "Soluciones de Transformación Digital",
      answer: "Desarrollamos estrategias, servicios y tecnologías que ayudan a las empresas a adaptarse y ser pioneras en la era digital.",
      icon: <Zap className="h-6 w-6" />,
      category: "Transformación",
      color: "from-orange-500 to-orange-600"
    },
    {
      question: "Identidad Digital",
      answer: "Brindamos soluciones de reconocimiento facial y reconocimiento de voz sin esfuerzo, que marca el camino hacia un acceso futuro seguro y sin contraseña, mejorando la accesibilidad, la fiabilidad y la eficacia.",
      icon: <Shield className="h-6 w-6" />,
      category: "Seguridad",
      color: "from-green-500 to-green-600"
    },
    {
      question: "Gerenciamiento de proyectos",
      answer: "Te ayudamos a establecer procesos y mejores prácticas para gestionar adecuadamente tus proyectos de sistemas y tecnología.",
      icon: <Settings className="h-6 w-6" />,
      category: "Gestión",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      question: "Consultoría tributaria",
      answer: "Colaboramos con las organizaciones para potenciar la eficiencia, mejorar los procesos y generar mejores resultados en el ámbito tributario: Eficiencia recaudatoria, Detección de inconsistencias, Reingeniería de procesos y política tributaria.",
      icon: <Calculator className="h-6 w-6" />,
      category: "Tributario",
      color: "from-teal-500 to-teal-600"
    },
    {
      question: "Videovigilancia",
      answer: "Desarrollamos diferentes soluciones de video seguridad, análisis de video y control de acceso para proporcionar información adecuada en el momento justo, brindando precisión y respuesta inmediata.",
      icon: <Camera className="h-6 w-6" />,
      category: "Seguridad",
      color: "from-red-500 to-red-600"
    },
    {
      question: "Call Center de cobranzas y recupero de deuda y atención al usuario",
      answer: "Desarrollamos estrategias y acciones de recupero de tributos adeudados, en etapa de reclamo extrajudicial o judicial.",
      icon: <Phone className="h-6 w-6" />,
      category: "Atención",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#0056A6]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#0A0E20]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-2xl mb-6 shadow-xl">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Qué hacemos?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0A0E20] to-[#0056A6] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestros servicios especializados y cómo podemos transformar tu organización
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  {/* Dynamic Icon with gradient */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? `bg-gradient-to-br ${faq.color} text-white shadow-lg scale-110` 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-[#0056A6] group-hover:text-white'
                  }`}>
                    {faq.icon}
                  </div>
                  
                  {/* Question Text */}
                  <div className="flex-1">
                    <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                      openIndex === index 
                        ? 'text-[#0A0E20]' 
                        : 'text-gray-900 group-hover:text-[#0056A6]'
                    }`}>
                      {faq.question}
                    </h3>
                    <span className={`inline-block mt-1 px-3 py-1 text-xs font-medium rounded-full transition-colors duration-300 ${
                      openIndex === index
                        ? 'bg-[#0056A6] text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {faq.category}
                    </span>
                  </div>
                </div>
                
                {/* Toggle Icon */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-[#0A0E20] text-white rotate-180' 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-[#0056A6] group-hover:text-white'
                }`}>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>

              {/* Answer Content */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="pl-16">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-[#0056A6]">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
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

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0A0E20] via-[#0056A6] to-[#004494] rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-300 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Necesitás una solución personalizada?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Nuestro equipo de expertos está listo para desarrollar la solución perfecta 
                que se adapte a las necesidades específicas de tu organización
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contacto"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#0A0E20] font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Contactar Especialista
                </a>
                <a 
                  href="/servicios"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0A0E20] transition-all duration-300"
                >
                  Ver Todos los Servicios
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;