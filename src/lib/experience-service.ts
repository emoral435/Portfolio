export class Company {
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
const nextdoorBullets = [
	"Waiting to start!",
];

const Nextdoor = new Company(
	"Nextdoor",
	"San Francisco, California",
    "Software Engineer Intern",
    "May 2025",
    "August 2025",
    nextdoorBullets,
);

Nextdoor.url = "https://about.nextdoor.com/"
// Enova experience
const enovaBullets = [
  "Developed an API in Go, receiving repository metadata from GitHub’s Webhook API to automate sending Slack messages regarding new pull requests and code reviews, accelerating pull request and code review workflow by 42%",
  "Created 7 on-premise PostgreSQL tables to store pull-request metadata and track developers who are subscribed to the pull request service and funneled the information into Datadog, showcasing over 60% of developers use the service",
  "Provisioned a new Wharf instance utilizing Terraform to manage private endpoints and authorized IP addresses, reducing CI/CD churn and increasing container deployment velocity by 15% during the development to production pipeline",
];
const Enova = new Company(
  "Enova",
  "Chicago, Illinois",
  "Software Engineer Intern",
  "June 2024",
  "August 2024",
  enovaBullets,
);
Enova.url = "https://www.enova.com/";
// change for the 2024 cohort
Enova.extraURL = "https://www.enova.com/interns/";

// Nextcloud experience
const ncBullets = [
  "Developed an API in PHP to extend legacy MySQL databases to support storing file metadata," +
    " resulting in version history and version author being displayed for each file, with support to display different file metadata in the future",

  "Increased product's accessibility functionality to 10+ Vue.js components by adding focus-traps and keyboard listeners," +
    " leading to a BITV certification, garnering new contracts for customers who wanted to use the product within Universities",

  "Implemented a 'Personal Files' view by filtering out shared resources returned by WebDAV queries made in TypeScript," +
    " enabling users to be able to differentiate between shared or personal files and folders",

  "Refactored menu options in Vue.js to re-render every 30 minutes, ensuring menu displays accurate time-reliant actions",

  "Collaborated with 12 engineers, maintaining CI/CD on an open-source content-collaboration product with 2.2M users",
];
const Nextcloud = new Company(
  "Nextcloud",
  "Stuggart, Germany",
  "Part-time Software Engineer Intern",
  "November 2023",
  "May 2024",
  ncBullets,
);
Nextcloud.url = "http://www.nextcloud.com";
Nextcloud.extraURL = "https://youtu.be/fl2BQu2dWZY?si=lsmWHMpEJIk2gxHR&t=238";

// Data Analyst Researcher experience
const uicInternship = [
  "Examined 20 gigabytes of patent data spanning over 3 decades, using Pandas to create dataframes relating to remote job" +
    " positions, yielding a finding of the 10 most valued developer skills and traits from online job postings",

  "Discovered an average 12% increase yearly since 2019 in new remote job positions, using Word2Vec to find associated" +
    " documents created from patent and job dataframes, concluding that granted patents from 2 years prior led to the increase",

  "Researched the relationship between unemployment and the number of yearly granted patents within the U.S. using Python," +
    " finding a positive 1:1 correlation between unemployment percentage and the number of granted patents",
];

const DataAnalyst = new Company(
  "University of Illinois Chicago",
  "Chicago, Illinois",
  "Data Analyst",
  "June 2023",
  "August 2023",
  uicInternship,
);
DataAnalyst.url = "https://engineering.uic.edu/";
DataAnalyst.extraURL =
  "https://medium.com/@emoral435/my-summer-as-a-data-analyst-intern-b62411e7d67a";

export const myExperience = [Nextdoor, Enova, Nextcloud, DataAnalyst];
