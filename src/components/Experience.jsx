import React from 'react';
import { experienceTimeline } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Trayectoria Profesional</span>
          <h2 className="section-title">
            Experiencia y <span className="text-gradient">Liderazgo Técnico</span>
          </h2>
          <p className="section-subtitle">
            Crecimiento sostenido desde la mentoría académica y soporte de sistemas hasta el liderazgo en automatización e infraestructura distribuida.
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          <div className="timeline-items">
            {experienceTimeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <Briefcase size={16} className="marker-icon" />
                </div>

                <div className="timeline-content glass-card">
                  <div className="timeline-card-header">
                    <div>
                      <h3 className="timeline-role">{item.role}</h3>
                      <span className="timeline-company">{item.company}</span>
                    </div>
                    <div className="timeline-meta">
                      <span className="timeline-badge date-badge">
                        <Calendar size={13} /> {item.period}
                      </span>
                      <span className="timeline-badge location-badge">
                        <MapPin size={13} /> {item.location}
                      </span>
                    </div>
                  </div>

                  <p className="timeline-desc">{item.description}</p>

                  <ul className="timeline-bullets">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="timeline-bullet-item">
                        <CheckCircle size={14} className="bullet-icon" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
