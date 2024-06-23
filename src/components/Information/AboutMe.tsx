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
			  	Hi! To keep this short and sweet, if you wanted to know a little more about me, look no further place than here! I have always loved the process of crafting modular pieces, such as origami and jewelry. As time went on, I stumbled across programming by completing Harvard's CS50 and have fell in love with the process ever since, leading me to attend the University of Illinois at Urbana Champaign to study Mathematics and Computer Science.
			  </div>
			  <div>
			  	One last fun fact about me - I also happen to own 7 cats! I am a proud cat dad.
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