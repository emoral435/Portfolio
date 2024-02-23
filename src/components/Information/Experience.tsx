import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { useTheme } from "@mui/material/styles";
import Job from '../Job/Job'
import { Company, myExperience } from '../../services/ExperienceService';


const Experience = () => {
  const theme = useTheme()

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
              {myExperience.map((job: Company) => (
                <section key={job.name}>
                  <Job company={job} />
                </section>
              ))}
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default Experience