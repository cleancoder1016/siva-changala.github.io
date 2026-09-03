import React from 'react';
import { Mail, Phone, MapPin, FileText, ArrowUp, Send } from 'lucide-react';
import { personalInfo } from '../data/resumeData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface ContactSectionProps {
  onCopyEmail: () => void;
  onOpenResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onCopyEmail,
  onOpenResumeModal
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section id="contact" className="section">
        <div className="container">
          <div className="contact-card">
            <div className="section-tag" style={{ margin: '0 auto 16px' }}>
              <Send size={14} />
              <span>Get in Touch</span>
            </div>

            <h2 className="contact-title">Let's Connect & Collaborate</h2>
            <p className="contact-subtitle">
              Interested in research collaborations on statistical geometry, HDLSS omics, single-cell analysis, or healthcare AI? Feel free to reach out directly.
            </p>

            <div className="contact-links-grid">
              <button
                className="btn btn-primary"
                onClick={onCopyEmail}
                id="contact-copy-email-btn"
              >
                <Mail size={16} />
                <span>Copy {personalInfo.email}</span>
              </button>

              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-secondary"
                id="contact-mailto-btn"
              >
                <Send size={16} />
                <span>Send Email</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                id="contact-github-btn"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                id="contact-linkedin-btn"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>

              <button
                className="btn btn-secondary"
                onClick={onOpenResumeModal}
                id="contact-view-cv-btn"
              >
                <FileText size={16} />
                <span>Academic CV (PDF)</span>
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={15} color="var(--accent-cyan)" />
                {personalInfo.department}, {personalInfo.affiliation}, {personalInfo.location}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={15} color="var(--accent-cyan)" />
                {personalInfo.phone}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Built with React, TypeScript & Vite</span>
            <button
              onClick={scrollToTop}
              className="btn btn-outline btn-sm"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
              <span>Top</span>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};
