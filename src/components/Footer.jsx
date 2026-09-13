import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Copy, 
  Check, 
  FileDown, 
  Terminal, 
  ArrowUp
} from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="container">

        {/* Contact Banner Card */}
        <div className="contact-banner glass-card">
          <div className="contact-banner-glow"></div>
          
          <div className="contact-header">
            <span className="section-tag">{t.footer.sectionTag}</span>
            <h2 className="contact-title">
              {t.footer.contactTitle}
            </h2>
            <p className="contact-subtitle">
              {t.footer.contactSubtitle}
            </p>
          </div>

          <div className="contact-actions-grid">
            {/* Email Box with One-Click Copy */}
            <div className="contact-card">
              <div className="contact-card-icon cyan">
                <Mail size={22} />
              </div>
              <div className="contact-card-details">
                <span className="contact-card-label">{t.footer.emailLabel}</span>
                <span className="contact-card-val">{personalInfo.email}</span>
              </div>
              <div className="contact-card-btns">
                <button 
                  onClick={handleCopyEmail}
                  className={`btn-icon-action ${copied ? 'copied' : ''}`}
                  title="Copiar correo / Copy email"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copied ? t.footer.copiedBtn : t.footer.copyBtn}</span>
                </button>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="btn btn-primary btn-sm"
                >
                  {t.footer.sendBtn}
                </a>
              </div>
            </div>

            {/* Phone / WhatsApp Box */}
            <div className="contact-card">
              <div className="contact-card-icon emerald">
                <Phone size={22} />
              </div>
              <div className="contact-card-details">
                <span className="contact-card-label">{t.footer.phoneLabel}</span>
                <span className="contact-card-val">{personalInfo.phone}</span>
              </div>
              <div className="contact-card-btns">
                <a 
                  href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* LinkedIn Box */}
            <div className="contact-card">
              <div className="contact-card-icon violet">
                <Linkedin size={22} />
              </div>
              <div className="contact-card-details">
                <span className="contact-card-label">{t.footer.linkedinLabel}</span>
                <span className="contact-card-val">in/sgloayza</span>
              </div>
              <div className="contact-card-btns">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  {t.footer.viewProfileBtn}
                </a>
              </div>
            </div>

            {/* Resume Download Box */}
            <div className="contact-card">
              <div className="contact-card-icon cyan">
                <FileDown size={22} />
              </div>
              <div className="contact-card-details">
                <span className="contact-card-label">{t.footer.cvLabel}</span>
                <span className="contact-card-val">{t.footer.cvFormat}</span>
              </div>
              <div className="contact-card-btns">
                <a 
                  href={personalInfo.cvUrl} 
                  download="CV_Sandra_Loayza_2026.pdf" 
                  className="btn btn-primary btn-sm"
                >
                  {t.footer.downloadBtn}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-brand">
            <Terminal size={18} className="cyan" />
            <span>{personalInfo.name} &bull; {new Date().getFullYear()}</span>
          </div>

          <div className="footer-meta">
            <span>{t.footer.footerBuilt}</span>
          </div>

          <button 
            onClick={scrollToTop} 
            className="scroll-top-btn"
            aria-label="Volver arriba / Scroll to top"
            title="Volver arriba / Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

      </div>
    </footer>
  );
}
