import React from 'react';
import { Linkedin, Mail, User, Award, Users, Briefcase, Target, Eye, Shield, Zap } from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: "Hilario Iñiguez",
      position: "CEO de Think Solutions Group (TSG)",
      quote: "Hilario es una figura destacada cuya carrera combina tecnología y gestión pública con pasión por la innovación.",
      description: "Su experiencia incluye roles clave como Subdirector General de planificación y estudios, y Subdirector de análisis y control de gestión, en la Administración Gubernamental de Ingresos Públicos de la Ciudad de Buenos Aires, Jefe de Departamento de Agentes de Información en ARBA, Consultor de Gestión en la Presidencia de la Nación, además de su intervención en instituciones educativas como profesor adjunto y ayudante de diplomado en la Universidad Del Este La Plata y en la Universidad Nacional de la Plata.",
      conclusion: "De esta forma Hilario muestra su habilidad para crear soluciones innovadoras, aportando una visión estratégica y técnica robusta, guiando a TSGroup hacia un futuro de crecimiento y excelencia tecnológica.",
      image: "/team/hilario.jpg"
    },
    {
      name: "Lisandro Agüero",
      position: "CTO de Digital Business Transformation en Think Solutions Group",
      quote: "Lisandro es un referente en el ámbito tecnológico cuya carrera está marcada por la excelencia y la innovación. Su trayectoria abarca roles clave en importantes organizaciones como la Gerencia en sistemas en el Club Atlético River Plate, Grupo Clarín y Swiss Medical Group.",
      description: "Con una experiencia sólida en la transformación digital, Lisandro ha dirigido proyectos cruciales que van desde la optimización de infraestructuras hasta la implementación de tecnologías avanzadas. Su habilidad para transformar desafíos en oportunidades le ha permitido impulsar mejoras significativas en cada etapa de su carrera.",
      conclusion: "En TSGroup, Lisandro aplica su vasta experiencia para guiar a la empresa hacia nuevas fronteras de crecimiento y excelencia tecnológica. Su visión estratégica y su capacidad para innovar están transformando la manera en que Think Solutions Group aborda la tecnología, consolidándolo como un líder inspirador en el sector.",
      image: "/team/lisandro.jpg"
    },
    {
      name: "Cristian Coceres",
      position: "Gerente Operativo en Think Solutions Group",
      quote: "Con una importante trayectoria y visión estratégica, Cristian impulsa el éxito de la empresa.",
      description: "Habiendo ocupado roles clave como Socio Fundador en Estudio BLASC, Director de Personal y Asuntos Penitenciarios en el Ministerio de Justicia y Derechos Humanos, y asesor legal en la Secretaría de Minería. Su experiencia en la Municipalidad de La Plata, en la Dirección General de Asuntos Legales y Económicos, Dirección General de asesoramiento Tributario y Catastral en La Plata, le ha proporcionado una perspectiva única y una habilidad excepcional para resolver desafíos complejos.",
      conclusion: "En TSGroup, Cristian optimiza la gestión operativa y fortalece la estructura organizativa, llevando a la empresa al logro de eficiencia y éxito.",
      image: "/team/cristian.jpg"
    },
    {
      name: "Rodrigo Zaldo",
      position: "Gerente General de Administración y Finanzas en Think Solutions Group",
      quote: "Rodrigo es contador público egresado de la Universidad de Buenos Aires. Su vasta experiencia en contabilidad y gestión financiera lo ha consolidado como un referente en su campo. A lo largo de su carrera, ha demostrado un compromiso con la precisión y la innovación, en su trayectoria profesional, pasando por Deloitte Argentina como Audit Senior y luego en Bianchi & Asociados, donde desarrollo experiencia desde Senior Impositivo Contable hasta Socio.",
      description: "Actualmente, como Gerente General de Administración y Finanzas en Think Solutions Group, Rodrigo aporta una perspectiva estratégica profunda y una comprensión integral de las finanzas crucial para el crecimiento y la estabilidad de la empresa.",
      conclusion: "Su dedicación y liderazgo inspiran a su equipo y fortalecen las bases sobre las que se edifica el éxito continuo de TSGroup. Gracias a su experiencia, Rodrigo optimiza los procesos financieros y guía a la empresa hacia una gestión sólida y confiable, impulsando la organización hacia un crecimiento sostenido.",
      image: "/team/rodrigo.jpg"
    }
  ];

  const values = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Eficiencia",
      description: "Optimizamos procesos y recursos para maximizar resultados"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Trabajo en Equipo",
      description: "Colaboramos para alcanzar objetivos comunes excepcionales"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Seguridad",
      description: "Protegemos la información con los más altos estándares"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Confidencialidad",
      description: "Mantenemos la privacidad y discreción en todos nuestros proyectos"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section with new dark theme */}
      <section className="relative py-24 bg-gradient-to-br from-[#0A0E20] via-[#0A0E20] to-[#0056A6] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/5 to-transparent rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <Users className="h-16 w-16 mr-4 text-blue-200" />
            <h1 className="text-5xl md:text-7xl font-bold">
              Sobre Nosotros
            </h1>
          </div>
          <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
          <div className="max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              En Think Solutions somos especialistas en brindar soluciones en materia de management 
              para la toma de decisiones. Nuestro equipo está formado por profesionales altamente 
              capacitados que impulsan la eficiencia mediante tecnología y estrategia.
            </p>
            <p className="text-lg text-blue-200">
              Descubre nuestra misión, visión y valores que nos guían.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Mission & Vision */}
            <div className="space-y-12">
              <div className="group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">Misión</h2>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 border-l-4 border-[#0056A6]">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Conformar equipos de alto rendimiento cuyo objetivo sea diagnosticar de manera 
                    integral la realidad organizacional para la toma de decisiones.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] text-white rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="h-8 w-8" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">Visión</h2>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 border-l-4 border-[#0056A6]">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Constituirnos en un referente a nivel local e internacional por la calidad 
                    de nuestros servicios.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Valores</h2>
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="w-12 h-12 bg-[#0056A6] text-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#0056A6] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Equipo Directivo
            </h2>
            <div className="w-32 h-1 bg-[#0056A6] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Los líderes visionarios que impulsan la innovación, estrategia y crecimiento 
              sostenible de Think Solutions Group
            </p>
          </div>

          <div className="space-y-20">
            {leadership.map((member, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#0A0E20] to-[#0056A6] rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                    <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                      <div className="relative h-96 bg-gradient-to-br from-[#0A0E20] to-[#0056A6] rounded-xl flex items-center justify-center overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover rounded-xl"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="hidden absolute inset-0 flex items-center justify-center">
                          <User className="h-24 w-24 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <div className="text-[#0056A6] font-semibold text-lg mb-6">
                      {member.position}
                    </div>
                  </div>
                  
                  <blockquote className="relative">
                    <div className="absolute -top-2 -left-2 text-6xl text-[#0056A6] opacity-20 font-serif">"</div>
                    <p className="text-lg text-gray-700 italic leading-relaxed pl-8 border-l-4 border-[#0056A6] bg-blue-50 p-6 rounded-r-xl">
                      {member.quote}
                    </p>
                  </blockquote>
                  
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {member.conclusion}
                    </p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex space-x-4 pt-4">
                    <button className="w-12 h-12 bg-[#0056A6] hover:bg-[#004494] text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg">
                      <Linkedin className="h-6 w-6" />
                    </button>
                    <button className="w-12 h-12 bg-gray-100 hover:bg-[#0056A6] text-gray-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg">
                      <Mail className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with dark theme */}
      <section className="py-20 bg-gradient-to-r from-[#0A0E20] to-[#0056A6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Nuestro Impacto
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Números que reflejan nuestro compromiso con la excelencia y el crecimiento
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "+200", label: "Profesionales Especializados", icon: <Users className="h-8 w-8" /> },
              { number: "7", label: "Provincias con Presencia", icon: <Target className="h-8 w-8" /> },
              { number: "+15", label: "Años de Experiencia", icon: <Award className="h-8 w-8" /> },
              { number: "360°", label: "Visión Integral", icon: <Eye className="h-8 w-8" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 border border-gray-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              ¿Querés formar parte de nuestro equipo?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Estamos siempre en búsqueda de talento excepcional para unirse a nuestra familia profesional 
              y contribuir a proyectos que transforman organizaciones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/carreras"
                className="inline-flex items-center px-8 py-4 bg-[#0056A6] text-white font-semibold rounded-lg hover:bg-[#004494] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Briefcase className="h-5 w-5 mr-2" />
                Ver Oportunidades de Carrera
              </a>
              <a 
                href="/contacto"
                className="inline-flex items-center px-8 py-4 border-2 border-[#0056A6] text-[#0056A6] font-semibold rounded-lg hover:bg-[#0056A6] hover:text-white transition-all duration-300"
              >
                Contactanos
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;