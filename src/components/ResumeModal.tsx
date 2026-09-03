import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={20} color="var(--accent-cyan)" />
            <h3 id="resume-modal-title" className="modal-title">
              Academic Resume (CV)
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a
              href={personalInfo.resumePdfUrl}
              download="Academic_Resume_Changala.pdf"
              className="btn btn-primary btn-sm"
              id="resume-modal-download-btn"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            <a
              href={personalInfo.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              title="Open in new tab"
            >
              <ExternalLink size={14} />
            </a>

            <button
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close resume preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="modal-body" style={{ padding: '0', height: '75vh' }}>
          <iframe
            src={`${personalInfo.resumePdfUrl}#view=FitH`}
            title="Academic Resume Preview"
            width="100%"
            height="100%"
            style={{ border: 'none', background: '#1e293b' }}
          />
        </div>
      </div>
    </div>
  );
};
