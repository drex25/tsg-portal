import React from 'react';
import { Target, Eye, Heart, Shield, Users, Briefcase, Award, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Eficiencia",
      description: "Optimizamos procesos para maximizar resultados y generar valor agregado en cada proyecto que desarrollamos."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Seguridad",
      description: "Protegemos la información con los más altos estándares de seguridad y confidencialidad."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Trabajo en Equipo",
      description: "Colaboramos estrechamente para alcanzar objetivos comunes y superar expectativas."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excelencia",
      description: "Buscamos la perfección en cada detalle, entregando soluciones de la más alta calidad."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovación",
      description: "Adoptamos las últimas tecnologías para crear soluciones disruptivas y efectivas."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Compromiso",
      description: "Nos comprometemos con el éxito de nuestros clientes y el crecimiento mutuo."
    }
  ];

  const milestones = [
    { year: "2009", title: "Fundación", description: "Inicio de TSGroup con una visión clara de transformación digital" },
    { year: "2015", title: "Expansión", description: "Apertura de oficinas en múltiples provincias argentinas" },
    { year: "2020", title: "Crecimiento", description: "Alcanzamos los 200+ profesionales en nuestro equipo" },
    { year: "2024", title: "Liderazgo", description: "Consolidación como referente en soluciones tecnológicas" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section with new dark theme */}
      <section className="relative py-20 bg-gradient-to-br from-[#0A0E20] via-[#0A0E20] to-[#0056A6] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/5 to-transparent rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Quiénes Somos
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Somos un equipo de más de 200 profesionales con presencia en 7 provincias, 
              especializados en brindar soluciones tecnológicas integrales para el sector público y privado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-4xl font-bold mb-2">+200</div>
              <div className="text-blue-200">Profesionales</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-4xl font-bold mb-2">7</div>
              <div className="text-blue-200">Provincias</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-4xl font-bold mb-2">+15</div>
              <div className="text-blue-200">Años de experiencia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#0056A6] text-white rounded-lg flex items-center justify-center mr-4">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Nuestra Visión</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Ser la empresa líder en soluciones tecnológicas, reconocida por nuestra capacidad de 
                  innovación y por generar valor agregado en cada proyecto que desarrollamos, 
                  contribuyendo al crecimiento y modernización de nuestros clientes.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#0056A6] text-white rounded-lg flex items-center justify-center mr-4">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Nuestra Misión</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Desarrollar e implementar soluciones tecnológicas innovadoras que optimicen 
                  los procesos de nuestros clientes, brindando un servicio de excelencia 
                  con un enfoque 360° que abarca desde la consultoría hasta la implementación y soporte.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#0A0E20] to-[#0056A6] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-8">Nuestro Alcance</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">+200 Profesionales</div>
                      <div className="text-sm opacity-90">Equipo multidisciplinario especializado</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">7 Provincias</div>
                      <div className="text-sm opacity-90">Presencia nacional estratégica</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <Heart className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Sector Público y Privado</div>
                      <div className="text-sm opacity-90">Enfoque integral y versátil</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <div className="w-24 h-1 bg-[#0056A6] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo y definen nuestra cultura organizacional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-[#0056A6] text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0056A6] transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestra Historia
            </h2>
            <div className="w-24 h-1 bg-[#0056A6] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un recorrido de crecimiento, innovación y compromiso con la excelencia
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#0056A6]"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="text-3xl font-bold text-[#0056A6] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-[#0056A6] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;