import { useTheme } from "@mui/material/styles";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, Button } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import RESUME from '/src/resume/EduardoMorales.pdf'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'

const AboutMe = () => {
    const theme = useTheme()

  return (
    <Accordion id='About' style={{ boxShadow: "none" }}>
        <AccordionSummary
          sx={{display: 'flex', justifyContent: 'center'}}
        >
          <Typography component={'div'} sx={{ fontWeight: 700, fontSize: {xs: '1rem', md: '2rem'}, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4}}>
            <InfoIcon sx={{ fontSize: 35 }} />
            <h2>About Me</h2>
            <InfoIcon sx={{ fontSize: 35 }} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ boxShadow: "none" }}>
        <Typography sx={{color: theme.palette.text.secondary, fontSize: '1.2rem'}} component={'div'}>
            <Box sx={{color: theme.palette.text.secondary, fontSize: {xs: '.8rem', md: '1rem'}, fontWeight: 600, display: 'flex', flexDirection: 'column', gap: 3}}>
              <div>
				Hello! To keep this short and sweet, if you wanted to know a little more about me, look no further place than here! I have always loved the process of making random things
				such as Origami and Jewelry (two of my favorite hobbies!). As time went on, I stumbled across web development and have fell in love with it ever since, and I now currently
				attend the University of Illinois Chicago.
			  </div>
			  <div>
			  	One last tid bit about me - I also happen to own 7 cats! I am a proud cat dad.
			  </div>
              <div>
				I like building projects related to my toolkit that solves little problems around my life that I believe can be done more effectively. I also
              	love trying new foods to eat around the city. I am also a google local tour, related to my food habits. In addition, I love to go to the gym, and love being outdoors.
              	If you would like to know more about me, click on my resume below!
			  </div>
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', gap: 4}}>
                <a href={RESUME} download="EduardoMorales.pdf">
                    <Button variant='contained' size='large' sx={{textTransform: 'none', padding: {xs: '1rem 1rem',md: '2rem 2rem'}, fontFamily: 'Poppins', borderRadius: '10px'}}>
                      <KeyboardDoubleArrowRightIcon />
                      <div>Download Resume</div>
                      <KeyboardDoubleArrowLeftIcon />
                    </Button>
                </a>
              </Box>
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default AboutMe