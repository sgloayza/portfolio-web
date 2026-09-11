import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Server, Terminal, Database, Cpu, CheckCircle } from 'lucide-react';

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const getTabIcon = (iconName) => {
    switch (iconName) {
      case 'Server':
        return <Server size={18} />;
      case 'Terminal':
        return <Terminal size={18} />;
      case 'Database':
        return <Database size={18} />;
      case 'Cpu':
        return <Cpu size={18} />;
      default:
        return <Terminal size={18} />;
    }
  };

  const currentCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Competencias Técnicas</span>
          <h2 className="section-title">
            Especialización y <span className="text-gradient">Stack Tecnológico</span>
          </h2>
          <p className="section-subtitle">
            Un perfil híbrido que une el desarrollo backend asíncrono con la automatización de infraestructura y la comunicación con dispositivos de hardware en campo.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs-wrapper">
          <div className="skills-tabs">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`skill-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              >
                {getTabIcon(cat.icon)}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="skills-content-card glass-card">
          <div className="category-header">
            <div className="category-badge">
              {getTabIcon(currentCategory.icon)}
              <span>{currentCategory.name}</span>
            </div>
            <span className="category-summary">
              Dominio de herramientas de nivel producción y arquitectura
            </span>
          </div>

          <div className="skills-grid">
            {currentCategory.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-item-info">
                  <div className="skill-name-wrapper">
                    <CheckCircle size={15} className="skill-check-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-progress-bar">
                  <div 
                    className="skill-progress-fill" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
