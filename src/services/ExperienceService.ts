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
    'Waiting to start!',
]
const Nextcloud = new Company("Nextcloud", "Stuggart, Germany", "Part-time Software Engineer Intern", "Nov. 2023", "May 2024", ncBullets)
Nextcloud.iconSrc = NC
Nextcloud.url = "http://www.nextcloud.com"
Nextcloud.extraURL = "https://nextcloud.com/team/"

// Data Analyst experience
const uicInternship = [
	'Examined 20 gigabytes of patent data sets spanning over 3 decades, finding relations in patents and job trends',
    'Succeeded in finding the 10 most valued developer skills from online job posting documents',
    'Showcased a 12 percent increase in similarities between job descriptions and patent details 2 years after being granted by applying SciKitLearn word embedding methods.'
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