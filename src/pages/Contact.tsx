import React, { useState } from 'react';
import { Mail, MapPin, Send, Phone, Clock, Building } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombreApellido: '',
    email: '',
    empresa: '',
    mensaje: ''
  });

  const locations = [
    {
      city: "Buenos Aires",
      address: "La Pampa 1391, Piso 2",
      region: "CABA",
      type: "Oficina Principal",
      isMain: true
    },
    {
      city: "Posadas",
      address: "Bolívar 1729",
      region: "Misiones",
      type: "Oficina Regional",
      isMain: false
    },
    {
      city: "Posadas",
      address: "Ayacucho 1475",
      region: "Misiones",
      type: "Oficina Operativa",
      isMain: false
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario de contacto enviado:', formData);
    alert('¡Gracias por contactarnos! Te responderemos a la brevedad.');
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
            Contacto
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            ¿Tenés un proyecto en mente? Contanos sobre tu desafío y encontremos juntos la mejor solución
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Hablemos de tu proyecto
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  Nuestro equipo de expertos está listo para escuchar tus necesidades y 
                  brindarte una solución personalizada que impulse el crecimiento de tu organización.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#0056A6] text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">Email</h3>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm text-gray-600">General: </span>
                        <a href="mailto:contacto@tsgroup.com.ar" className="text-[#0056A6] hover:underline font-medium">
                          contacto@tsgroup.com.ar
                        </a>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">RRHH: </span>
                        <a href="mailto:cv@tsgroup.com.ar" className="text-[#0056A6] hover:underline font-medium">
                          cv@tsgroup.com.ar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#0056A6] text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">Horarios de Atención</h3>
                    <div className="space-y-1 text-gray-600">
                      <div className="font-medium">Lunes a Viernes: 9:00 - 18:00</div>
                      <div className="font-medium">Sábados: 9:00 - 13:00</div>
                      <div className="text-sm text-gray-500 mt-2">
                        * Los horarios pueden variar según la locación
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#0056A6] text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">Respuesta Garantizada</h3>
                    <div className="text-gray-600">
                      <div>Respondemos todas las consultas en menos de 24 horas</div>
                      <div className="text-sm text-gray-500 mt-1">Lunes a viernes en horario comercial</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envianos tu consulta
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombreApellido" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    id="nombreApellido"
                    name="nombreApellido"
                    required
                    value={formData.nombreApellido}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0056A6] focus:border-transparent transition-colors bg-white"
                    placeholder="Tu nombre completo"
                  />
                </div>

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
                  <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0056A6] focus:border-transparent transition-colors bg-white"
                    placeholder="Nombre de tu empresa (opcional)"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    maxLength={500}
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0056A6] focus:border-transparent transition-colors bg-white resize-none"
                    placeholder="Contanos sobre tu proyecto o consulta (máximo 500 caracteres)"
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.mensaje.length}/500
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-[#0056A6] text-white font-semibold rounded-lg hover:bg-[#004494] transition-colors transform hover:scale-105 shadow-lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestras Oficinas
            </h2>
            <div className="w-24 h-1 bg-[#0056A6] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Presencia estratégica en múltiples ubicaciones para brindar un servicio cercano y personalizado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow ${location.isMain ? 'ring-2 ring-[#0056A6] ring-opacity-20' : ''}`}>
                <div className="flex items-start mb-6">
                  <div className={`w-12 h-12 ${location.isMain ? 'bg-[#0056A6]' : 'bg-gray-600'} text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                    <Building className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{location.city}</h3>
                    <span className={`text-sm font-medium ${location.isMain ? 'text-[#0056A6]' : 'text-gray-600'}`}>
                      {location.type}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-gray-900 font-medium">{location.address}</div>
                    <div className="text-gray-600 text-sm">{location.region}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ubicación
            </h2>
            <p className="text-gray-600">
              Encontranos en nuestras oficinas principales
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="h-16 w-16 mx-auto mb-4" />
              <div className="text-xl font-medium mb-2">Mapa Interactivo</div>
              <div className="text-sm">Buenos Aires & Misiones</div>
              <div className="text-xs mt-2 text-gray-400">
                Aquí se integraría un mapa interactivo con nuestras ubicaciones
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;