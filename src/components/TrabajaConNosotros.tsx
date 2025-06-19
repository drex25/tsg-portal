import React, { useState } from 'react';
import { Upload, Send, Users, Briefcase, Heart } from 'lucide-react';

const TrabajaConNosotros = () => {
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
    'Otro'
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
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
  };

  return (
    <section id="trabaja-con-nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trabajá con Nosotros
          </h2>
          <div className="w-24 h-1 bg-[#0056A6] mx-auto mb-6"></div>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Valoramos el talento y la pasión. Únete a nosotros.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            En TSGroup creemos que las mejores soluciones nacen de equipos diversos y talentosos. 
            Si sos apasionado por la tecnología y querés formar parte de proyectos que transforman organizaciones, 
            este es tu lugar.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#0056A6] text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Equipo Colaborativo</h3>
            <p className="text-gray-600">
              Trabajá junto a más de 200 profesionales en un ambiente de respeto y crecimiento mutuo
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#0056A6] text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Briefcase className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Proyectos Desafiantes</h3>
            <p className="text-gray-600">
              Participá en proyectos innovadores que impactan tanto en el sector público como privado
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#0056A6] text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Desarrollo Profesional</h3>
            <p className="text-gray-600">
              Crecé profesionalmente con capacitaciones constantes y oportunidades de liderazgo
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Envianos tu CV
            </h3>
            
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0056A6] focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0056A6] focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0056A6] focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0056A6] focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0056A6] focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0056A6] focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#0056A6] transition-colors flex items-center justify-center space-x-2"
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
      </div>
    </section>
  );
};

export default TrabajaConNosotros;