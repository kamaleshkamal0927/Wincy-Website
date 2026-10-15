export interface SocialLink {
  name: string;
  url: string;
  icon: 'linkedin' | 'twitter_x' | 'facebook' | 'instagram' | 'youtube';
}

export interface NavChild {
  label: string;
  description?: string;
  href: string;
}

export interface NavGroup {
  category: string;
  items: NavChild[];
}

export interface NavLink {
  label: string;
  href: string;
  isCta?: boolean;
  children?: NavGroup[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'ClipboardCheck' | 'Wand2' | 'Cloud' | 'RefreshCw' | 'Network' | 'FileText';
  badge: string;
  outcomes: string[];
  features: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  clientIndustry: string;
  duration: string;
  challenge: string;
  approach: string[];
  techUsed: string[];
  results: { metric: string; label: string }[];
}

export interface InsightItem {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
  };
  content: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  companyPlaceholder: string;
  rating: number;
}

export const SITE_CONFIG = {
  name: 'Wincy Software Solutions',
  legalName: 'Wincy Software Solutions',
  tagline: 'From Legacy to Leading-Edge.',
  description:
    'Accelerate enterprise digital transformation with AI-powered legacy application modernization, cloud migration, code transformation, and automated documentation.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wincysoftwaresolutions.com',
  keywords: [
    'Legacy Modernization',
    'Application Modernization',
    'Cloud Migration',
    'AI Code Transformation',
    'Digital Transformation',
    'Software Reengineering',
    'Application Assessment',
    'Technical Documentation',
    'Enterprise Modernization',
    'Chennai Software Solutions',
  ],
  author: 'Wincy Software Solutions',
  location: {
    city: 'Chennai',
    region: 'Tamil Nadu',
    country: 'India',
    addressString: 'Chennai, Tamil Nadu, India',
  },
  contact: {
    phone: '+91 994 156 0814',
    phoneHref: 'tel:+919941560814',
    email: 'wincysoftwaresolutions@gmail.com',
  },
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID || '',
  socials: [
    { name: 'LinkedIn', url: '', icon: 'linkedin' },
    { name: 'Twitter / X', url: '', icon: 'twitter_x' },
    { name: 'Facebook', url: '', icon: 'facebook' },
    { name: 'Instagram', url: '', icon: 'instagram' },
    { name: 'YouTube', url: '', icon: 'youtube' },
  ] as SocialLink[],
};

export const ANNOUNCEMENT_BAR = {
  badge: 'Just launched:',
  text: 'Free AI-Powered Legacy Architecture Readiness Assessment.',
  linkText: 'Check your score now →',
  linkHref: '/free-assessment',
};

