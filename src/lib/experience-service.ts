class Company {
  // guaranteed values each company should have
  readonly name: string;
  readonly location: string;
  readonly role: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly bullets: Array<string>;
  // optional sources
  redirect?: string;
  extraRedirect?: string;

  constructor(
    name: string,
    location: string,
    role: string,
    startDate: string,
    endDate: string,
    bullets: Array<string>,
  ) {
    this.name = name;
    this.location = location;
    this.role = role;
    this.startDate = startDate;
    this.endDate = endDate;
    this.bullets = bullets;
  }

  set url(link: string) {
    this.redirect = link;
  }

  set extraURL(url: string) {
    this.extraRedirect = url;
  }
}

// Nextdoor experience
const nextdoorBullets = "Waiting to start!".split("•");

const Nextdoor = new Company(
	"Nextdoor",
	"San Francisco, California",
  "Software Engineer Intern",
  "May 2025",
  "August 2025",
  nextdoorBullets.map(bullet => bullet.trim()),
);

Nextdoor.url = "https://about.nextdoor.com/"

// Enova experience
const enovaBullets = "Developed an API in Go, receiving pull request (PR) metadata from GitHub’s Webhook API to automate sending Slack messages, accelerating organizations code review and integration workflow by 42% • Created 7 PostgreSQL tables to track PR metadata and API service subscribers, utilizing lookup tables to reduce service’s data storage usage and eliminate repeated calls by 30% • Integrated service metadata into Datadog, revealing service adoption of 23 developers within 3 weeks of launch".split("•");

const Enova = new Company(
  "Enova",
  "Chicago, Illinois",
  "Software Engineer Intern",
  "June 2024",
  "August 2024",
  enovaBullets.map(bullet => bullet.trim()),
);
Enova.url = "https://www.enova.com/";
// change for the 2024 cohort
Enova.extraURL = "https://www.enova.com/interns/";

// Nextcloud experience
const ncBullets = "Engineered a PHP API enabling MySQL databases to support file metadata storage, enhancing core productfunctionality with diverse metadata display capabilities, resulting in 2 new display options for file information• Increased product’s accessibility on 14 Vue components by adding focus-traps and keyboard listeners, leading to aBITV certification, securing 2 universities as product customers• Developed a ’Personal Files’ view in TypeScript, improving file distinction and eliminating related support ticketsby 90%, earning praise from 12 customers".split("•");
const Nextcloud = new Company(
  "Nextcloud",
  "Stuggart, Germany",
  "Part-time Software Engineer Intern",
  "November 2023",
  "May 2024",
  ncBullets.map(bullet => bullet.trim()),
);
Nextcloud.url = "http://www.nextcloud.com";
Nextcloud.extraURL = "https://youtu.be/fl2BQu2dWZY?si=lsmWHMpEJIk2gxHR&t=238";

// Data Analyst Researcher experience
const uicInternship = "Analyzed correlations between patent data and job market trends using NumPy, uncovering a 12% annual increase in new remote job positions since 2019 • Conducted statistical analysis using Python to explore the relationship between employment rates and patent grants, revealing an increase in employment rates of 1.1% per 1k patent grants".split("•");

const DataAnalyst = new Company(
  "University of Illinois Chicago",
  "Chicago, Illinois",
  "Data Analyst Researcher",
  "June 2023",
  "August 2023",
  uicInternship.map(bullet => bullet.trim()),
);
DataAnalyst.url = "https://engineering.uic.edu/";
DataAnalyst.extraURL = "https://medium.com/@emoral435/my-summer-as-a-data-analyst-intern-b62411e7d67a";

const myExperience: Company[] = [Nextdoor, Enova, Nextcloud, DataAnalyst];

export {
  myExperience,
  Company,
};
