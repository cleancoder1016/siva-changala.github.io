import React from 'react';
import {
  FileText,
  Mail,
  MapPin,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { personalInfo } from '../data/resumeData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onOpenResumeModal: () => void;
  onCopyEmail: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onCopyEmail }) => {
  return (
    <section id="about" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div>
            {/* Status Pill */}
            <div className="hero-status-pill">
              <span className="status-dot"></span>
              <span>Ph.D. Researcher @ Wright State University</span>
            </div>

            {/* Main Name & Title */}
            <h1 className="hero-name">{personalInfo.name}</h1>
            <div className="hero-title">
              <span>{personalInfo.title}</span>
              <span className="hero-title-sep">•</span>
              <span>{personalInfo.affiliation}</span>
            </div>

            {/* Bio Summary */}
            <p className="hero-bio">{personalInfo.bio}</p>

            {/* Primary Action CTAs */}
            <div className="hero-actions">
              <a href="#research" className="btn btn-primary" id="hero-explore-research-btn">
                <span>Explore Research</span>
                <ArrowRight size={16} />
              </a>

              <a href="#publications" className="btn btn-secondary" id="hero-publications-btn">
                <BookOpen size={16} />
                <span>Publications</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="btn btn-secondary"
                id="hero-download-cv-btn"
              >
                <FileText size={16} />
                <span>View / Download CV</span>
              </button>
            </div>

            {/* Contact Pills */}
            <div className="hero-contacts">
              <button
                onClick={onCopyEmail}
                className="contact-pill"
                title="Click to copy email address"
                id="hero-copy-email-btn"
              >
                <Mail size={15} />
                <span>{personalInfo.email}</span>
              </button>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-pill"
                id="hero-github-link"
              >
                <GithubIcon size={15} />
                <span>github.com/{personalInfo.githubUsername}</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-pill"
                id="hero-linkedin-link"
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn Profile</span>
              </a>

              <div className="contact-pill">
                <MapPin size={15} />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="stats-row">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
