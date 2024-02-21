import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { useTheme } from "@mui/material/styles";
import Job from '../Job/Job'

const makeJob = (co: string, title: string, loc: string, period: string, bullets: string[]) => {
  return {
    co, title, loc, period, bullets
  }
}

const Experience = () => {
    const theme = useTheme()

    const enova = [
      'Waiting to start!',
    ]

    const nextcloud = [
      'Waiting to start!',
    ]

    const dataInterBullets = [
      'Examined 20 gigabytes of patent data sets spanning over 3 decades, finding relations in patents and job trends',
      'Succeeded in finding the 10 most valued developer skills from online job posting documents',
      'Showcased a 12 percent increase in similarities between job descriptions and patent details 2 years after being granted by applying SciKitLearn word embedding methods.'
    ]

    const aldiBullets = [
      'Aided in working with customers to provide satisfactory supplies and food in a timely manner',
      'Knowledgeable in product resources and updates that came from Headquarters',
      'Responsible for closing and opening the store, managing cash, making deposits, and aiding in a swift transition between shifts'
    ]

    const TSIBullets = [
      'Became proficient in binary, whilst learning operating systems and BIOS operations',
      'Repaired computers on a hardware and software level to a school of 3000, becoming a lead for computer repairs',
      'Excelled in customer support, assessing damages or faults and getting customers out within five minutes or less'
    ]

    const Jobs = [
      makeJob('Enova', 'Software Engineering Intern', 'Chicago, Illinois', 'June 2024 - August 2024', enova),
      makeJob('Nextcloud', 'Student Software Engineering Intern', 'Stuttgart, Germany', 'November 2023 - May 2024', nextcloud),
      makeJob('Data Analyst Intern', 'Finding Impactful Innovation via AI Empowered by Text and Networks', 'Chicago, Illinois', 'June 2023 - August 2023', dataInterBullets),
      makeJob('Aldi', 'Sales Associate', 'Berwyn, Illinois', 'May 2022 - August 2022', aldiBullets),
      makeJob('Tech Service', 'Computer Hardware Specialist', 'Cicero, Illinois', 'August 2021 - May 2022', TSIBullets),
    ]

  return (
    <Accordion id='Experience' style={{ boxShadow: "none" }} >
        <AccordionSummary
          expandIcon={<div></div>}
          sx={{display: 'flex', justifyContent: 'center'}}
        >
          <Typography component={'div'} sx={{ fontWeight: 700, fontSize: {xs: '1rem', md: '2rem'}, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4}}>
            <HomeRepairServiceIcon sx={{ fontSize: 35 }} />
            <h2>Experience</h2>
            <HomeRepairServiceIcon sx={{ fontSize: 35 }} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'div'}>
            <Box component={'div'} sx={{color: theme.palette.text.secondary, fontSize: {xs: '.8rem', md: '1rem'}, fontWeight: 600, display: 'flex', flexDirection: 'column', gap: 3}}>
              {Jobs.map((job) => (
                <section key={job.co}>
                  <Job position={job} />
                </section>
              ))}
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default Experience