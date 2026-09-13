import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import SkillsMatrix from './components/SkillsMatrix';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
}
