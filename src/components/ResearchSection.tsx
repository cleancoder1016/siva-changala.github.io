import React, { useState } from 'react';
import { Microscope, CheckCircle2, Layers } from 'lucide-react';
import { researchProjects } from '../data/resumeData';

type FilterCategory = 'all' | 'statistical-geometry' | 'omics-rnaseq' | 'ai-assurance' | 'generative-ml';

export const ResearchSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filterButtons: { label: string; value: FilterCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Statistical Geometry & HDLSS', value: 'statistical-geometry' },
    { label: 'Genomics & Omics', value: 'omics-rnaseq' },
    { label: 'AI Assurance & Vision', value: 'ai-assurance' },
    { label: 'Generative ML', value: 'generative-ml' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? researchProjects
    : researchProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="research" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Microscope size={14} />
            <span>Research & Innovations</span>
          </div>
          <h2 className="section-title">Investigating Geometry, Omics & Safe AI</h2>
          <p className="section-subtitle">
            Exploring supervised dimensionality reduction, manifold-preserving embeddings, high-dimensional omics imputation, and assurance frameworks for safety-critical vision.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              className={`filter-btn ${activeFilter === btn.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(btn.value)}
              id={`filter-${btn.value}`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Research Cards Grid */}
        <div className="research-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="research-card">
              <div className="card-top">
                <div className="card-badge">
                  <Layers size={13} />
                  <span>{project.categoryLabel}</span>
                </div>
                <div className="card-timeline">{project.timeline}</div>
              </div>

              <h3 className="card-title">{project.title}</h3>
              <p className="card-summary">{project.summary}</p>

              {/* Key Highlights */}
              <div className="card-highlights">
                <ul className="highlight-list">
                  {project.keyHighlights.map((highlight, idx) => (
                    <li key={idx} className="highlight-item">
                      <CheckCircle2 size={16} className="highlight-bullet" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics & Datasets */}
              {project.metricsOrDatasets && project.metricsOrDatasets.length > 0 && (
                <div className="card-datasets">
                  <span className="dataset-label">Datasets & Evaluation Metrics</span>
                  <div className="dataset-pills">
                    {project.metricsOrDatasets.map((metric, idx) => (
                      <span key={idx} className="dataset-pill">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools & Technologies */}
              <div className="card-tools">
                {project.toolsAndTech.map((tool, idx) => (
                  <span key={idx} className="tool-chip">
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
