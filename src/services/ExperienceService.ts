import NC from "../assets/nextcloud.svg"
import EPNG from "../assets/enova.png"

export class Company {
    // guaranteed values each company should have
    readonly name: string
    readonly location: string
    readonly position: string
    readonly startDate: string
    readonly endDate: string
    readonly bullets: Array<string>
    // optional sources
    redirect?: string
    icon?: string

    constructor(name: string, location: string, positon: string, startDate: string, endDate: string, bullets: Array<string>) {
        this.name = name
        this.location = location
        this.position = positon
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
}


const aldiBullets = [
    'Aided in working with customers to provide satisfactory supplies and food in a timely manner',
    'Responsible for closing and opening the store, managing cash, making deposits, and aiding in a swift transition between shifts'
]

const tsiBullets = [
    'Became proficient in binary, whilst learning operating systems and BIOS operations',
    'Repaired computers on a hardware and software level to a school of 3000, becoming a lead for computer repairs',
    'Excelled in customer support, assessing damages or faults and getting customers out within five minutes or less'
]

// Enova experience
const enovaBullets = [
    'Waiting to start!',
]
const Enova = new Company("Enova", "Chicago, Illinois", "Full-time Software Engineer Intern", "June 2024", "August 2024", enovaBullets)
Enova.iconSrc = EPNG
Enova.url = "https://www.enova.com/"

// Nextcloud experience
const ncBullets = [
    'Waiting to start!',
]
const Nextcloud = new Company("Nextcloud", "Stuggart, Germany", "Part-time Software Engineer Intern", "Nov. 2023", "May 2024", ncBullets)
Nextcloud.iconSrc = NC
Nextcloud.url = "http://www.nextcloud.com"

// Data Analyst experience
const uicInternship = [
    'Examined 20 gigabytes of patent data sets spanning over 3 decades, finding relations in patents and job trends',
    'Succeeded in finding the 10 most valued developer skills from online job posting documents',
    'Showcased a 12 percent increase in similarities between job descriptions and patent details 2 years after being granted by applying SciKitLearn word embedding methods.'
]
const DataAnalyst = new Company("University of Illinois Chicago", "Chicago, Illinois", "Full-time Data Analyst", "June 2023", "August 2023", uicInternship)
DataAnalyst.url = "https://medium.com/@emoral435/my-summer-as-a-data-analyst-intern-b62411e7d67a"

// Misc experience
const Aldi = new Company("Aldi", "Berwyn, Cicero", "Part-time Cashier", "June 2022", "August 2022", aldiBullets)
const TSI = new Company("Tech Service Internship", "Berwyn, Cicero", "Computer Hardware Specialist", "August 2021", "May 2022", tsiBullets)


export const myExperience = [
    Enova,
    Nextcloud,
    DataAnalyst,
    Aldi,
    TSI
]