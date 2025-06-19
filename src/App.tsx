import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Alliances from './pages/Alliances';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/equipo" element={<Team />} />
          <Route path="/carreras" element={<Careers />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/alianzas/socios" element={<Alliances />} />
          {/* Placeholder routes for other megamenu items */}
          <Route path="/presencias/oficinas" element={<div className="pt-16 p-8"><h1>Oficinas Regionales - En desarrollo</h1></div>} />
          <Route path="/acciones/impacto-social" element={<div className="pt-16 p-8"><h1>Impacto Social - En desarrollo</h1></div>} />
          <Route path="/sectores/ciudad-inteligente" element={<div className="pt-16 p-8"><h1>Ciudad Inteligente - En desarrollo</h1></div>} />
          <Route path="/sectores/administracion-publica" element={<div className="pt-16 p-8"><h1>Administración Pública - En desarrollo</h1></div>} />
          <Route path="/sectores/industria-energia" element={<div className="pt-16 p-8"><h1>Industria y Energía - En desarrollo</h1></div>} />
          <Route path="/sectores/salud" element={<div className="pt-16 p-8"><h1>Servicios de Salud - En desarrollo</h1></div>} />
          <Route path="/sectores/entretenimiento" element={<div className="pt-16 p-8"><h1>Entretenimiento y Eventos - En desarrollo</h1></div>} />
          <Route path="/integridad/linea-etica" element={<div className="pt-16 p-8"><h1>Línea Ética - En desarrollo</h1></div>} />
          <Route path="/integridad/auditorias" element={<div className="pt-16 p-8"><h1>Auditorías Externas - En desarrollo</h1></div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;