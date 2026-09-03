import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResearchSection } from './components/ResearchSection';
import { PublicationsSection } from './components/PublicationsSection';
import { TimelineSection } from './components/TimelineSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { CheckCircle } from 'lucide-react';
import { personalInfo } from './data/resumeData';

export const App: React.FC = () => {
  // Initialize theme from HTML data-theme attribute set by early script or localStorage
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const existingAttr = document.documentElement.getAttribute('data-theme');
    if (existingAttr === 'light' || existingAttr === 'dark') {
      return existingAttr;
    }
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Apply theme changes to DOM and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
    if (metaColorScheme) {
      metaColorScheme.setAttribute('content', theme);
    }
  }, [theme]);

  // Listen to OS theme changes if user hasn't explicitly set one
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem('portfolio-theme');
      if (!saved) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      showToast(`Email copied: ${personalInfo.email}`);
    } catch {
      showToast(`Email: ${personalInfo.email}`);
    }
  };

  const handleCopyBibtex = async (bibtex: string) => {
    try {
      await navigator.clipboard.writeText(bibtex);
      showToast('BibTeX citation copied to clipboard!');
    } catch {
      showToast('Unable to access clipboard directly.');
    }
  };

  return (
    <div className="app-layout">
      {/* Top Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      <main>
        {/* Hero Identity & Quick Highlights */}
        <Hero
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onCopyEmail={handleCopyEmail}
        />

        {/* Core Research & Projects */}
        <ResearchSection />

        {/* Publications & Preprints */}
        <PublicationsSection onCopyBibtex={handleCopyBibtex} />

        {/* Academic Journey & Work Experience */}
        <TimelineSection />

        {/* Categorized Skills Matrix */}
        <SkillsSection />

        {/* Verified Certifications & Accreditations */}
        <CertificationsSection />

        {/* Contact CTA & Footer */}
        <ContactSection
          onCopyEmail={handleCopyEmail}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />
      </main>

      {/* Interactive Resume Preview Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification" role="status">
          <CheckCircle size={18} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default App;
