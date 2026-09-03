import React, { useState } from 'react';
import { Cpu, Terminal, Cloud, Database, Sparkles, Search } from 'lucide-react';
import { skillCategories } from '../data/resumeData';

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return <Sparkles size={18} />;
      case 'Bioinformatics & HPC':
        return <Cpu size={18} />;
      case 'Programming Languages':
        return <Terminal size={18} />;
      case 'Cloud, Systems & Databases':
        return <Cloud size={18} />;
      default:
        return <Database size={18} />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Skills & Tooling Matrix</h2>
          <p className="section-subtitle">
            An interdisciplinary technical stack spanning statistical machine learning, high-performance computing, transcriptomics, and distributed software engineering.
          </p>
        </div>

        {/* Optional Search / Quick Filter */}
        <div style={{ maxWidth: '400px', marginBottom: '32px', position: 'relative' }}>
          <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '14px', top: '14px' }} />
          <input
            type="text"
            placeholder="Search skills, tools or frameworks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px 12px 42px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              fontSize: '0.9rem',
              outline: 'none',
              fontFamily: 'inherit'
            }}
          />
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => {
            const filteredSkills = cat.skills.filter((s) =>
              s.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && filteredSkills.length === 0) return null;

            return (
              <div key={idx} className="skill-category-card">
                <div className="skill-category-header">
                  <div className="skill-cat-icon">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="skill-cat-title">{cat.category}</h3>
                  </div>
                </div>

                <p className="skill-cat-desc">{cat.description}</p>

                <div className="skills-list">
                  {filteredSkills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`skill-tag ${skill.highlight ? 'highlight' : ''}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
