import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Menu, X, FileDown, Terminal } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = t.nav.links;

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#about" className="navbar-brand">
          <div className="brand-badge">
            <Terminal size={18} className="brand-icon" />
          </div>
          <div className="brand-text">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-role">{t.nav.roleBadge}</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          <LanguageToggle />

          <a 
            href={personalInfo.cvUrl} 
            download="CV_Sandra_Loayza_2026.pdf" 
            className="btn btn-secondary btn-sm cv-btn"
            title="Descargar Curriculum Vitae en PDF / Download CV"
          >
            <FileDown size={16} />
            <span>{t.nav.downloadCv}</span>
          </a>

          {/* Mobile menu toggle button */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-list">
            <li className="mobile-lang-wrapper">
              <LanguageToggle />
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mobile-cv-wrapper">
              <a 
                href={personalInfo.cvUrl} 
                download="CV_Sandra_Loayza_2026.pdf" 
                className="btn btn-primary btn-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FileDown size={16} />
                <span>{t.nav.downloadCvFull}</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
