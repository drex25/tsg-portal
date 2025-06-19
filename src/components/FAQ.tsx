import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Smartphone, Database, Zap, Shield, Settings, Calculator, Camera, Phone } from 'lucide-react';

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

  // Dividir FAQs en dos columnas
  const leftColumnFaqs = faqs.filter((_, index) => index % 2 === 0);
  const rightColumnFaqs = faqs.filter((_, index) => index % 2 === 1);

  const renderFAQColumn = (columnFaqs: typeof faqs, columnOffset: number) => (
    <div className="space-y-4">
      {columnFaqs.map((faq, index) => {
        const actualIndex = index * 2 + columnOffset;
        return (
          <div 
            key={actualIndex}
            className="group relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
          >
            {/* Gradient Border Effect */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${faq.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            
            {/* Question Header */}
            <button
              onClick={() => toggleFAQ(actualIndex)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-300 relative z-10"
            >
              <div className="flex items-center space-x-4 flex-1">
                {/* Dynamic Icon with gradient */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                  openIndex === actualIndex 
                    ? `bg-gradient-to-br ${faq.color} text-white scale-110 shadow-xl` 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-[#0056A6] group-hover:text-white'
                }`}>
                  {faq.icon}
                </div>
                
                {/* Question Text */}
                <div className="flex-1 min-w-0">
                  <h3 className={`text-lg font-bold transition-colors duration-300 leading-tight ${
                    openIndex === actualIndex 
                      ? 'text-[#0A0E20]' 
                      : 'text-gray-900 group-hover:text-[#0056A6]'
                  }`}>
                    {faq.question}
                  </h3>
                  <span className={`inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                    openIndex === actualIndex
                      ? `bg-gradient-to-r ${faq.color} text-white`
                      : 'bg-gray-100 text-gray-600 group-hover:bg-[#0056A6] group-hover:text-white'
                  }`}>
                    {faq.category}
                  </span>
                </div>
              </div>
              
              {/* Toggle Icon */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ml-4 flex-shrink-0 ${
                openIndex === actualIndex 
                  ? 'bg-[#0A0E20] text-white rotate-180 scale-110' 
                  : 'bg-gray-100 text-gray-600 group-hover:bg-[#0056A6] group-hover:text-white'
              }`}>
                <ChevronDown className="h-5 w-5" />
              </div>
            </button>

            {/* Answer Content */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === actualIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 pb-6">
                <div className="pl-18">
                  <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-[#0056A6] relative overflow-hidden`}>
                    {/* Background decoration */}
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${faq.color} opacity-5 rounded-full blur-xl`}></div>
                    <p className="text-gray-700 leading-relaxed relative z-10 font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Animation Line */}
            <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${faq.color} transition-all duration-500 ${
              openIndex === actualIndex ? 'w-full' : 'w-0'
            }`}></div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#0056A6]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#0A0E20]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-400/5 to-transparent rounded-full"></div>
        
        {/* Floating elements */}
        <div className="absolute top-32 right-1/4 w-4 h-4 bg-blue-400/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-6 h-6 bg-purple-400/15 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 left-1/6 w-3 h-3 bg-[#0056A6]/20 rounded-full animate-bounce delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-3xl mb-8 shadow-2xl">
            <HelpCircle className="h-10 w-10" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            ¿Qué hacemos?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#0A0E20] to-[#0056A6] mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Descubre nuestros servicios especializados y cómo podemos transformar tu organización 
            con soluciones tecnológicas innovadoras
          </p>
        </div>

        {/* Enhanced Category Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <span 
              key={index}
              className="px-6 py-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#0056A6] hover:text-white cursor-pointer transform hover:scale-105"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Two Column FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Left Column */}
          {renderFAQColumn(leftColumnFaqs, 0)}
          
          {/* Right Column */}
          {renderFAQColumn(rightColumnFaqs, 1)}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#0A0E20] via-[#0056A6] to-[#004494] rounded-3xl p-16 text-white relative overflow-hidden">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-8">
                ¿Necesitás una solución personalizada?
              </h3>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                Nuestro equipo de expertos está listo para desarrollar la solución perfecta 
                que se adapte a las necesidades específicas de tu organización
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="/contacto"
                  className="inline-flex items-center px-10 py-5 bg-white text-[#0A0E20] font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
                >
                  Contactar Especialista
                </a>
                <a 
                  href="/servicios"
                  className="inline-flex items-center px-10 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#0A0E20] transition-all duration-300 text-lg"
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