import React from 'react';
import { MapPin, Building, Phone, Mail } from 'lucide-react';

const Locaciones = () => {
  const locations = [
    {
      city: "Buenos Aires",
      address: "La Pampa 1391, Piso 2",
      region: "CABA",
      type: "Oficina Principal"
    },
    {
      city: "Posadas",
      address: "Bolívar 1729",
      region: "Misiones",
      type: "Oficina Regional"
    },
    {
      city: "Posadas",
      address: "Ayacucho 1475",
      region: "Misiones",
      type: "Oficina Operativa"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestras Locaciones
          </h2>
          <div className="w-24 h-1 bg-[#0056A6] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Presencia estratégica en múltiples provincias para brindar 
            un servicio cercano y personalizado
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-[#0056A6] text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Building className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{location.city}</h3>
                  <span className="text-sm text-[#0056A6] font-medium">{location.type}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-gray-900 font-medium">{location.address}</div>
                    <div className="text-gray-600 text-sm">{location.region}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-[#0056A6] mr-4" />
                  <div>
                    <div className="font-medium text-gray-900">Email General</div>
                    <a href="mailto:contacto@tsgroup.com.ar" className="text-[#0056A6] hover:underline">
                      contacto@tsgroup.com.ar
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-[#0056A6] mr-4" />
                  <div>
                    <div className="font-medium text-gray-900">Recursos Humanos</div>
                    <a href="mailto:cv@tsgroup.com.ar" className="text-[#0056A6] hover:underline">
                      cv@tsgroup.com.ar
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Horarios de Atención
              </h3>
              <div className="space-y-2 text-gray-600">
                <div>Lunes a Viernes: 9:00 - 18:00</div>
                <div>Sábados: 9:00 - 13:00</div>
                <div className="text-sm text-gray-500 mt-4">
                  * Los horarios pueden variar según la locación
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locaciones;