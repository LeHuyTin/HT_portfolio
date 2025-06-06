import React from "react";
import "./ProjectDetail.css";

const ProjectDetail = ({ project, onClose }) => {
  return (
    <div className="project-detail-overlay">
      <div className="project-detail-container">
        {/* Header */}
        <div className="project-detail-header">
          <button className="close-button" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
            </svg>
          </button>
          <div className="project-detail-title-section">
            <h1 className="project-detail-title">{project.title}</h1>
            <div className="project-detail-links">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="detail-action-btn github-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </a>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="project-detail-content">
          {/* Main Image */}
          <div className="project-detail-image-section">
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-detail-main-image"
            />
          </div>

          {/* Project Info */}
          <div className="project-detail-info">
            {/* Technologies */}
            <div className="detail-section">
              <h3 className="detail-section-title">Technologies Used</h3>
              <div className="detail-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="detail-tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="detail-section">
              <h3 className="detail-section-title">Project Overview</h3>
              <p className="detail-description">{project.fullDescription}</p>
            </div>

            {/* Features */}
            <div className="detail-section">
              <h3 className="detail-section-title">Key Features</h3>
              <ul className="detail-features-list">
                {project.features.map((feature, index) => (
                  <li key={index} className="detail-feature-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="feature-icon">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="detail-section">
              <h3 className="detail-section-title">Challenges & Solutions</h3>
              <p className="detail-challenges">{project.challenges}</p>
            </div>

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="detail-section">
                <h3 className="detail-section-title">Screenshots</h3>
                <div className="detail-screenshots">
                  {project.screenshots.map((screenshot, index) => (
                    <img 
                      key={index}
                      src={screenshot} 
                      alt={`${project.title} Screenshot ${index + 1}`} 
                      className="detail-screenshot"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;