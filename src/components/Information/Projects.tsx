import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import PROJECTS from '/src/assets/projects.svg'
import PROJECTSW from '/src/assets/projectsWhite.svg'
import { useTheme } from '@emotion/react';
import project from '/src/assets/project.svg'
import folder from '/src/assets/folder.svg'
import getStaticProps from '../../functions/getStaticProps';
import { useEffect, useState } from 'react';


const Projects = () => {
    const theme = useTheme()
    const [projects, setProjects] = useState<any>([])

    useEffect(() => {
      getStaticProps()
        .then((result:any) => {
          setProjects(result.pinnedItems)
        })
    }, [])

    const projectsSrc = theme.palette.mode == 'light' ? PROJECTS : PROJECTSW

  return (
    <Accordion id='Projects' style={{ boxShadow: "none" }} >
        <AccordionSummary
          expandIcon={<div></div>}
          sx={{display: 'flex', justifyContent: 'center'}}
        >
          <Typography component={'div'} sx={{ fontWeight: 700, fontSize: {xs: '1rem', md: '2rem'}, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4}}>
            <h2>Projects</h2>
            <img src={projectsSrc} alt="" className='accordian-img'/>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'div'}>
            <Box className="grid-container grid-auto-fit">
              {projects.length && projects.map((project : any) =>(
                <div>hello</div>
              ))}
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default Projects