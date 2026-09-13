import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Server, Terminal, Database, Cpu, CheckCircle } from 'lucide-react';

export default function SkillsMatrix() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('devops');

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

  const categories = t.skills.categories;
  const currentCategory = categories.find((cat) => cat.id === activeTab) || categories[0];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.skills.sectionTag}</span>
          <h2 className="section-title">
            {t.skills.sectionTitle} <span className="text-gradient">{t.skills.sectionTitleGrad}</span>
          </h2>
          <p className="section-subtitle">
            {t.skills.sectionSubtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs-wrapper">
          <div className="skills-tabs">
            {categories.map((cat) => (
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
              {t.skills.categorySummary}
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
