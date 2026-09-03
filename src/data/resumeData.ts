import {
  ResearchProject,
  Publication,
  EducationItem,
  ExperienceItem,
  Certification,
  SkillCategory,
  PriorProject
} from '../types';

export const personalInfo = {
  name: "Siva Rama Krishna Prasad Changala",
  shortName: "Siva Changala",
  title: "Ph.D. Student in Computer Science",
  affiliation: "Wright State University",
  department: "Department of Computer Science",
  location: "Dayton, OH",
  email: "changala.2@wright.edu",
  phone: "+1 (732) 600-8609",
  github: "https://github.com/cleancoder1016",
  githubUsername: "cleancoder1016",
  linkedin: "https://www.linkedin.com/in/siva-rama-krishna-prasad-changala-a3115a253/",
  resumePdfUrl: "./Academic_Resume_Changala.pdf",
  bio: "Ph.D. researcher investigating statistical geometry, mathematical optimization, and AI/ML for high-dimensional, low-sample-size (HDLSS) biological data. Developing structure-preserving embeddings, centroid-encoder variants, and geometry-aware imputation algorithms for single-cell genomics, transcriptomics, and safety-critical AI assurance.",
  researchInterests: [
    "Single-cell clustering algorithms grounded in statistical geometry & mathematical optimization",
    "Structure-preserving embeddings & isometric dimensionality reduction",
    "High-Dimensional Low-Sample-Size (HDLSS) omics & biomarker discovery",
    "Optimal transport & geometry-respecting imputation under p ≫ n regimes",
    "Generative AI & AI Assurance for safety-critical computer vision & digital-twin simulation"
  ],
  stats: [
    { label: "Focus Regimes", value: "HDLSS (p ≫ n)" },
    { label: "Imputation Families", value: "5 Analyzed" },
    { label: "Omics Matrices", value: "35k+ Genes" },
    { label: "Publications", value: "ResearchGate" }
  ]
};

