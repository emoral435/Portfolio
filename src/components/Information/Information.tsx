import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import { Box } from '@mui/material';

// BG COLOR : backgroundColor: '#3f50b5', 

export default function Information({ projects } : any) {

  return (
    <Box component={'div'} sx={{width: {xs: '100%', lg: '80rem'}}}>
      <Box sx={{p: 1, boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"}}>
          <AboutMe />
          <Experience />
          <Projects projects={projects}/>
      </Box>
    </Box>
  );
}
