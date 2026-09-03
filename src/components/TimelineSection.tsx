import React, { useState } from 'react';
import { GraduationCap, Briefcase, CheckCircle2, FolderGit2 } from 'lucide-react';
import { education, experience, priorAcademicProjects } from '../data/resumeData';

export const TimelineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'education' | 'experience'>('all');

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic & Professional Journey</span>
          </div>
          <h2 className="section-title">Education & Experience</h2>
          <p className="section-subtitle">
            From foundational engineering and industry software development to advanced Ph.D. research in high-dimensional omics and healthcare AI.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="filter-tabs">
          <button
            className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Milestones
          </button>
          <button
            className={`filter-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <GraduationCap size={14} />
            Education
          </button>
          <button
            className={`filter-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <Briefcase size={14} />
            Research & Industry
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '40px' }}>
          {/* Education Column */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <GraduationCap size={20} color="var(--accent-cyan)" />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Academic Degrees</h3>
              </div>

              <div className="timeline-wrapper">
                {education.map((item) => (
                  <div key={item.id} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <div className="timeline-title">{item.degree}</div>
                        <div className="timeline-period">{item.period}</div>
                      </div>

                      <div className="timeline-org">
                        {item.institution} • {item.location}
                      </div>

                      {item.focus && (
                        <div className="timeline-focus">
                          <span style={{ color: 'var(--accent-cyan)' }}>Focus:</span> {item.focus}
                        </div>
                      )}

                      {item.details && (
                        <ul className="timeline-bullets">
                          {item.details.map((bullet, idx) => (
                            <li key={idx} className="timeline-bullet-item">
                              <CheckCircle2 size={15} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Research & Experience Column */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <Briefcase size={20} color="var(--accent-cyan)" />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Research & Industry</h3>
              </div>

              <div className="timeline-wrapper">
                {experience.map((item) => (
                  <div key={item.id} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <div className="timeline-title">{item.role}</div>
                        <div className="timeline-period">{item.period}</div>
                      </div>

                      <div className="timeline-org">
                        {item.organization} • {item.location}
                      </div>

                      <ul className="timeline-bullets">
                        {item.bullets.map((bullet, idx) => (
                          <li key={idx} className="timeline-bullet-item">
                            <CheckCircle2 size={15} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {item.tools && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '14px' }}>
                          {item.tools.map((t, idx) => (
                            <span key={idx} className="tool-chip">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Prior Academic Projects Card Grid */}
        <div style={{ marginTop: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <FolderGit2 size={18} color="var(--accent-cyan)" />
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Prior Academic Projects (M.S. 2023–2024)</h3>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
            Foundational machine learning, distributed systems, and computer vision systems built during Master's studies.
          </p>

          <div className="prior-projects-grid">
            {priorAcademicProjects.map((p) => (
              <div key={p.id} className="prior-card">
                <div className="prior-title">{p.title}</div>
                <div className="prior-period">{p.period}</div>
                <p className="prior-desc">{p.description}</p>
                <div className="prior-tags">
                  {p.tags.map((tag, idx) => (
                    <span key={idx} className="prior-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