export const researchProjects: ResearchProject[] = [
  {
    id: "centroid-encoder-hdlss",
    title: "Centroid-Encoder Supervised Dimensionality Reduction & Isometry Preservation",
    category: "statistical-geometry",
    categoryLabel: "Statistical Geometry & HDLSS",
    role: "Graduate Research Assistant",
    timeline: "Jan 2026 – Present",
    institution: "Wright State University",
    summary: "Comprehensive study of linear and nonlinear supervised dimensionality-reduction methods across the centroid-encoder family, co-developing an isometry-constrained variant to preserve biological metric structure.",
    keyHighlights: [
      "Investigated the centroid-encoder family: Centroid-Encoder, OCSR, CBOCSR, FisherLDA, LFDA, and SELF alongside the Sparse Linear Centroid-Encoder (SLCE) biomarker-selection model.",
      "Co-developed an isometry-constrained Centroid-Encoder variant designed to preserve pairwise Riemannian distance and metric structure during projection of extreme HDLSS biological data.",
      "Validated embedding performance on benchmark HDLSS gene-expression datasets (ALLAML, GLI_85, Pancan), targeting single-cell clustering and precision biomarker discovery."
    ],
    metricsOrDatasets: [
      "ALLAML leukemia gene expression",
      "GLI_85 glioma dataset",
      "Pancan multi-cancer expression",
      "Pairwise distance preservation error"
    ],
    toolsAndTech: ["PyTorch", "Python", "Statistical Geometry", "Eigen-decomposition", "Metric Learning"],
    badgeText: "Core Ph.D. Research"
  },
  {
    id: "mirna-sce-validation",
    title: "miRNA Expression Supervised Centroid-Encoder (SCE) Pipeline",
    category: "omics-rnaseq",
    categoryLabel: "Genomics & Omics",
    role: "Graduate Research Assistant",
    timeline: "Jan 2026 – Present",
    institution: "Wright State University",
    summary: "Extending supervised centroid-encoder validation to clinical and physiological human miRNA expression datasets across temporal and perturbation conditions.",
    keyHighlights: [
      "Architected an end-to-end Supervised Centroid Encoder (SCE) pipeline for a 90-subject muscle exercise-response longitudinal study.",
      "Tracked perturbation trajectories across four critical physiological timepoints: pre-exercise, 24h post-exercise, 12-week 24h post, and 16-week rest.",
      "Evaluated embedding fidelity on human serum miRNA cohorts using rigorous quantitative benchmarks: kNN classification accuracy, Kruskal stress cost, manifold stability, and trustworthiness metrics."
    ],
    metricsOrDatasets: [
      "90-subject longitudinal exercise study",
      "Human serum miRNA expression",
      "4 physiological timepoints",
      "kNN accuracy, Kruskal cost & Trustworthiness"
    ],
    toolsAndTech: ["Python", "PyTorch", "miRNA-Seq", "Manifold Learning", "kNN Benchmarking"],
    badgeText: "Clinical Omics"
  },
  {
    id: "genai-assurance",
    title: "Generative AI & AI Assurance for Safety-Critical Computer Vision",
    category: "ai-assurance",
    categoryLabel: "AI Assurance & Vision",
    role: "Graduate Research Assistant",
    timeline: "Jan 2026 – Present",
    institution: "Wright State University",
    summary: "Architecting rigorous safety verification, synthetic-data generation engines, and agentic evaluation loops for autonomous and threat-detection vision systems.",
    keyHighlights: [
      "Architected automated testing and verification frameworks for safety-critical computer vision models.",
      "Engineered generative synthetic-data pipelines, adversarial stress-testing environments, and digital-twin simulations for autonomous navigation and threat detection.",
      "Constructed closed agentic LLM evaluation loops based on an iterative cycle: generate → test → critique → refine, enforcing strict safety guarantees against out-of-distribution shifts."
    ],
    metricsOrDatasets: [
      "Digital-twin synthetic simulation",
      "Adversarial perturbation stress-tests",
      "Agentic loop: generate → test → critique → refine"
    ],
    toolsAndTech: ["Generative AI", "Computer Vision", "Agentic LLMs", "Adversarial ML", "PyTorch", "Digital Twins"],
    badgeText: "Safety-Critical AI"
  },
  {
    id: "hdlss-imputation-taxonomy",
    title: "Geometry-Respecting Omics Imputation Taxonomy & Optimal Transport",
    category: "statistical-geometry",
    categoryLabel: "Statistical Geometry & HDLSS",
    role: "Independent Researcher",
    timeline: "2026 (ongoing)",
    summary: "A rigorous mathematical taxonomy of imputation methods across five distinct mathematical families to uncover geometric failure modes in extreme p ≫ n omics data.",
    keyHighlights: [
      "Conducted a systematic comparison of five mathematical families: probabilistic/empirical-Bayes (SAVER, scImpute), low-rank/spectral (softImpute, ALRA), diffusion/graph-based (MAGIC), iterative conditional (MICE, missForest), and optimal transport (Wasserstein barycenters, Sinkhorn regularization).",
      "Investigated multi-omics cross-modal imputation (MOFA+, totalVI) and high-dimensional covariance/precision-matrix shrinkage (Ledoit-Wolf/OAS, Graphical LASSO) under extreme p ≫ n regimes.",
      "Synthesizing a failure-mode taxonomy mapping exact geometric assumptions and empirical breakdown points to design a novel, geometry-respecting optimal transport imputation framework."
    ],
    metricsOrDatasets: [
      "5 Mathematical Families",
      "p ≫ n regimes (thousands of features vs. dozens of samples)",
      "Wasserstein barycenters & Sinkhorn divergences",
      "Precision matrix shrinkage"
    ],
    toolsAndTech: ["Optimal Transport", "Empirical Bayes", "Graph Diffusion", "Covariance Shrinkage", "Python", "R"],
    badgeText: "Theoretical & Applied"
  },
  {
    id: "vae-synthetic-augmentation",
    title: "Variational Autoencoders for Microarray Augmentation under Extreme n ≤ 30",
    category: "generative-ml",
    categoryLabel: "Generative ML",
    role: "Independent Researcher",
    timeline: "2026 (ongoing)",
    summary: "Deep generative modeling to synthesize biological samples and preserve global/local manifold topology in severely sample-constrained microarray datasets.",
    keyHighlights: [
      "Designed and trained custom Variational Autoencoders (Input → 400 → Latent [μ, σ, dim=50] → 400 → Output) with MSE reconstruction and KL-divergence regularization.",
      "Applied model to two small-n microarray cohorts: MOSSD (Affymetrix miRNA 4.0 with ~6,631 miRNA probes across 29 human samples) and Susuki (Clariom S Mouse with ~22,206 genes across 10 mouse samples).",
      "Evaluated synthetic-sample biological fidelity by contrasting PCA projections of raw and normalized spaces, confirming manifold preservation under extreme regimes (n ≤ 30)."
    ],
    metricsOrDatasets: [
      "MOSSD: 6,631 probes, 29 human samples",
      "Susuki: 22,206 genes, 10 mouse samples",
      "Latent dim = 50, n ≤ 30"
    ],
    toolsAndTech: ["PyTorch", "Variational Autoencoders (VAE)", "PCA Manifold Analysis", "Microarray Processing"],
    badgeText: "Deep Generative Modeling"
  },
  {
    id: "host-pathogen-rnaseq",
    title: "End-to-End RNA-seq Pipeline for Host–Pathogen Transcriptomics (Ebola Virus)",
    category: "omics-rnaseq",
    categoryLabel: "Genomics & Omics",
    role: "Graduate Coursework Project Lead",
    timeline: "Spring 2026",
    institution: "Wright State University & Ohio Supercomputer Center",
    summary: "Primary end-to-end transcriptomics pipeline processing 356 SRR runs across 308 rhesus macaque samples on the OSC HPC cluster with SLURM array jobs.",
    keyHighlights: [
      "Constructed automated HPC pipeline: SRA Toolkit read ingestion → fasterq-dump → multi-threaded pigz compression → adapter/UMI trimming with fastp & FastQC.",
      "Built a custom hybrid Macaca mulatta (Mmul10) + EBOV (KJ660346.2) reference genome and conducted two-pass splice-aware alignment via STAR (v2.7.11b), followed by HTSeq-count.",
      "Assembled and validated a 35,439-gene × 308-sample count matrix in R, reproducing the GEO submission (GSE226106) and resolving gene-ordering discrepancies through ID-based joins.",
      "Conducted exploratory data analysis (PCA/MDS, DESeq2 VST normalization, sample-distance clustering) and co-authored project write-up cross-validating host counts with an independent Kallisto/HISAT2 pipeline (Pearson r = 0.9978)."
    ],
    metricsOrDatasets: [
      "BioProject PRJNA938511 / GEO GSE226106",
      "356 SRR runs / 308 biological samples",
      "35,439 genes count matrix",
      "Pearson r = 0.9978 cross-pipeline validation"
    ],
    toolsAndTech: ["STAR", "HTSeq", "DESeq2", "fastp", "FastQC", "SLURM", "OSC HPC", "Bash", "R", "LaTeX"],
    badgeText: "HPC Supercomputing"
  }
];

