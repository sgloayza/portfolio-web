import React, { useState } from 'react';
import { featuredProjects } from '../data/portfolioData';
import { ExternalLink, Layers, CheckCircle2, X, Sparkles, Server, Zap } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Casos de Estudio & Proyectos</span>
          <h2 className="section-title">
            Arquitectura e <span className="text-gradient">Impacto Real</span>
          </h2>
          <p className="section-subtitle">
            Proyectos de ingeniería diseñados para resolver cuellos de botella de infraestructura, streaming masivo de eventos y conectividad con hardware en campo.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-card-header">
                <span className="project-badge">{project.badge}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* Highlights List */}
              <div className="project-highlights">
                <span className="highlights-title">Logros clave:</span>
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
              <div className="project-card-actions" style={{ display: 'flex', gap: '8px' }}>
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => setSelectedProject(project)}
                  style={{ flex: 1 }}
                >
                  <Layers size={15} />
                  <span>Arquitectura</span>
                </button>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
                  >
                    <ExternalLink size={14} />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Architecture Modal */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
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
                  onClick={() => setSelectedProject(null)}
                  aria-label="Cerrar modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <h4>Descripción de la Solución</h4>
                  <p>{selectedProject.description}</p>
                </div>

                <div className="modal-section">
                  <h4>Hitos y Contribuciones de Ingeniería</h4>
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
                  <h4>Métrica de Impacto</h4>
                  <div className="modal-metric-card">
                    <Zap size={18} className="cyan" />
                    <strong>{selectedProject.metrics}</strong>
                  </div>
                </div>

                <div className="modal-section">
                  <h4>Stack Tecnológico Utilizado</h4>
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
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                  >
                    <ExternalLink size={16} />
                    <span>Ver Código en GitHub</span>
                  </a>
                )}
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => setSelectedProject(null)}
                >
                  Cerrar Detalle
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
