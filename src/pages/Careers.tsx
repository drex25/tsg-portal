import React, { useState } from 'react';
import { Upload, Send, Users, Briefcase, Heart, Award, Zap, Shield } from 'lucide-react';

const Careers = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    whatsapp: '',
    ciudad: '',
    puesto: '',
    cv: null as File | null
  });

  const puestos = [
    'Desarrollador Frontend',
    'Desarrollador Backend',
    'Desarrollador Full Stack',
    'Analista de Sistemas',
    'Project Manager',
    'DevOps Engineer',
    'Data Analyst',
    'UX/UI Designer',
    'QA Tester',
    'Consultor Técnico',
    'Arquitecto de Software',
    'Scrum Master',
    'Business Analyst',
    'Otro'
  ];

  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Equipo Colaborativo",
      description: "Trabajá junto a más de 200 profesionales en un ambiente de respeto, diversidad y crecimiento mutuo"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Proyectos Desafiantes",
      description: "Participá en proyectos innovadores que impactan tanto en el sector público como privado a nivel nacional"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Desarrollo Profesional",
      description: "Crecé profesionalmente con capacitaciones constantes, certificaciones y oportunidades de liderazgo"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Reconocimiento",
      description: "Valoramos y reconocemos el talento, el esfuerzo y los logros de cada miembro del equipo"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Tecnología de Vanguardia",
      description: "Trabajá con las últimas tecnologías y herramientas del mercado en proyectos de alto impacto"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Estabilidad y Crecimiento",
      description: "Formá parte de una empresa sólida con más de 15 años en el mercado y crecimiento sostenido"
    }
  ];

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Desarrollo",
      location: "Buenos Aires / Remoto",
      type: "Full-time",
      description: "Buscamos desarrollador senior con experiencia en React, Node.js y bases de datos relacionales."
    },
    {
      title: "Project Manager",
      department: "Gestión de Proyectos",
      location: "Posadas, Misiones",
      type: "Full-time",
      description: "PM certificado en metodologías ágiles para liderar proyectos de transformación digital."
    },
    {
      title: "UX/UI Designer",
      department: "Diseño",
      location: "Buenos Aires / Híbrido",
      type: "Full-time",
      description: "Diseñador con experiencia en productos digitales y metodologías de design thinking."
    },
    {
      title: "DevOps Engineer",
      department: "Infraestructura",
      location: "Remoto",
      type: "Full-time",
      description: "Especialista en AWS/Azure, Docker, Kubernetes y automatización de despliegues."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      cv: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0056A6] to-[#004494] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Trabajá con Nosotros
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Valoramos el talento y la pasión. Únete a nosotros.
          </p>
          <p className="text-lg text-blue-200 max-w-4xl mx-auto leading-relaxed">
            En TSGroup creemos que las mejores soluciones nacen de equipos diversos y talentosos. 
            Si sos apasionado por la tecnología y querés formar parte de proyectos que transforman organizaciones, 
            este es tu lugar.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir TSGroup?
            </h2>
            <div className="w-24 h-1 bg-[#0056A6] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos un ambiente de trabajo excepcional donde tu talento puede florecer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-[#0056A6] text-white rounded-2xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Posiciones Abiertas
            </h2>
            <div className="w-24 h-1 bg-[#0056A6] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oportunidades actuales para formar parte de nuestro equipo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    {position.type}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span className="mr-4">{position.department}</span>
                  <span>{position.location}</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{position.description}</p>
                <button className="w-full bg-[#0056A6] text-white py-3 rounded-lg font-semibold hover:bg-[#004494] transition-colors">
                  Aplicar a esta posición
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">¿No encontrás la posición que buscás?</p>
            <p className="text-gray-600">Envianos tu CV de todas formas. Siempre estamos buscando talento excepcional.</p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Envianos tu CV
            </h2>
            <div className="w-24 h-1 bg-[#0056A6] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Completá el formulario y adjuntá tu CV para formar parte de nuestro equipo
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0056A6] focus:border-transparent transition-colors bg-white"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-2">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    required
                    value={formData.apellido}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0056A6] focus:border-transparent transition-colors bg-white"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0056A6] focus:border-transparent transition-colors bg-white"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0056A6] focus:border-transparent transition-colors bg-white"
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700 mb-2">
                    Ciudad *
                  </label>
                  <input
                    type="text"
                    id="ciudad"
                    name="ciudad"
                    required
                    value={formData.ciudad}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0056A6] focus:border-transparent transition-colors bg-white"
                    placeholder="Tu ciudad"
                  />
                </div>
                
                <div>
                  <label htmlFor="puesto" className="block text-sm font-medium text-gray-700 mb-2">
                    Puesto deseado *
                  </label>
                  <select
                    id="puesto"
                    name="puesto"
                    required
                    value={formData.puesto}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0056A6] focus:border-transparent transition-colors bg-white"
                  >
                    <option value="">Seleccionar puesto</option>
                    {puestos.map((puesto, index) => (
                      <option key={index} value={puesto}>{puesto}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-2">
                  Adjuntar CV *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="cv"
                    className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#0056A6] transition-colors flex items-center justify-center space-x-2 bg-white"
                  >
                    <Upload className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">
                      {formData.cv ? formData.cv.name : 'Seleccionar archivo (PDF, DOC, DOCX)'}
                    </span>
                  </label>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-[#0056A6] text-white font-semibold rounded-lg hover:bg-[#004494] transition-colors transform hover:scale-105 shadow-lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;