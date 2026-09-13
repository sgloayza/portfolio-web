import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Languages } from 'lucide-react';

export default function LanguageToggle({ className = '' }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`lang-toggle ${className}`} title="Cambiar idioma / Change language">
      <Languages size={15} className="lang-icon" />
      <button
        type="button"
        className={`lang-btn ${language === 'es' ? 'active' : ''}`}
        onClick={() => setLanguage('es')}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
      <span className="lang-divider">/</span>
      <button
        type="button"
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
