import React from 'react';
import { Star, Award, Handshake } from 'lucide-react';

const Clientes = () => {
  const clientLogos = [
    "Cliente 1", "Cliente 2", "Cliente 3", "Cliente 4", 
    "Cliente 5", "Cliente 6", "Cliente 7", "Cliente 8"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Quiénes confían en nosotros
          </h2>
          <div className="w-24 h-1 bg-[#0056A6] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Construimos relaciones a largo plazo basadas en la confianza, 
            la excelencia y el compromiso con el éxito de nuestros clientes
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#0056A6] text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Star className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Excelencia</h3>
            <p className="text-gray-600">
              Comprometidos con la calidad y la satisfacción del cliente en cada proyecto
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#0056A6] text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Handshake className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Confianza</h3>
            <p className="text-gray-600">
              Relaciones sólidas construidas sobre la transparencia y el profesionalismo
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#0056A6] text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Resultados</h3>
            <p className="text-gray-600">
              Soluciones efectivas que generan valor real para nuestros clientes
            </p>
          </div>
        </div>

        {/* Client Logos */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Nuestros Partners y Clientes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 flex items-center justify-center h-24 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-gray-400 font-semibold text-center">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-12 border border-gray-100">
            <blockquote className="text-2xl text-gray-700 italic mb-6">
              "TSGroup ha sido un socio estratégico fundamental en nuestra transformación digital. 
              Su profesionalismo y capacidad técnica superaron nuestras expectativas."
            </blockquote>
            <div className="text-[#0056A6] font-semibold">
              — Cliente Satisfecho
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientes;