import React from 'react';
import { 
  Smartphone, 
  Database, 
  Shield, 
  Settings, 
  Calculator, 
  Camera, 
  Phone,
  Code,
  BarChart3,
  Cloud,
  Cpu,
  Globe
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Desarrollo de Apps",
      description: "Aplicaciones móviles y web personalizadas con tecnología de vanguardia, diseñadas para optimizar la experiencia del usuario y maximizar la eficiencia operativa.",
      features: ["Apps iOS y Android", "Progressive Web Apps", "Aplicaciones híbridas", "UI/UX Design"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Governance",
      description: "Gestión y gobierno de datos para optimizar la toma de decisiones estratégicas con información confiable y actualizada.",
      features: ["Arquitectura de datos", "Data Quality", "Políticas de datos", "Compliance"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Identidad Digital",
      description: "Soluciones de autenticación y verificación de identidad seguras que protegen la información sensible y garantizan el acceso autorizado.",
      features: ["Autenticación biométrica", "Single Sign-On", "Gestión de identidades", "Certificados digitales"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Gerenciamiento de Proyectos",
      description: "Gestión integral de proyectos tecnológicos con metodologías ágiles que aseguran entregas exitosas en tiempo y forma.",
      features: ["Metodologías ágiles", "PMO", "Gestión de riesgos", "Control de calidad"]
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Consultoría Tributaria",
      description: "Asesoramiento especializado en sistemas tributarios y fiscales para optimizar procesos y garantizar el cumplimiento normativo.",
      features: ["Sistemas tributarios", "Compliance fiscal", "Automatización", "Reportes regulatorios"]
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Videovigilancia",
      description: "Sistemas de seguridad y monitoreo con tecnología avanzada para proteger activos y garantizar la seguridad integral.",
      features: ["Cámaras IP", "Análisis inteligente", "Monitoreo 24/7", "Integración con alarmas"]
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Center",
      description: "Soluciones de atención al cliente y soporte técnico especializado que mejoran la experiencia del usuario y optimizan la comunicación.",
      features: ["Contact Center", "IVR inteligente", "CRM integrado", "Analytics de llamadas"]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Desarrollo Web",
      description: "Sitios web corporativos y plataformas digitales a medida que potencian la presencia online y facilitan la interacción con clientes.",
      features: ["Sitios corporativos", "E-commerce", "Portales web", "APIs REST"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Business Intelligence",
      description: "Análisis de datos y reportes inteligentes que transforman información en conocimiento estratégico para la toma de decisiones.",
      features: ["Dashboards interactivos", "Data Mining", "Reportes automáticos", "KPIs personalizados"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Computing",
      description: "Migración y gestión de infraestructura en la nube para optimizar costos, escalabilidad y disponibilidad de servicios.",
      features: ["Migración a la nube", "AWS/Azure", "Backup automático", "Escalabilidad"]
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Inteligencia Artificial",
      description: "Implementación de soluciones de IA y machine learning para automatizar procesos y generar insights valiosos.",
      features: ["Machine Learning", "Procesamiento de lenguaje", "Visión artificial", "Chatbots inteligentes"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Transformación Digital",
      description: "Consultoría integral para la modernización de procesos y la adopción de tecnologías disruptivas.",
      features: ["Estrategia digital", "Automatización", "Change management", "ROI optimization"]
    }
  ];

  const sectors = [
    {
      title: "Sector Público",
      description: "Soluciones especializadas para organismos gubernamentales",
      items: ["Gobierno electrónico", "Gestión tributaria", "Servicios ciudadanos", "Transparencia"]
    },
    {
      title: "Sector Privado",
      description: "Tecnología empresarial para maximizar la competitividad",
      items: ["ERP/CRM", "E-commerce", "Automatización", "Analytics"]
    },
    {
      title: "Sector Financiero",
      description: "Soluciones seguras para instituciones financieras",
      items: ["Core bancario", "Pagos digitales", "Compliance", "Ciberseguridad"]
    }
  ];

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
            Nuestros Servicios
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Ofrecemos una amplia gama de servicios tecnológicos diseñados para impulsar 
            la transformación digital de tu organización con soluciones innovadoras y efectivas
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0056A6] to-[#004494] text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0056A6] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-[#0056A6] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sectores que Atendemos
            </h2>
            <div className="w-24 h-1 bg-[#0056A6] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiencia especializada en diferentes sectores con soluciones adaptadas a cada industria
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{sector.title}</h3>
                <p className="text-gray-600 mb-6">{sector.description}</p>
                <ul className="space-y-3">
                  {sector.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-[#0056A6] rounded-full mr-3"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0056A6] to-[#004494]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Necesitás una solución personalizada?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Nuestro equipo de expertos está listo para desarrollar la solución perfecta 
            que se adapte a las necesidades específicas de tu organización
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-white text-[#0056A6] font-semibold rounded-lg hover:bg-blue-50 transition-colors transform hover:scale-105"
            >
              Consultanos ahora
            </a>
            <a 
              href="/nosotros"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0056A6] transition-colors"
            >
              Conocé más sobre nosotros
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;