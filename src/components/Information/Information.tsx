import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Koalifications from './Koalifications';
import { Box } from '@mui/material';

// BG COLOR : backgroundColor: '#3f50b5', 

export default function Information() {

  return (
    <Box component={'div'} sx={{width: {xs: '100%', lg: '80rem'}}}>
      <Box sx={{p: 1}}>
          <AboutMe />
          <Experience />
          <Projects />
          <Koalifications />
      </Box>
    </Box>
  );
}
