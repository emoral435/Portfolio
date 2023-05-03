import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import exp from '/src/assets/exp.svg'
import expW from '/src/assets/expWhite.svg'
import { useTheme } from '@emotion/react'
import Job from '../Job/Job'

const makeJob = (co: string, title: string, loc: string, period: string, bullets: string[]) => {
  return {
    co, title, loc, period, bullets
  }
}

const Experience = () => {
    const theme = useTheme()

    const expSrc = theme.palette.mode == 'light' ? exp : expW

    const rsrchBullets = [
      'Researched ways to decrease load times using python',
      'other bullet option'
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
      makeJob('UIC Research Internship', 'Research Assistant', 'Chicago, Illinois', 'June 2023 - August 2023', rsrchBullets),
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
            <h2>Experience</h2>
            <img src={expSrc} alt="" className='accordian-img' />
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