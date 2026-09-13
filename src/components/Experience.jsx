import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.experience.sectionTag}</span>
          <h2 className="section-title">
            {t.experience.sectionTitle} <span className="text-gradient">{t.experience.sectionTitleGrad}</span>
          </h2>
          <p className="section-subtitle">
            {t.experience.sectionSubtitle}
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          <div className="timeline-items">
            {t.experience.items.map((item, index) => (
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
