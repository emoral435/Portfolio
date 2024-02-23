import NC from "../assets/nextcloud.svg"
import EPNG from "../assets/enova.png"

class Company {
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

// Misc experience
const Aldi = new Company("Aldi", "Berwyn, Cicero", "Part-time Cashier", "June 2022", "August 2022", aldiBullets)
const TSI = new Company("Tech Service Internship", "Berwyn, Cicero", "Computer Hardware Specialist", "August 2021", "May 2022", tsiBullets)

export const myExperience = [
    Enova,
    Nextcloud,
    Aldi,
    TSI
]