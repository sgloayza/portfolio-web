import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import SkillsMatrix from './components/SkillsMatrix';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import EdgeClusterSimulator from './components/EdgeClusterSimulator';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      if (window.location.hash.startsWith('#/simulator')) {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isSimulatorView = currentHash === '#/simulator' || currentHash.startsWith('#/simulator');

  const handleBackToPortfolio = () => {
    window.location.hash = '#projects';
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <LanguageProvider>
      {isSimulatorView ? (
        <EdgeClusterSimulator onBack={handleBackToPortfolio} />
      ) : (
        <div className="app-layout">
          <Navbar />
          <main>
            <Hero />
            <MetricsBar />
            <SkillsMatrix />
            <Projects />
            <Experience />
          </main>
          <Footer />
        </div>
      )}
    </LanguageProvider>
  );
}

