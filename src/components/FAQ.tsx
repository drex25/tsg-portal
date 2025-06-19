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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Fondo decorativo más sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-24 w-80 h-80 bg-[#0056A6]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-24 left-24 w-64 h-64 bg-[#0A0E20]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-purple-400/10 to-transparent rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header compacto y elegante */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-2xl mb-6 shadow-xl">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
            ¿Qué hacemos?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0A0E20] to-[#0056A6] mx-auto mb-4 rounded-full"></div>
        </div>

        {/* Categorías como pills más pequeñas */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, index) => (
            <span 
              key={index}
              className="px-4 py-1.5 bg-white/90 border border-gray-200 rounded-full text-xs font-semibold text-gray-700 shadow hover:bg-[#0056A6] hover:text-white transition-all duration-300 cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Grid de dos columnas con separación visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna izquierda */}
          <div className="space-y-6">
            {leftColumnFaqs.map((faq, index) => {
              const actualIndex = index * 2;
              return (
                <div 
                  key={actualIndex}
                  className="group relative bg-white/95 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                >
                  {/* Borde animado */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${faq.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  {/* Header pregunta */}
                  <button
                    onClick={() => toggleFAQ(actualIndex)}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-300 relative z-10"
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      {/* Icono */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                        openIndex === actualIndex 
                          ? `bg-gradient-to-br ${faq.color} text-white scale-110` 
                          : 'bg-gray-100 text-gray-600 group-hover:bg-[#0056A6] group-hover:text-white'
                      }`}>
                        {faq.icon}
                      </div>
                      {/* Pregunta y categoría */}
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-base font-bold transition-colors duration-300 leading-tight ${
                          openIndex === actualIndex 
                            ? 'text-[#0A0E20]' 
                            : 'text-gray-900 group-hover:text-[#0056A6]'
                        }`}>
                          {faq.question}
                        </h3>
                        <span className={`inline-block mt-1 px-2 py-0.5 text-[11px] font-medium rounded-full transition-all duration-300 ${
                          openIndex === actualIndex
                            ? `bg-gradient-to-r ${faq.color} text-white`
                            : 'bg-gray-100 text-gray-600 group-hover:bg-[#0056A6] group-hover:text-white'
                        }`}>
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    {/* Toggle Icon */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ml-3 flex-shrink-0 ${
                      openIndex === actualIndex 
                        ? 'bg-[#0A0E20] text-white rotate-180 scale-110' 
                        : 'bg-gray-100 text-gray-600 group-hover:bg-[#0056A6] group-hover:text-white'
                    }`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>
                  {/* Respuesta */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === actualIndex ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-5 pb-5">
                      <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border-l-4 border-[#0056A6] relative overflow-hidden`}>
                        <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${faq.color} opacity-5 rounded-full blur-xl`}></div>
                        <p className="text-gray-700 leading-relaxed relative z-10 text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Línea animada */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${faq.color} transition-all duration-500 ${
                    openIndex === actualIndex ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
              );
            })}
          </div>
          {/* Columna derecha */}
          <div className="space-y-6">
            {rightColumnFaqs.map((faq, index) => {
              const actualIndex = index * 2 + 1;
              return (
                <div 
                  key={actualIndex}
                  className="group relative bg-white/95 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                >
                  {/* Borde animado */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${faq.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  {/* Header pregunta */}
                  <button
                    onClick={() => toggleFAQ(actualIndex)}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-300 relative z-10"
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      {/* Icono */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                        openIndex === actualIndex 
                          ? `bg-gradient-to-br ${faq.color} text-white scale-110` 
                          : 'bg-gray-100 text-gray-600 group-hover:bg-[#0056A6] group-hover:text-white'
                      }`}>
                        {faq.icon}
                      </div>
                      {/* Pregunta y categoría */}
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-base font-bold transition-colors duration-300 leading-tight ${
                          openIndex === actualIndex 
                            ? 'text-[#0A0E20]' 
                            : 'text-gray-900 group-hover:text-[#0056A6]'
                        }`}>
                          {faq.question}
                        </h3>
                        <span className={`inline-block mt-1 px-2 py-0.5 text-[11px] font-medium rounded-full transition-all duration-300 ${
                          openIndex === actualIndex
                            ? `bg-gradient-to-r ${faq.color} text-white`
                            : 'bg-gray-100 text-gray-600 group-hover:bg-[#0056A6] group-hover:text-white'
                        }`}>
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    {/* Toggle Icon */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ml-3 flex-shrink-0 ${
                      openIndex === actualIndex 
                        ? 'bg-[#0A0E20] text-white rotate-180 scale-110' 
                        : 'bg-gray-100 text-gray-600 group-hover:bg-[#0056A6] group-hover:text-white'
                    }`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>
                  {/* Respuesta */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === actualIndex ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-5 pb-5">
                      <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border-l-4 border-[#0056A6] relative overflow-hidden`}>
                        <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${faq.color} opacity-5 rounded-full blur-xl`}></div>
                        <p className="text-gray-700 leading-relaxed relative z-10 text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Línea animada */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${faq.color} transition-all duration-500 ${
                    openIndex === actualIndex ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;