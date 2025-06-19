import React, { useState } from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombreApellido: '',
    email: '',
    empresa: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario de contacto enviado:', formData);
    alert('¡Gracias por contactarnos! Te responderemos a la brevedad.');
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-[#0056A6] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tenés un proyecto en mente? Contanos sobre tu desafío y encontremos juntos la mejor solución
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Hablemos de tu proyecto
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nuestro equipo de expertos está listo para escuchar tus necesidades y 
                brindarte una solución personalizada que impulse el crecimiento de tu organización.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#0056A6] text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <div className="space-y-1">
                    <div>
                      <span className="text-sm text-gray-600">General: </span>
                      <a href="mailto:contacto@tsgroup.com.ar" className="text-[#0056A6] hover:underline">
                        contacto@tsgroup.com.ar
                      </a>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">RRHH: </span>
                      <a href="mailto:cv@tsgroup.com.ar" className="text-[#0056A6] hover:underline">
                        cv@tsgroup.com.ar
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#0056A6] text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Oficinas</h4>
                  <div className="space-y-2 text-gray-600">
                    <div>La Pampa 1391, Piso 2, CABA</div>
                    <div>Bolívar 1729, Posadas, Misiones</div>
                    <div>Ayacucho 1475, Posadas, Misiones</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#0056A6] text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Horarios</h4>
                  <div className="space-y-1 text-gray-600">
                    <div>Lunes a Viernes: 9:00 - 18:00</div>
                    <div>Sábados: 9:00 - 13:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <div className="font-medium">Mapa de ubicación</div>
                <div className="text-sm">Buenos Aires & Misiones</div>
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
  );
};

export default Contacto;