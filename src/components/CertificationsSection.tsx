import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/resumeData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Credentials & Accreditations</span>
          </div>
          <h2 className="section-title">Certifications & Training</h2>
          <p className="section-subtitle">
            Industry and academic certifications in machine learning, cloud computing, graph databases, and enterprise architecture.
          </p>
        </div>

        <div className="certs-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-header">
                <ShieldCheck size={24} color="var(--accent-cyan)" />
                {cert.year && (
                  <span className="tool-chip font-mono" style={{ color: 'var(--accent-cyan)' }}>
                    {cert.year}
                  </span>
                )}
              </div>

              <h3 className="cert-name">{cert.name}</h3>
              <div className="cert-issuer">{cert.issuer}</div>

              <div className="cert-skills">
                {cert.skills.map((skill, idx) => (
                  <span key={idx} className="cert-skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
