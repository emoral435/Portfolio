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
    "Enabled early promotion in canary deployments, leading to ~11% faster release cycles across multiple services.",
    "Built a Datadog dashboard for canary rollouts, improving real-time visibility and reducing average incident triage time by ~30%.",
    "Integrated subset-based traffic shifting to safely test experimental images and accelerate rollbacks when needed.",
    "Evaluated Argo Rollouts vs. Flagger and recommended staying with Argo for better maintainability and ecosystem fit."
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
    "Built a Go API to process GitHub Webhook PR events and send Slack notifications, improving code review turnaround by ~42%.",
    "Designed 7 PostgreSQL tables with lookup patterns that reduced redundant calls by ~30% and simplified data access.",
    "Integrated service metrics into Datadog to track adoption—23 developers onboarded within three weeks."
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
    "Built a PHP API enabling MySQL to store new file metadata, adding two new file info display options.",
    "Improved accessibility on 14 Vue components with keyboard navigation and focus traps, contributing to BITV certification.",
    "Developed a TypeScript “Personal Files” view that reduced related support tickets by ~90% and earned customer praise."
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

const myExperience: Company[] = [Nextdoor, Enova, Nextcloud, DataAnalyst];

export { myExperience, Company };