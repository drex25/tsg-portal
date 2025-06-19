import React from 'react';
import { Target, Eye, Heart, Shield, Users, Briefcase } from 'lucide-react';

const QuienesSomos = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Eficiencia",
      description: "Optimizamos procesos para maximizar resultados"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Seguridad",
      description: "Protegemos la información con los más altos estándares"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Trabajo en Equipo",
      description: "Colaboramos para alcanzar objetivos comunes"
    }
  ];

  return (
    <section id="quienes-somos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Quiénes Somos
          </h2>
          <div className="w-24 h-1 bg-[#0056A6] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos un equipo de más de 200 profesionales con presencia en 7 provincias, 
            especializados en brindar soluciones tecnológicas integrales tanto para el sector público como privado.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 text-[#0056A6] mr-3" />
                Nuestra Visión
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ser la empresa líder en soluciones tecnológicas, reconocida por nuestra capacidad de 
                innovación y por generar valor agregado en cada proyecto que desarrollamos, 
                contribuyendo al crecimiento y modernización de nuestros clientes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Briefcase className="h-6 w-6 text-[#0056A6] mr-3" />
                Nuestra Misión
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Desarrollar e implementar soluciones tecnológicas innovadoras que optimicen 
                los procesos de nuestros clientes, brindando un servicio de excelencia 
                con un enfoque 360° que abarca desde la consultoría hasta la implementación y soporte.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#0056A6] to-[#004494] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Nuestro Alcance</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">+200 Profesionales</div>
                    <div className="text-sm opacity-90">Equipo multidisciplinario</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold">7 Provincias</div>
                    <div className="text-sm opacity-90">Presencia nacional</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Sector Público y Privado</div>
                    <div className="text-sm opacity-90">Enfoque integral</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-[#0056A6] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;