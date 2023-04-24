import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Koalifications from './Koalifications';
import ContactMe from './Contact';
import { Box } from '@mui/material';

export default function Information() {

  return (
    <Box component={'div'} sx={{backgroundColor: '#3f50b5', width: {xs: '100%', lg: '80rem'}}}>
      <Box sx={{p: 3}}>
          <AboutMe />
          <Experience />
          <Projects />
          <Koalifications />
          <ContactMe />
      </Box>
    </Box>
  );
}
