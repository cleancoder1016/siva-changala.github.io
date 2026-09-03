import React, { useState } from 'react';
import { BookOpen, Copy, ExternalLink, Code2 } from 'lucide-react';
import { publications } from '../data/resumeData';

interface PublicationsSectionProps {
  onCopyBibtex: (bibtex: string) => void;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({ onCopyBibtex }) => {
  const [selectedBibtex, setSelectedBibtex] = useState<string | null>(null);

  return (
    <section id="publications" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <BookOpen size={14} />
            <span>Scholarly Output</span>
          </div>
          <h2 className="section-title">Publications & Manuscripts</h2>
          <p className="section-subtitle">
            Peer-reviewed research and working preprints in dimensionality reduction, statistical geometry, and computational biology.
          </p>
        </div>

        <div>
          {publications.map((pub) => (
            <article key={pub.id} className="publication-card">
              <div className="pub-header">
                <span className="pub-status-badge">
                  {pub.status} • {pub.year}
                </span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {pub.tags.map((tag, idx) => (
                    <span key={idx} className="tool-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="pub-title">{pub.title}</h3>

              <div className="pub-authors">
                <span className="pub-author-me">Changala, S.R.K.P.</span> et al.
              </div>

              <div className="pub-venue">{pub.venue}</div>

              <div className="pub-summary">
                <p>{pub.summary}</p>
              </div>

              <div className="pub-actions">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => onCopyBibtex(pub.bibtex)}
                  id="pub-copy-bibtex-btn"
                >
                  <Copy size={14} />
                  <span>Copy BibTeX</span>
                </button>

                <button
                  className="btn btn-outline btn-sm"
                  onClick={() => setSelectedBibtex(selectedBibtex ? null : pub.bibtex)}
                  id="pub-view-bibtex-btn"
                >
                  <Code2 size={14} />
                  <span>{selectedBibtex ? 'Hide BibTeX' : 'View BibTeX'}</span>
                </button>

                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  id="pub-researchgate-link"
                >
                  <ExternalLink size={14} />
                  <span>ResearchGate</span>
                </a>
              </div>

              {/* BibTeX Code Viewer Drawer */}
              {selectedBibtex && (
                <div style={{ marginTop: '20px' }}>
                  <pre className="bibtex-code-block">{pub.bibtex}</pre>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