export const publications: Publication[] = [
  {
    id: "isometric-centroid-encoder",
    title: "Stable Dimensionality Reduction via Isometric Centroid-Encoder",
    authors: ["Changala, S.R.K.P.", "et al."],
    venue: "ResearchGate (Preprint / In Preparation)",
    year: 2026,
    status: "Published",
    url: "https://www.researchgate.net",
    summary: "Presents an isometry-constrained variant of the Centroid-Encoder architecture designed to preserve intrinsic pairwise metric distances during projection of high-dimensional, low-sample-size (HDLSS) biological data, ensuring stability against sample scarcity and noise.",
    bibtex: `@article{changala2026isometric,
  author    = {Changala, Siva Rama Krishna Prasad and others},
  title     = {Stable Dimensionality Reduction via Isometric Centroid-Encoder},
  journal   = {ResearchGate},
  year      = {2026},
  note      = {Preprint / Publication}
}`,
    tags: ["Centroid-Encoder", "HDLSS", "Isometric Projection", "Dimensionality Reduction", "Bioinformatics"]
  }
];

export const education: EducationItem[] = [
  {
    id: "phd-cs",
    degree: "Ph.D. in Computer Science",
    institution: "Wright State University",
    location: "Dayton, OH",
    period: "Jan 2026 – Present",
    focus: "HDLSS Biological Data, Dimensionality Reduction, Healthcare AI",
    details: [
      "Graduate Research Assistant studying supervised linear/nonlinear centroid-encoders, biomarker discovery, and geometric single-cell clustering.",
      "Researching Generative AI assurance, digital twins, and safety-critical testing loops for autonomous computer vision systems."
    ]
  },
  {
    id: "ms-cs",
    degree: "M.S. in Computer Science",
    institution: "Wright State University",
    location: "Dayton, OH",
    period: "Jan 2023 – Dec 2024",
    focus: "Machine Learning, Computer Vision, High Performance Computing",
    details: [
      "Built multi-modal deep learning architectures including CNN/RNN pipelines for medical image classification (Pneumonia Detection, Weather Classification).",
      "Developed cloud-native algorithms deployed across AWS EC2 and Ohio Supercomputer Center (OSC) nodes."
    ]
  },
  {
    id: "btech-ece",
    degree: "B.Tech. in Electronics and Communications Engineering",
    institution: "National Institute of Technology, Uttarakhand",
    location: "Uttarakhand, India",
    period: "Jul 2018 – May 2022",
    details: [
      "Strong foundation in linear algebra, digital signal processing, probability theory, statistics, and hardware-software system integration."
    ]
  }
];

