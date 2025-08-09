import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { useTheme } from "@mui/material/styles";
import Job from '../Job/Job'
import { Company, myExperience } from '../../lib/experience-service'

// Choose your accent color per company here (any valid CSS color)
const accentMap: Record<string, string> = {
  Nextdoor: '#69B36D',      // example brand-ish green
  Enova: '#1B6DE0',         // cloud blue, same as Nextcloud
  Nextcloud: '#1B6DE0',     // cloud blue
  'University of Illinois Chicago': '#D50032', // UIC red
  // fallback handled in Job.tsx if a name isn't listed
}

const Experience = () => {
  const theme = useTheme()

  return (
    <Accordion id='Experience' style={{ boxShadow: "none" }}>
      <AccordionSummary
        expandIcon={<div></div>}
        sx={{display: 'flex', justifyContent: 'center'}}
      >
        <Typography
          component={'div'}
          sx={{
            fontFamily: 'Roboto Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
            fontWeight: 700,
            fontSize: {xs: '1rem', md: '2rem'},
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4
          }}
        >
          <HomeRepairServiceIcon sx={{ fontSize: 35 }} />
          <h2 style={{ margin: 0 }}>Experience</h2>
          <HomeRepairServiceIcon sx={{ fontSize: 35 }} />
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography component={'div'}>
          <Box
            component={'div'}
            sx={{
              color: theme.palette.text.secondary,
              fontSize: {xs: '.8rem', md: '1rem'},
              fontWeight: 600,
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              fontFamily: 'Roboto Mono, ui-monospace, SFMono-Regular, Menlo, monospace'
            }}
          >
            {myExperience.map((job: Company) => (
              <section key={job.name}>
                <Job position={job} accentColor={accentMap[job.name]} />
              </section>
            ))}
          </Box>
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default Experience
