import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import PROJECTS from '/src/assets/projects.svg'
import PROJECTSW from '/src/assets/projectsWhite.svg'
import { useTheme } from '@emotion/react';


const Projects = () => {
    const theme = useTheme()

    const projectsSrc = theme.palette.mode == 'light' ? PROJECTS : PROJECTSW

  return (
    <Accordion id='Projects' style={{ boxShadow: "none" }} >
        <AccordionSummary
          expandIcon={<div></div>}
          sx={{display: 'flex', justifyContent: 'center'}}
        >
          <Typography sx={{ fontWeight: 700, fontSize: {xs: '1rem', md: '2rem'}, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4}}>
            <h2>Projects</h2>
            <img src={projectsSrc} alt="" className='accordian-img'/>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default Projects