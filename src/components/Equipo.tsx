import React from 'react';
import { Linkedin, Mail, User } from 'lucide-react';

const Equipo = () => {
  const team = [
    {
      name: "Hilario Iñiguez",
      position: "CEO",
      description: "Líder visionario con más de 15 años de experiencia en tecnología y gestión empresarial. Especialista en transformación digital y estrategia corporativa.",
      image: "/team/hilario.jpg"
    },
    {
      name: "Lisandro Agüero",
      position: "CTO",
      description: "Experto en arquitectura de software y tecnologías emergentes. Responsable de la dirección técnica y la innovación en todos nuestros proyectos.",
      image: "/team/lisandro.jpg"
    },
    {
      name: "Cristian Coceres",
      position: "Gerente Operativo",
      description: "Especialista en gestión de operaciones y optimización de procesos. Garantiza la excelencia en la entrega de todos nuestros servicios.",
      image: "/team/cristian.jpg"
    },
    {
      name: "Rodrigo Zaldo",
      position: "Director de Finanzas",
      description: "Contador público con amplia experiencia en gestión financiera y planificación estratégica. Responsable de la salud financiera de la organización.",
      image: "/team/rodrigo.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestro Equipo Directivo
          </h2>
          <div className="w-24 h-1 bg-[#0056A6] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conocé a los líderes que impulsan la visión y el crecimiento de TSGroup
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Image */}
                <div className="relative h-64 bg-gradient-to-br from-[#0056A6] to-[#004494] flex items-center justify-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden absolute inset-0 flex items-center justify-center">
                    <User className="h-16 w-16 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <div className="text-[#0056A6] font-semibold mb-4">
                    {member.position}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {member.description}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex space-x-3">
                    <button className="w-10 h-10 bg-gray-100 hover:bg-[#0056A6] text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </button>
                    <button className="w-10 h-10 bg-gray-100 hover:bg-[#0056A6] text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-colors">
                      <Mail className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Querés formar parte de nuestro equipo?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Estamos siempre en búsqueda de talento excepcional para unirse a nuestra familia profesional
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('trabaja-con-nosotros');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#0056A6] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#004494] transition-colors transform hover:scale-105"
            >
              Ver Oportunidades
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipo;