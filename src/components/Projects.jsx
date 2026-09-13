import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, Layers, CheckCircle2, X, Zap, AlertTriangle, Cpu, Play } from 'lucide-react';
import EdgeClusterSimulator from './EdgeClusterSimulator';

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [showSimulator, setShowSimulator] = useState(false);

  const projectsList = t.projects.items;
  const selectedProject = projectsList.find((p) => p.id === selectedProjectId);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.projects.sectionTag}</span>
          <h2 className="section-title">
            {t.projects.sectionTitle} <span className="text-gradient">{t.projects.sectionTitleGrad}</span>
          </h2>
          <p className="section-subtitle">
            {t.projects.sectionSubtitle}
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {projectsList.map((project) => {
            const hasSimulator = project.id === 'orchestration-installer';
            return (
              <div key={project.id} className="project-card glass-card">
                <div className="project-card-header">
                  <span className="project-badge">{project.badge}</span>
                  <span className="project-category">{project.category}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.cardDescription || project.description}</p>

                {/* Highlights List */}
                <div className="project-highlights">
                  <span className="highlights-title">{t.projects.highlightsLabel}</span>
                  <ul className="highlights-list">
                    {project.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="highlight-item">
                        <CheckCircle2 size={15} className="highlight-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics pill */}
                <div className="project-metrics-banner">
                  <Zap size={14} className="metric-banner-icon" />
                  <span>{project.metrics}</span>
                </div>

                {/* Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <div className="project-card-actions" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {hasSimulator && (
                    <button
                      className="btn btn-primary btn-sm simulator-trigger-btn"
                      onClick={() => setShowSimulator(true)}
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <Play size={14} />
                      <span>{t.projects.btnSimulator || '🎮 Simulador en Vivo'}</span>
                    </button>
                  )}
                  <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
                    <button 
                      className="btn btn-secondary btn-sm"
                      onClick={() => setSelectedProjectId(project.id)}
                      style={{ flex: 1 }}
                    >
                      <Layers size={15} />
                      <span>{t.projects.btnArchitecture}</span>
                    </button>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
                      >
                        <ExternalLink size={14} />
                        <span>{t.projects.btnGithub}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Architecture Modal */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProjectId(null)}>
            <div 
              className="modal-container glass-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <span className="project-badge">{selectedProject.badge}</span>
                  <h3 className="modal-title">{selectedProject.title}</h3>
                  <span className="modal-subtitle">{selectedProject.category}</span>
                </div>
                <button 
                  className="modal-close-btn"
                  onClick={() => setSelectedProjectId(null)}
                  aria-label="Cerrar modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body">
                {/* Problem Section */}
                {selectedProject.problem ? (
                  <div className="modal-section modal-section-problem">
                    <div className="modal-section-badge problem-badge">
                      <AlertTriangle size={14} />
                      <span>{t.projects.modalProblemTitle}</span>
                    </div>
                    <p>{selectedProject.problem}</p>
                  </div>
                ) : null}

                {/* Solution Section */}
                {selectedProject.solution ? (
                  <div className="modal-section modal-section-solution">
                    <div className="modal-section-badge solution-badge">
                      <Cpu size={14} />
                      <span>{t.projects.modalSolutionTitle}</span>
                    </div>
                    <p>{selectedProject.solution}</p>
                  </div>
                ) : (
                  <div className="modal-section">
                    <h4>{t.projects.modalOverview}</h4>
                    <p>{selectedProject.description}</p>
                  </div>
                )}

                <div className="modal-section">
                  <h4>{t.projects.modalHighlights}</h4>
                  <ul className="modal-highlights-list">
                    {selectedProject.highlights.map((item, idx) => (
                      <li key={idx} className="modal-highlight-item">
                        <CheckCircle2 size={16} className="highlight-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h4>{t.projects.modalImpact}</h4>
                  <div className="modal-metric-card">
                    <Zap size={18} className="cyan" />
                    <strong>{selectedProject.metrics}</strong>
                  </div>
                </div>

                <div className="modal-section">
                  <h4>{t.projects.modalStack}</h4>
                  <div className="project-tags">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="tech-tag active-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer" style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                {selectedProject.id === 'orchestration-installer' && (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => {
                      setSelectedProjectId(null);
                      setShowSimulator(true);
                    }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <Play size={15} />
                    <span>{t.projects.btnSimulator || '🎮 Abrir Simulador en Vivo'}</span>
                  </button>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                  >
                    <ExternalLink size={16} />
                    <span>{t.projects.modalViewGithub}</span>
                  </a>
                )}
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => setSelectedProjectId(null)}
                >
                  {t.projects.modalClose}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Live Interactive Cluster Simulator Modal */}
        {showSimulator && (
          <EdgeClusterSimulator onClose={() => setShowSimulator(false)} />
        )}

      </div>
    </section>
  );
}
