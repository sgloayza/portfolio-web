import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  Linkedin, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Cpu, 
  ShieldCheck, 
  Terminal,
  FileDown
} from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="hero-section">
      <div className="container hero-container">
        
        {/* Left: Text Information */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            <span className="badge-text">Disponible para roles de Software Engineer & DevOps</span>
          </div>

          <h1 className="hero-title">
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          <h2 className="hero-subtitle">
            Ingeniera en Ciencias Computacionales &bull; DevOps &bull; Backend &bull; IoT
          </h2>

          <div className="hero-meta">
            <div className="meta-item">
              <GraduationCap size={17} className="meta-icon cyan" />
              <span>{personalInfo.education}</span>
            </div>
            <div className="meta-item">
              <MapPin size={17} className="meta-icon violet" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <p className="hero-description">
            {personalInfo.summary}
          </p>

          {/* Quick Technical Badges */}
          <div className="tech-pills">
            <span className="tech-pill">
              <Terminal size={14} /> Ansible Automation
            </span>
            <span className="tech-pill">
              <Cpu size={14} /> Hardware & IoT (Orange Pi)
            </span>
            <span className="tech-pill">
              <ShieldCheck size={14} /> Kafka CDC & Microservicios
            </span>
          </div>

          {/* Call to Actions */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>Ver Casos de Estudio</span>
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <Mail size={18} />
              <span>Contactar</span>
            </a>

            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn"
              title="Perfil de LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right: Profile Visual & Tech Frame */}
        <div className="hero-visual">
          <div className="avatar-card-wrapper">
            <div className="avatar-card glass-card">
              <div className="avatar-glow-ring">
                <img 
                  src={personalInfo.avatarUrl} 
                  alt={personalInfo.name} 
                  className="avatar-image"
                  onError={(e) => {
                    e.currentTarget.src = `${import.meta.env.BASE_URL}sandra_loayza.jpg`;
                  }}
                />
              </div>

              <div className="avatar-info-box">
                <div className="avatar-name">{personalInfo.name}</div>
                <div className="avatar-role">Software Engineer @ SIEMAV</div>
                <div className="avatar-specs">
                  <span className="spec-tag">Python/FastAPI</span>
                  <span className="spec-tag">Ansible IaC</span>
                  <span className="spec-tag">IoT MQTT</span>
                </div>
              </div>

              {/* Floating micro-cards */}
              <div className="floating-card floating-card-top">
                <div className="floating-card-icon">⚡</div>
                <div className="floating-card-text">
                  <span className="floating-title">115+ Gateways</span>
                  <span className="floating-sub">Configurados en campo</span>
                </div>
              </div>

              <div className="floating-card floating-card-bottom">
                <div className="floating-card-icon">🛡️</div>
                <div className="floating-card-text">
                  <span className="floating-title">3,600+ Horas</span>
                  <span className="floating-sub">YouTrack registradas</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
