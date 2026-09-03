export interface ResearchProject {
  id: string;
  title: string;
  category: 'statistical-geometry' | 'omics-rnaseq' | 'ai-assurance' | 'generative-ml';
  categoryLabel: string;
  role: string;
  timeline: string;
  institution?: string;
  summary: string;
  keyHighlights: string[];
  metricsOrDatasets: string[];
  toolsAndTech: string[];
  badgeText?: string;
  link?: string;
  linkLabel?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status: 'Published' | 'Under Review' | 'Preprint';
  url: string;
  summary: string;
  bibtex: string;
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  focus?: string;
  details?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  category: 'research' | 'industry';
  bullets: string[];
  tools?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year?: string;
  credentialUrl?: string;
  skills: string[];
  iconType?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: 'Advanced' | 'Proficient' | 'Familiar';
    highlight?: boolean;
  }[];
}

export interface PriorProject {
  id: string;
  title: string;
  description: string;
  period: string;
  tags: string[];
}