export const experience: ExperienceItem[] = [
  {
    id: "gra-wsu",
    role: "Graduate Research Assistant",
    organization: "Wright State University",
    location: "Dayton, OH",
    period: "Jan 2026 – Present",
    category: "research",
    bullets: [
      "Investigating the centroid-encoder family of linear/nonlinear supervised dimensionality-reduction methods (Centroid-Encoder, OCSR, CBOCSR, FisherLDA, LFDA, SELF) and the Sparse Linear Centroid-Encoder (SLCE) model on HDLSS gene-expression datasets (ALLAML, GLI_85, Pancan).",
      "Co-developed an isometry-constrained Centroid-Encoder formulation preserving pairwise Riemannian metric distance structure during projection of HDLSS biomedical datasets.",
      "Extending centroid-encoder validation to clinical miRNA expression datasets through a Supervised Centroid Encoder (SCE) pipeline on a 90-subject exercise response study across 4 distinct timepoints.",
      "Architecting Generative AI Assurance testing frameworks, synthetic data generation pipelines, adversarial stress-testing suites, and agentic LLM evaluation loops for safety-critical vision systems."
    ],
    tools: ["PyTorch", "Python", "R", "SLURM", "Generative AI", "Statistical Geometry"]
  },
  {
    id: "dev-acentrik",
    role: "Full Stack / Java Developer",
    organization: "AcentrikTech LLC",
    location: "Austin, TX",
    period: "Mar 2025 – Dec 2025",
    category: "industry",
    bullets: [
      "Engineered robust, enterprise-grade backend services and full-stack web applications utilizing Java, Spring Boot, and modern JavaScript/TypeScript frameworks.",
      "Implemented resilient RESTful APIs, cloud deployment workflows, and database integration layers with strict scalability and reliability standards."
    ],
    tools: ["Java", "Spring Boot", "TypeScript", "SQL", "Cloud Infrastructure"]
  },
  {
    id: "dev-edureka",
    role: "Full Stack Web Developer",
    organization: "Edureka",
    location: "Bengaluru, India",
    period: "Feb 2022 – Aug 2022",
    category: "industry",
    bullets: [
      "Built interactive web interfaces, client-side application modules, and scalable web endpoints serving large cohorts of learners.",
      "Collaborated with cross-functional product and engineering teams to optimize rendering performance, accessibility, and user engagement."
    ],
    tools: ["JavaScript", "HTML5", "CSS3", "Node.js", "REST APIs"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "AI & Machine Learning",
    description: "Deep learning, statistical geometry, generative modeling, and assurance",
    skills: [
      { name: "Generative AI & LLMs", highlight: true },
      { name: "Agentic AI & Eval Loops", highlight: true },
      { name: "PyTorch", highlight: true },
      { name: "TensorFlow" },
      { name: "Dimensionality Reduction (Centroid-Encoder, PCA, UMAP)", highlight: true },
      { name: "Computer Vision (CNN, Vision Transformers)", highlight: true },
      { name: "Adversarial Machine Learning" },
      { name: "Synthetic Data Generation & Digital Twins" },
      { name: "AI Assurance & Safety Verification" },
      { name: "Variational Autoencoders (VAE)", highlight: true }
    ]
  },
  {
    category: "Bioinformatics & HPC",
    description: "Omics analysis, transcriptomics pipelines, and supercomputing",
    skills: [
      { name: "RNA-seq Pipeline Architecture", highlight: true },
      { name: "Ohio Supercomputer Center (OSC) HPC", highlight: true },
      { name: "SLURM Job Arrays", highlight: true },
      { name: "STAR Aligner & HTSeq-count", highlight: true },
      { name: "DESeq2 & Differential Expression", highlight: true },
      { name: "fastp & FastQC Quality Control" },
      { name: "SRA Toolkit" },
      { name: "miRNA & Microarray Analysis (Affymetrix, Clariom)" },
      { name: "Optimal Transport & Imputation (Wasserstein, Sinkhorn)" }
    ]
  },
  {
    category: "Programming Languages",
    description: "Scientific computing, systems development, and full-stack engineering",
    skills: [
      { name: "Python", highlight: true },
      { name: "R & RScript", highlight: true },
      { name: "JavaScript / TypeScript", highlight: true },
      { name: "Java", highlight: true },
      { name: "C++" },
      { name: "SQL", highlight: true },
      { name: "Bash / Shell Scripting", highlight: true }
    ]
  },
  {
    category: "Cloud, Systems & Databases",
    description: "Distributed infrastructure, containerization, and graph technologies",
    skills: [
      { name: "AWS (EC2, S3, Cloud Practitioner)", highlight: true },
      { name: "Docker & Containerization", highlight: true },
      { name: "Kubernetes" },
      { name: "Neo4j Graph Database (Certified)", highlight: true },
      { name: "Oracle Cloud & APEX (Certified)" },
      { name: "Git & GitHub CI/CD", highlight: true }
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: "ml-stanford",
    name: "Machine Learning Specialization",
    issuer: "Stanford University / DeepLearning.AI",
    year: "2024",
    skills: ["Supervised Learning", "Advanced Learning Algorithms", "Unsupervised Learning & Recommenders"],
    iconType: "academic"
  },
  {
    id: "neo4j-cert",
    name: "Neo4j Certified Professional",
    issuer: "Neo4j",
    year: "2025",
    skills: ["Graph Database Modeling", "Cypher Query Language", "Graph Data Science"],
    iconType: "database"
  },
  {
    id: "aws-ccp",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    year: "2024",
    skills: ["Cloud Architecture", "Security & Compliance", "AWS Core Services"],
    iconType: "cloud"
  },
  {
    id: "aws-quest",
    name: "AWS Cloud Quest: Serverless Developer",
    issuer: "Amazon Web Services (AWS)",
    skills: ["AWS Lambda", "API Gateway", "DynamoDB", "Event-Driven Computing"],
    iconType: "cloud"
  },
  {
    id: "oracle-apex",
    name: "Oracle APEX Cloud Developer Certified Professional",
    issuer: "Oracle",
    year: "2025",
    skills: ["Cloud Application Development", "Autonomous Database", "APEX Architecture"],
    iconType: "database"
  },
  {
    id: "github-foundations",
    name: "GitHub Foundations",
    issuer: "GitHub",
    skills: ["Git Workflow", "Collaboration & Actions", "Security & Governance"],
    iconType: "code"
  }
];

export const priorAcademicProjects: PriorProject[] = [
  {
    id: "pneumonia-detection",
    title: "Pneumonia Detection System",
    description: "Built deep convolutional and recurrent neural network (CNN/RNN) pipelines classifying chest X-ray images, optimizing inference latency and diagnostic accuracy for clinical decision support.",
    period: "M.S., 2023–2024",
    tags: ["Computer Vision", "CNN/RNN", "Medical Imaging", "PyTorch"]
  },
  {
    id: "weather-classification",
    title: "Weather Image Classification",
    description: "Engineered an 11-class visual classification system over 6,862 real-world meteorological images, featuring extensive exploratory data analysis, class balance calibration, and deep feature visualization.",
    period: "M.S., 2023–2024",
    tags: ["Classification", "Feature Maps", "Exploratory Data Analysis"]
  },
  {
    id: "cloud-tsp-solver",
    title: "Cloud-Based Traveling Salesperson (TSP) Solver",
    description: "Architected distributed heuristic and exact TSP solvers deployed on AWS EC2 and Ohio Supercomputer Center (OSC) nodes with an interactive web dashboard for real-time computational route visualization.",
    period: "M.S., 2023–2024",
    tags: ["Distributed Systems", "AWS EC2", "OSC HPC", "Algorithms"]
  },
  {
    id: "information-retrieval",
    title: "Information Retrieval & Web Search Engine",
    description: "Built end-to-end inverted indexing, multi-threaded web crawling, TF-IDF and vector space query processing, and document relevance ranking algorithms from first principles.",
    period: "M.S., 2023–2024",
    tags: ["Inverted Indexing", "Web Crawler", "Ranking Algorithms", "Python"]
  }
];
