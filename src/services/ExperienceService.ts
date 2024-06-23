import NC from "../assets/nextcloud.svg"
import EPNG from "../assets/enova.png"
import UIC from "../assets/UIC.svg"

export class Company {
    // guaranteed values each company should have
    readonly name: string
    readonly location: string
    readonly role: string
    readonly startDate: string
    readonly endDate: string
    readonly bullets: Array<string>
    // optional sources
    redirect?: string
    icon?: string
	extraRedirect?: string

    constructor(name: string, location: string, role: string, startDate: string, endDate: string, bullets: Array<string>) {
        this.name = name
        this.location = location
        this.role = role
        this.startDate = startDate
        this.endDate = endDate
        this.bullets = bullets
    }

    set iconSrc(src: string) {
        this.icon = src
    }

    set url(link: string) {
        this.redirect = link
    }

	set extraURL(url: string) {
		this.extraRedirect = url
	}
}

// Enova experience
const enovaBullets = [
    'Waiting to start!',
]
const Enova = new Company("Enova", "Chicago, Illinois", "Full-time Software Engineer Intern", "June 2024", "August 2024", enovaBullets)
Enova.iconSrc = EPNG
Enova.url = "https://www.enova.com/"
// change for the 2024 cohort
Enova.extraURL = "https://nextcloud.com/team/"

// Nextcloud experience
const ncBullets = [
    'Developed an API in PHP to extend legacy MySQL databases to support storing file metadata,' + 
    ' resulting in version history and version author being displayed for each file, with support to display different file metadata in the future',

    'Increased product\'s accessibility functionality to 10+ Vue.js components by adding focus-traps and keyboard listeners,' + 
    ' leading to a BITV certification, garnering new contracts for customers who wanted to use the product within Universities',

    'Implemented a \'Personal Files\' view by filtering out shared resources returned by WebDAV queries made in TypeScript,' + 
    ' enabling users to be able to differentiate between shared or personal files and folders',

    'Refactored menu options in Vue.js to re-render every 30 minutes, ensuring menu displays accurate time-reliant actions',

    'Collaborated with 12 engineers, maintaining CI/CD on an open-source content-collaboration product with 2.2M users',

]
const Nextcloud = new Company("Nextcloud", "Stuggart, Germany", "Part-time Software Engineer Intern", "Nov. 2023", "May 2024", ncBullets)
Nextcloud.iconSrc = NC
Nextcloud.url = "http://www.nextcloud.com"
Nextcloud.extraURL = "https://youtu.be/fl2BQu2dWZY?si=lsmWHMpEJIk2gxHR&t=238"

// Data Analyst Researcher experience
const uicInternship = [
	'Examined 20 gigabytes of patent data spanning over 3 decades, using Pandas to create dataframes relating to remote job' + 
    ' positions, yielding a finding of the 10 most valued developer skills and traits from online job postings',

    'Discovered an average 12% increase yearly since 2019 in new remote job positions, using Word2Vec to find associated' + 
    ' documents created from patent and job dataframes, concluding that granted patents from 2 years prior led to the increase',

    'Researched the relationship between unemployment and the number of yearly granted patents within the U.S. using Python,' + 
    ' finding a positive 1:1 correlation between unemployment percentage and the number of granted patents',
    
]

const DataAnalyst = new Company("University of Illinois Chicago", "Chicago, Illinois", "Full-time Data Analyst", "June 2023", "August 2023", uicInternship)
DataAnalyst.url = "https://engineering.uic.edu/"
DataAnalyst.iconSrc = UIC
DataAnalyst.extraURL = "https://medium.com/@emoral435/my-summer-as-a-data-analyst-intern-b62411e7d67a"

export const myExperience = [
    Enova,
    Nextcloud,
    DataAnalyst,
]