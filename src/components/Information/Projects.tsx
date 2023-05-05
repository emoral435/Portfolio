import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import PROJECTS from '/src/assets/projects.svg'
import PROJECTSW from '/src/assets/projectsWhite.svg'
import getStaticProps from '../../functions/getStaticProps';
import { useEffect, useState } from 'react';
import ProjectBox from '../Project/Project';
import { useTheme } from "@mui/material/styles";

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
              <Box className="grid-container grid-project-fit" sx={{gap: '3rem', alignItems: 'center'}}>
                {projects.length > 0 && projects.map((project : any) =>(
                  <ProjectBox project={project} key={project.name} />
                ))}
              </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default Projects