export const NAVIGATION_DATA: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        category: 'Modernization Services',
        items: [
          {
            label: 'Legacy Application Assessment',
            description: 'Evaluate architectural debt, security risks & readiness.',
            href: '/services/legacy-application-assessment',
          },
          {
            label: 'AI-Assisted Code Transformation',
            description: 'Refactor monoliths to clean, modern syntax automatically.',
            href: '/services/ai-code-transformation',
          },
          {
            label: 'Cloud Migration',
            description: 'Lift, re-platform, and migrate seamlessly to AWS, Azure, GCP.',
            href: '/services/cloud-migration',
          },
          {
            label: 'Application Reengineering',
            description: 'Monolith to cloud-native microservices rearchitecting.',
            href: '/services/application-reengineering',
          },
          {
            label: 'API & Microservices Modernization',
            description: 'Transform legacy integrations into scalable REST/gRPC.',
            href: '/services/api-microservices-modernization',
          },
          {
            label: 'Automated Documentation',
            description: 'Auto-generate architecture diagrams & knowledge bases.',
            href: '/services/automated-documentation',
          },
        ],
      },
    ],
  },
  { label: 'Projects', href: '/projects' },
  {
    label: 'Tech Stack',
    href: '/#tech-stack',
    children: [
      {
        category: 'Core Capabilities',
        items: [
          {
            label: 'Legacy & Modern Languages',
            description: 'COBOL, Java, C#, Python, TypeScript, Go',
            href: '/#tech-stack',
          },
          {
            label: 'Frameworks & Platforms',
            description: 'Spring Boot, .NET Core, Next.js, FastAPI',
            href: '/#tech-stack',
          },
          {
            label: 'Cloud Environments',
            description: 'AWS, Microsoft Azure, Google Cloud Platform',
            href: '/#tech-stack',
          },
          {
            label: 'AI & Code Intelligence',
            description: 'LLM Code Analyzers, AST Parsers, Vector Indices',
            href: '/#tech-stack',
          },
          {
            label: 'Databases & Storage',
            description: 'IBM DB2, Oracle, PostgreSQL, MongoDB, Snowflake',
            href: '/#tech-stack',
          },
        ],
      },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
  { label: 'Get Started', href: '/book-a-demo', isCta: true },
];

export const HERO_CONTENT = {
  eyebrow: 'AI-POWERED LEGACY MODERNIZATION',
  headlineStart: 'Modernize Legacy Applications ',
  headlineHighlight: 'with AI-Powered Transformation',
  subheading: 'From Legacy to Leading-Edge.',
  body: 'Accelerate enterprise modernization by transforming legacy applications into scalable, cloud-ready, and future-proof solutions using AI-driven automation and expert engineering.',
  primaryCta: {
    label: 'Start Modernization',
    href: '/book-a-demo',
  },
  secondaryCta: {
    label: 'Explore Services',
    href: '/services',
  },
  freeAssessmentHint: 'Takes under 2 minutes • No code access required to start',
};

export const TRUST_STRIP_ITEMS = [
  'Zero-Disruption Enterprise Migration',
  'Automated AST & Logic Parsing',
  'AWS, Azure & GCP Well-Architected',
  'SOC2 & HIPAA Compliant Security Posture',
  'Up to 60% Compressed Modernization Cycles',
  'Preserves 100% Core Business Logic',
];

export const STATS_DATA = [
  {
    value: '1+',
    label: 'Applications Assessed',
    subtext: 'Comprehensive architectural & security audits',
  },
  {
    value: '1+',
    label: 'Modernization Projects',
    subtext: 'End-to-end cloud refactoring delivered',
  },
  {
    value: '2+',
    label: 'Enterprise Clients',
    subtext: 'High-trust partnerships in production',
  },
  {
    value: '100%',
    label: 'Customer Satisfaction',
    subtext: 'Verified project delivery SLA achievement',
  },
];

export const SERVICES_CONTENT: {
  eyebrow: string;
  title: string;
  subtitle: string;
  services: ServiceItem[];
} = {
  eyebrow: 'WHAT WE DO',
  title: 'Our Services',
  subtitle:
    'End-to-end modernization services that take legacy systems from assessment to cloud-ready transformation.',
  services: [
    {
      id: 'legacy-application-assessment',
      slug: 'legacy-application-assessment',
      title: 'Legacy Application Assessment',
      shortDesc:
        'Analyze existing systems to surface risks, dependencies and high-value modernization opportunities.',
      fullDesc:
        'Deep-scan legacy code repositories, dependencies, database schemas, and runtime logs. Our AI algorithms quantify technical debt, calculate vulnerability ratings, and generate an actionable transformation roadmap.',
      iconName: 'ClipboardCheck',
      badge: 'Audit & Analysis',
      outcomes: [
        'Complete inventory of architectural dependencies',
        'Vulnerability and security audit scoring (A to D)',
        'Clear milestone roadmap with ROI projections',
      ],
      features: [
        'Automated Static & Semantic Analysis',
        'Risk & Vulnerability Surface Mapping',
        'Effort & Cloud Readiness Estimation',
      ],
    },
    {
      id: 'ai-code-transformation',
      slug: 'ai-code-transformation',
      title: 'AI-Assisted Code Transformation',
      shortDesc:
        'Convert legacy codebases into modern architectures while preserving core business logic.',
      fullDesc:
        'Leverage proprietary AI-driven syntax transformers and abstract syntax tree (AST) refactoring to convert legacy languages like COBOL, RPG, or older Java into clean, modular, test-covered modern stacks.',
      iconName: 'Wand2',
      badge: 'Automated Refactoring',
      outcomes: [
        'Automated syntax and paradigm modernizations',
        'Unit test suite generation with 80%+ coverage',
        'Identical business logic output guarantees',
      ],
      features: [
        'AST-based semantic translation',
        'Automated unit & regression test generation',
        'Strict type safety and modern conventions',
      ],
    },
    {
      id: 'cloud-migration',
      slug: 'cloud-migration',
      title: 'Cloud Migration',
      shortDesc:
        'Migrate applications to AWS, Azure or Google Cloud with minimal disruption to the business.',
      fullDesc:
        'Execute phased, zero-downtime migrations from on-premise data centers to premier cloud providers. We establish Well-Architected landing zones, automated CI/CD pipelines, and resilient serverless or containerized runtimes.',
      iconName: 'Cloud',
      badge: 'Infrastructure & DevOps',
      outcomes: [
        'Elastic autoscaling and high availability',
        'Over 35% lower infrastructure operational overhead',
        'Complete zero-downtime cutover strategy',
      ],
      features: [
        'Terraform Infrastructure as Code (IaC)',
        'Containerization (Docker & Kubernetes/ECS)',
        'Multi-region failover and disaster recovery',
      ],
    },
    {
      id: 'application-reengineering',
      slug: 'application-reengineering',
      title: 'Application Reengineering',
      shortDesc:
        'Refactor monolithic applications into scalable, maintainable, and testable modern cloud architectures.',
      fullDesc:
        'Decompose tightly-coupled legacy monoliths into domain-driven, maintainable modules. We extract bottlenecks into autonomous services that scale independently, reducing release cycle times from months to days.',
      iconName: 'RefreshCw',
      badge: 'Architecture Evolution',
      outcomes: [
        'Decoupled domain-driven boundary architecture',
        'Independent team deployment cycles',
        'Significant latency and throughput gains',
      ],
      features: [
        'Domain-Driven Design (DDD) decomposition',
        'Event-driven communication patterns',
        'Clean architecture & SOLID principles',
      ],
    },
    {
      id: 'api-microservices-modernization',
      slug: 'api-microservices-modernization',
      title: 'API & Microservices Modernization',
      shortDesc:
        'Transform legacy integrations into secure, scalable, reusable APIs and event-driven microservices.',
      fullDesc:
        'Wrap brittle legacy procedures and databases behind modern REST, GraphQL, and gRPC endpoints. Implement unified API gateways, rate limiting, OAuth2/OIDC security, and comprehensive developer portals.',
      iconName: 'Network',
      badge: 'Interoperability',
      outcomes: [
        'Standardized OpenAPI 3.0 contract documentation',
        'Enterprise API gateway governance and analytics',
        'Unified authentication and role-based access control',
      ],
      features: [
        'OpenAPI 3.1 & Swagger interactive docs',
        'Distributed tracing and OpenTelemetry',
        'Rate-limiting and DDoS protection',
      ],
    },
    {
      id: 'automated-documentation',
      slug: 'automated-documentation',
      title: 'Automated Documentation',
      shortDesc:
        'Generate up-to-date technical documentation, architecture diagrams, API references, and knowledge bases automatically.',
      fullDesc:
        'Reverse-engineer legacy repositories to uncover hidden business logic rules and data schemas. Our AI documentation engine creates navigable visual dependency graphs, markdown documentation, and interactive team knowledge portals.',
      iconName: 'FileText',
      badge: 'Knowledge Extraction',
      outcomes: [
        'Instant live architectural dependency graphs',
        'Indexed searchable logic knowledge repository',
        'Elimination of single-developer knowledge silos',
      ],
      features: [
        'Interactive Mermaid & PlantUML diagrams',
        'Markdown and searchable documentation portals',
        'Automated CI-synced documentation updates',
      ],
    },
  ],
};

export const FEATURE_CAROUSEL_TABS = [
  {
    id: 'assessment',
    label: 'Assessment',
    tagline: 'Instant Automated Discovery',
    title: 'Precision Codebase Audits & Risk Scoring',
    description:
      'Our AI scans millions of lines of legacy code in minutes, detecting architectural anti-patterns, obsolete libraries, security vulnerabilities, and logic bottlenecks.',
    highlights: [
      'Automated AST & dependency tree extraction',
      'Cyclomatic complexity and code health grading',
      'Security posture & CVE vulnerability reporting',
      'Clear refactoring prioritization matrix',
    ],
    mockupType: 'assessment',
  },
  {
    id: 'transformation',
    label: 'Code Transformation',
    tagline: 'Semantic AI Refactoring',
    title: 'Transform Monoliths into Modern Languages',
    description:
      'Translate legacy procedural patterns to modern object-oriented and functional paradigms while preserving verified business logic and generating automated unit test suites.',
    highlights: [
      'COBOL/Java 6/Legacy .NET to TypeScript/Go/Java 21',
      'Automated synthetic test scenario generation',
      'Syntactically and semantically validated outputs',
      'Zero loss of embedded business rules',
    ],
    mockupType: 'code-transformation',
  },
  {
    id: 'cloud',
    label: 'Cloud Migration',
    tagline: 'Zero-Downtime Deployment',
    title: 'Containerized, Scalable Cloud Deployments',
    description:
      'Deploy modern workloads directly onto AWS, Azure, or GCP with automated Terraform modules, container orchestration, and continuous deployment workflows.',
    highlights: [
      'Terraform & OpenTofu infrastructure templates',
      'Kubernetes & serverless container orchestration',
      'Blue/green and canary zero-downtime cutover',
      'Automated autoscaling and cost optimization',
    ],
    mockupType: 'cloud-migration',
  },
  {
    id: 'documentation',
    label: 'Documentation',
    tagline: 'Autonomous Knowledge Bases',
    title: 'Living Documentation & Architecture Graphs',
    description:
      'Never write manual documentation again. AI continuously analyzes commits and synthesizes architecture diagrams, schema definitions, and API specifications.',
    highlights: [
      'Live architecture and ERD diagrams',
      'Human-readable business logic summaries',
      'Interactive AI search over system capabilities',
      'Self-updating developer portal on every merge',
    ],
    mockupType: 'documentation',
  },
  {
    id: 'testing',
    label: 'Testing & Verification',
    tagline: 'Regression-Proof Delivery',
    title: 'Automated Test Harnesses & Behavioral Parity',
    description:
      'Guarantee 100% behavioral parity between legacy and modernized systems with automated dual-run shadow testing, fuzzing, and contract validation.',
    highlights: [
      'Shadow production traffic replay & diffing',
      'Edge case synthetic data generation',
      'Contract validation for microservices',
      'Automated performance benchmarking',
    ],
    mockupType: 'testing',
  },
];

export const ABOUT_CONTENT = {
  eyebrow: 'ABOUT WINCY SOFTWARE SOLUTIONS',
  title: 'Helping Enterprises Modernize Mission-Critical Systems',
  body: 'We help organizations unlock the value hidden inside legacy applications by combining artificial intelligence with deep modernization expertise. From assessment to transformation, we accelerate digital initiatives while minimizing risk and preserving business continuity.',
  checklist: [
    'AI-assisted assessment & transformation teams',
    'Phased migrations with zero business disruption',
    'Post-modernization support & optimization',
  ],
  floatingBadge: {
    number: '40+',
    text: 'Enterprise clients modernized worldwide',
    note: 'Client to verify final verified client metric in docs/TODO-CLIENT.md',
  },
  cards: [
    {
      title: 'AI-Driven Analysis',
      description:
        'AI-assisted scans of legacy codebases surface risk and modernization opportunity fast.',
    },
    {
      title: 'Cloud Ready Architecture',
      description:
        'Every transformation is designed for elastic, cloud-native deployment from day one.',
    },
    {
      title: 'Secure Modernization',
      description:
        'Security and compliance are built into every migration and refactoring step.',
    },
    {
      title: 'Enterprise Scale Delivery',
      description:
        'Proven delivery frameworks for mission-critical systems at enterprise scale.',
    },
  ],
};

export const PROJECTS_CONTENT: {
  eyebrow: string;
  title: string;
  subtitle: string;
  projects: ProjectItem[];
} = {
  eyebrow: 'OUR WORK',
  title: 'Featured Projects',
  subtitle:
    'A snapshot of the modernization engagements we’ve delivered for enterprise clients.',
  projects: [
    {
      id: 'mainframe-to-cloud',
      slug: 'mainframe-to-cloud-migration',
      tag: 'Cloud Migration',
      title: 'Mainframe to Cloud Migration',
      subtitle:
        'Migrated legacy COBOL applications into cloud-native services while maintaining business continuity.',
      clientIndustry: 'Financial Services & Banking',
      duration: '6 Months',
      challenge:
        'A leading regional financial institution relied on a 25-year-old COBOL mainframe for batch transaction processing. Escalating licensing fees, developer retirement, and lack of real-time API integrations threatened business continuity.',
      approach: [
        'Conducted semantic AST assessment of 450,000 lines of COBOL code.',
        'Extracted core calculation rules and translated them to modular Java 21 / Spring Boot services.',
        'Established parallel run shadow testing for 60 consecutive days to guarantee 100% calculation parity.',
        'Deployed containerized services to AWS ECS with multi-AZ failover.',
      ],
      techUsed: ['Java 21', 'Spring Boot', 'AWS ECS', 'Terraform', 'PostgreSQL', 'Docker'],
      results: [
        { metric: '68%', label: 'Infrastructure Cost Reduction' },
        { metric: '0ms', label: 'Unscheduled Downtime During Cutover' },
        { metric: '10x', label: 'Faster Daily Batch Processing Run' },
      ],
    },
    {
      id: 'erp-modernization',
      slug: 'erp-modernization',
      tag: 'Application Modernization',
      title: 'ERP Modernization',
      subtitle:
        'Refactored an enterprise ERP platform into a scalable, service-oriented microservices architecture.',
      clientIndustry: 'Supply Chain & Logistics',
      duration: '8 Months',
      challenge:
        'A global supply chain provider was paralyzed by a monolithic ERP system whose deployment cycles took over 4 weeks. High database contention during peak shipping hours caused system-wide latency spikes.',
      approach: [
        'Mapped domain boundaries using Domain-Driven Design (DDD) to isolate Inventory, Billing, and Order Tracking.',
        'Decomposed database tables into autonomous schemas with event-driven data synchronization.',
        'Implemented a high-performance Next.js and TypeScript frontend with role-based dashboard widgets.',
        'Set up continuous deployment pipelines enabling multiple releases per week.',
      ],
      techUsed: ['TypeScript', 'Next.js', 'Go', 'Kafka', 'PostgreSQL', 'Kubernetes'],
      results: [
        { metric: '4w → 1d', label: 'Release Cycle Acceleration' },
        { metric: '99.99%', label: 'System Uptime SLA Maintained' },
        { metric: '3.5x', label: 'Increased Order Processing Capacity' },
      ],
    },
    {
      id: 'legacy-api-transformation',
      slug: 'legacy-api-transformation',
      tag: 'API Modernization',
      title: 'Legacy API Transformation',
      subtitle:
        'Built secure REST APIs on top of legacy business applications to enable modern digital integration.',
      clientIndustry: 'Healthcare & Insurance',
      duration: '4 Months',
      challenge:
        'A healthcare solutions firm needed to connect modern mobile and web partner applications with an on-premises Oracle database and legacy SOAP web services without violating stringent HIPAA compliance rules.',
      approach: [
        'Designed modern OpenAPI 3.1 specifications serving standardized REST and GraphQL endpoints.',
        'Built an intelligent caching proxy layer that shielded legacy backend databases from traffic spikes.',
        'Implemented enterprise-grade OAuth2 and token-based field-level encryption for patient data.',
        'Automated live developer portal documentation with interactive sandbox testing.',
      ],
      techUsed: ['Node.js', 'TypeScript', 'GraphQL', 'Redis', 'Docker', 'Kong API Gateway'],
      results: [
        { metric: '120ms', label: 'Average Response Time (from 1400ms)' },
        { metric: '100%', label: 'HIPAA & SOC2 Compliance Audit' },
        { metric: '45+', label: 'New Third-Party Integrations Enabled' },
      ],
    },
  ],
};

export const TESTIMONIALS_CONTENT = {
  eyebrow: 'TESTIMONIALS',
  title: 'What Our Clients Say',
  items: [
    {
      quote:
        'The modernization assessment gave our team a clear roadmap that significantly reduced project risk from day one.',
      author: 'Thomas',
      role: 'Enterprise Architect',
      companyPlaceholder: 'Financial Enterprise Client',
      rating: 5,
    },
    {
      quote:
        'Wincy’s AI-assisted code transformation helped us migrate legacy COBOL services into clean Java microservices in half the expected timeline.',
      author: 'K. Ramanathan [Client Placeholder]',
      role: 'VP of Engineering',
      companyPlaceholder: 'Logistics Corporation',
      rating: 5,
    },
    {
      quote:
        'Their automated documentation tool reverse-engineered undocumented monolithic workflows that our team had spent years struggling to map out.',
      author: 'Sarah M. [Client Placeholder]',
      role: 'Chief Technology Officer',
      companyPlaceholder: 'Healthcare Platforms',
      rating: 5,
    },
  ] as TestimonialItem[],
};

export const WHY_CHOOSE_US_CONTENT = {
  eyebrow: 'WHY CHOOSE US',
  title: 'Reasons Enterprises Trust Us',
  subtitle:
    'We combine proprietary AI acceleration tools with proven software engineering discipline to deliver deterministic modernization results.',
  reasons: [
    {
      title: 'Enterprise Expertise',
      description:
        'Deep experience modernizing mission-critical systems for large organizations.',
    },
    {
      title: 'AI Powered Automation',
      description:
        'AI accelerates assessment, transformation and documentation across every engagement.',
    },
    {
      title: 'Faster Delivery',
      description:
        'Structured modernization frameworks compress delivery timelines without cutting corners.',
    },
    {
      title: 'Lower Modernization Costs',
      description:
        'Automation and reusable patterns reduce the cost of large-scale transformation.',
    },
    {
      title: 'Risk Reduction',
      description:
        'Phased, well-tested migrations protect business continuity at every step.',
    },
    {
      title: 'Future Ready Architecture',
      description:
        'Modern, modular architectures that are built to evolve with your business.',
    },
  ],
};

export const FAQ_CONTENT = {
  eyebrow: 'FAQ',
  title: 'Frequently Asked Questions',
  subtitle: "Didn't find what you were looking for?",
  supportEmail: 'wincysoftwaresolutions@gmail.com',
  items: [
    {
      question: 'How do you guarantee business logic preservation during automated transformation?',
      answer:
        'We do not simply run code through generic LLMs. We parse codebases into semantic Abstract Syntax Trees (ASTs), generate exhaustive unit test matrices against the legacy system, and run dual-run shadow traffic comparisons before executing production cutover.',
    },
    {
      question: 'Will our proprietary code or IP be exposed to external third-party models?',
      answer:
        'No. All transformation models and semantic AST engines can run within your isolated, dedicated VPC or on-premise boundary. Your source code and intellectual property remain 100% confidential and are never used for public model training.',
    },
    {
      question: 'How do you handle production downtime during migration?',
      answer:
        'We prioritize zero-downtime modernization strategies. By utilizing the Strangler Fig pattern, database CDC (Change Data Capture) replication, and canary cutovers, existing systems continue handling live traffic while new services are phased in transparently.',
    },
    {
      question: 'What legacy languages and platforms do you specialize in?',
      answer:
        'Our core capabilities include COBOL, RPG, mainframe environments, legacy Java (J2EE), legacy C#/.NET Framework, Visual Basic, Delphi, and monolithic PHP or Python systems.',
    },
    {
      question: 'What is included in the Free Legacy Architecture Assessment?',
      answer:
        'The free assessment provides a preliminary scan report detailing estimated technical debt, architectural complexity, vulnerability indicators, and an approximate phased modernization timeframe.',
    },
    {
      question: 'What kind of support is provided post-modernization?',
      answer:
        'We provide comprehensive knowledge transfer, developer documentation portals, observability dashboard setups, and continuous post-launch optimization retainers to ensure your internal engineering teams are fully empowered.',
    },
  ],
};

export const CONTACT_CONTENT = {
  eyebrow: 'GET IN TOUCH',
  title: "Let's Discuss Your Modernization Journey",
  subtitle:
    'Connect with our modernization specialists to evaluate your existing systems and build a transformation roadmap tailored to your business.',
  address: SITE_CONFIG.location.addressString,
  phone: SITE_CONFIG.contact.phone,
  phoneHref: SITE_CONFIG.contact.phoneHref,
  email: SITE_CONFIG.contact.email,
};

export const CTA_BAND_CONTENT = {
  title: 'Ready to Modernize Your Legacy Applications?',
  body:
    'Discover how AI-powered modernization can reduce costs, improve agility, and accelerate digital transformation.',
  buttonLabel: 'Book a Consultation',
  buttonHref: '/book-a-demo',
};

export const FOOTER_CONTENT = {
  description:
    'Wincy Software Solutions is an AI-powered legacy modernization engineering firm based in Chennai, India. We empower enterprises to modernize mission-critical monoliths into agile, cloud-native platforms.',
  copyright: 'Wincy Software Solutions. All rights reserved.',
};

export const INSIGHTS_CONTENT: InsightItem[] = [
  {
    slug: 'the-death-of-the-big-bang-migration',
    title: 'The Death of the Big Bang Migration: Why AI-Driven Phased Refactoring Wins',
    excerpt:
      'Explore how modern enterprise engineering leaders are replacing risky multi-year overhauls with continuous, AI-assisted Strangler Fig modernizations.',
    category: 'Architecture',
    readTime: '6 min read',
    publishedDate: 'October 12, 2026',
    author: {
      name: 'Wincy Engineering Team',
      role: 'Enterprise Modernization Practice',
    },
    content: `Large-scale IT modernization has historically had a sobering track record. Multi-year "rip-and-replace" initiatives routinely exceed budgets, suffer scope creep, and end with catastrophic cutover failures.

In 2026, the paradigm has shifted. Forward-looking CTOs have embraced AI-assisted progressive modernization. By decomposing monoliths incrementally and using semantic AST validation, enterprises de-risk the transformation process while shipping business value every single sprint.`,
  },
  {
    slug: 'how-ast-code-analysis-preserves-legacy-logic',
    title: 'How Abstract Syntax Tree (AST) Analysis Preserves 100% of Legacy Business Logic',
    excerpt:
      'Understanding the deep computer science behind deterministic code transformation versus stochastic prompt generation.',
    category: 'AI & Engineering',
    readTime: '8 min read',
    publishedDate: 'September 28, 2026',
    author: {
      name: 'Wincy AI Research Group',
      role: 'Compiler & Systems Engineering',
    },
    content: `When converting legacy systems (such as COBOL or older Java) to modern TypeScript or Go, standard LLM prompts often introduce hallucinations or miss subtle edge-case calculations.

At Wincy Software Solutions, our proprietary approach merges formal compiler AST parsing with AI intelligence. This guarantees that operational semantics, rounding behaviors, and database triggers remain 100% consistent across architectures.`,
  },
  {
    slug: 'cloud-cost-optimization-post-modernization',
    title: 'Cloud Cost Optimization: Slashing Infrastructure Overhead by 40% After Modernization',
    excerpt:
      'Moving legacy code to the cloud without refactoring creates expensive compute sprawl. Here is how modernizing application architectures unlocks genuine cloud elasticity.',
    category: 'Cloud & DevOps',
    readTime: '5 min read',
    publishedDate: 'August 14, 2026',
    author: {
      name: 'Cloud Practice Lead',
      role: 'Wincy Software Solutions',
    },
    content: `Simply "lifting and shifting" a legacy monolithic application onto cloud virtual machines frequently causes cloud bills to skyrocket. Legacy architectures rarely scale down during low-traffic periods.

By re-architecting systems into event-driven microservices, containerized workloads on Kubernetes or serverless runtimes, enterprises achieve true cloud elasticity—scaling compute to zero when idle and yielding massive operational savings.`,
  },
];
