class Company {
  readonly name: string;
  readonly location: string;
  readonly role: string;
  readonly startDate: string;
  readonly endDate: string;

  // New fields for portfolio layout
  readonly summary: string;            // short intro paragraph
  readonly achievements: string[];     // 2–5 concise bullets
  readonly impact: string;             // single wrap-up sentence
  readonly technologies: string[];     // keywords/tech badges

  // optional
  redirect?: string;
  extraRedirect?: string;
  logoUrl?: string;

  constructor(opts: {
    name: string;
    location: string;
    role: string;
    startDate: string;
    endDate: string;
    summary: string;
    achievements: string[];
    impact: string;
    technologies: string[];
    redirect?: string;
    extraRedirect?: string;
    logoUrl?: string;
  }) {
    this.name = opts.name;
    this.location = opts.location;
    this.role = opts.role;
    this.startDate = opts.startDate;
    this.endDate = opts.endDate;
    this.summary = opts.summary;
    this.achievements = opts.achievements;
    this.impact = opts.impact;
    this.technologies = opts.technologies;
    this.redirect = opts.redirect;
    this.extraRedirect = opts.extraRedirect;
    this.logoUrl = opts.logoUrl;
  }

  set url(link: string) {
    this.redirect = link;
  }
  set extraURL(url: string) {
    this.extraRedirect = url;
  }
}

// ---------- Abridge ----------
const Abridge = new Company({
  name: "Abridge",
  location: "New York City, NY",
  role: "Software Engineer",
  startDate: "July 2026",
  endDate: "Dec 2026",
  summary: "Joined the Platform team to... [still haven't started guys! So trust, this section will pop off when I hit the ground running!]",
  achievements: [
    "Joining the Platform team to work on infrastructure and deployment tooling"
  ],
  impact: "Result: waiting to start...",
  technologies: [
    "Terraform",
    "Kubernetes",
  ],
  redirect: "https://www.abridge.com",
  logoUrl: "/logos/abridge.png"
});

// ---------- Nextdoor ----------
const Nextdoor = new Company({
  name: "Nextdoor",
  location: "San Francisco, California",
  role: "Software Engineer Intern",
  startDate: "May 2025",
  endDate: "August 2025",
  summary:
    "Joined the Platform Infrastructure team to improve the systems that power microservice deployments. Focused on faster, safer canary rollouts and clearer observability for engineering teams.",
  achievements: [
    "Optimized Nextdoor’s canary deployment pipeline, contributing an open source PR to Argo Rollouts (CNCF Kubernetes project) removing hard-coded pod thresholds, reducing release latency by 11% across 4+ microservices",
    "Designed and deployed a Datadog-based observability layer with per-cluster agent scraping, improving canary telemetry across 6 services and cutting incident triage time by 30%",
    "Implemented traffic-shifting and service-mesh routing via subset-based DestinationRules, extending Argo Rollouts through an open source contribution , enabling A/B testing of experimental images in production across 2 services"
  ],
  impact:
    "Result: releases became faster, safer, and easier to monitor—helping teams ship with more confidence.",
  technologies: [
    "Go",
    "Kubernetes",
    "Helm",
    "Argo Rollouts",
    "Prometheus",
    "Datadog"
  ],
  redirect: "https://about.nextdoor.com/",
  logoUrl: "/logos/nextdoor.svg"
});

// ---------- Enova ----------
const Enova = new Company({
  name: "Enova",
  location: "Chicago, Illinois",
  role: "Software Engineer Intern",
  startDate: "June 2024",
  endDate: "August 2024",
  summary:
    "Worked with the data engineering team to turn manual developer workflows into automated, data-driven processes for faster code reviews and clearer adoption metrics.",
  achievements: [
    "Developed a backend API in Go to ingest GitHub webhook metadata and trigger automated Slack notifications, accelerating the organization’s code review pipeline by 42%",
    "Designed and normalized 7 PostgreSQL tables to track PR metadata and API subscribers, reducing redundant queries by 30% and improving long-term data storage efficiency",
    "Integrated Datadog service metadata logging, surfacing adoption metrics across 23 developers within 3 weeks of launch and establishing observability for future instrumentation"
  ],
  impact:
    "Result: engineers moved faster with higher visibility into review pipelines and service usage.",
  technologies: ["Go", "PostgreSQL", "Datadog", "GitHub Webhooks", "Slack API"],
  redirect: "https://www.enova.com/",
  extraRedirect: "https://www.enova.com/interns/",
  logoUrl: "/logos/enova.png"
});

// ---------- Nextcloud ----------
const Nextcloud = new Company({
  name: "Nextcloud",
  location: "Stuttgart, Germany",
  role: "Part-time Software Engineer Intern",
  startDate: "November 2023",
  endDate: "May 2024",
  summary:
    "Contributed to the frontend and accessibility teams of an open-source collaboration platform, improving usability and inclusivity for diverse users.",
  achievements: [
    "Built a PHP API enabling extensible file metadata storage in MySQL, expanding core product functionality and supporting two new file-information display modes used by enterprise customers",
    "Enhanced frontend accessibility and keyboard navigation across 14+ Vue.js components via focus-traps, event listeners, and ARIA-aligned semantics, contributing to two university-level partnerships"
  ],
  impact:
    "Result: a more capable and accessible product that supported new university partnerships.",
  technologies: ["PHP", "MySQL", "TypeScript", "Vue.js", "Accessibility (BITV)"],
  redirect: "https://www.nextcloud.com",
  extraRedirect: "https://youtu.be/fl2BQu2dWZY?si=lsmWHMpEJIk2gxHR&t=238",
  logoUrl: "/logos/nextcloud.png"
});

// ---------- University of Illinois Chicago ----------
const DataAnalyst = new Company({
  name: "University of Illinois Chicago",
  location: "Chicago, Illinois",
  role: "Data Analyst",
  startDate: "June 2023",
  endDate: "August 2023",
  summary:
    "Collaborated with a professor to analyze patent data and labor trends using Python and statistical modeling.",
  achievements: [
    "Identified a ~12% annual increase in remote job postings since 2019 through large-scale analysis.",
    "Observed a positive relationship between patent grants and employment rates (~1.1% increase per 1,000 grants)."
  ],
  impact:
    "Result: research offered actionable insight into how innovation correlates with employment trends.",
  technologies: ["Python", "NumPy", "Pandas", "Jupyter Notebooks"],
  redirect: "https://engineering.uic.edu/",
  extraRedirect:
    "https://medium.com/@emoral435/my-summer-as-a-data-analyst-intern-b62411e7d67a",
  logoUrl: "/logos/uic.png"
});

const myExperience: Company[] = [Abridge, Nextdoor, Enova, Nextcloud, DataAnalyst];

export { myExperience, Company };