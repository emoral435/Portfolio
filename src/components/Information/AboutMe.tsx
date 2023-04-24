import { useTheme } from '@emotion/react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import info from '/src/assets/info.svg'
import infoW from '/src/assets/infoW.svg'

const AboutMe = () => {
    const theme = useTheme()

    const aboutSrc = theme.palette.mode == 'light' ? info : infoW

  return (
    <Accordion id='About'>
        <AccordionSummary
          expandIcon={<div></div>}
          sx={{display: 'flex', justifyContent: 'center'}}
        >
          <Typography sx={{ fontWeight: 700, fontSize: {xs: '1rem', md: '2rem'}, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4}}>
            <h2>About Me</h2>
            <img src={aboutSrc} alt="" className='accordian-img' />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography sx={{color: theme.palette.text.secondary, fontSize: '1.2rem'}}>
            <Box sx={{color: theme.palette.text.secondary, fontSize: {xs: '.6rem', md: '.8rem'}, fontWeight: 600, display: 'flex', flexDirection: 'column', gap: 3}}>
              <h2>I discovered my passion for problem solving ever since I was little and tinkered with origami. The intricacies of origami and the problems
                 that a simple sheet of paper can help me solve, such as making my own container to store paper clips, gave me a lot of joy. Flash forward to today, and competing in hackathons like SparkHacks and hearing stories about the types of problems that 
              computer scientists can solve all lead me to studying computer science at the University of Illinois Chicago. I am interested in
              making websites accessible, and I am interested in mobile app development with Swift. </h2>
              <h2>I like building projects related to my toolkit that solves little problems around my life that I believe can be done more effectively. I also
              love trying new foods to eat around the city. I am also a google local tour, related to my food habits. I also love to go to the gym, and love being outdoors.</h2>
              <Box></Box>
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default AboutMe