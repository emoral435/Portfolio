import { useTheme } from '@emotion/react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, Button } from '@mui/material'
import info from '/src/assets/info.svg'
import infoW from '/src/assets/infoW.svg'
import RESUME from '/src/Resume/EduardoMorales.pdf'
import ARROW from '/src/assets/arrowWhite.svg'

const techStack = [
  {num: '5+', desc: 'Programming Languages'},
  {num: '8+', desc: 'Completed Github Projects'},
  {num: '4+', desc: 'Frameworks and Libraries'}
]



const AboutMe = () => {
    const theme = useTheme()

    const aboutSrc = theme.palette.mode == 'light' ? info : infoW

    const displayStacks = (
      <Box sx={{display: 'flex', gap: 4}} component={'section'}>
        {techStack.map((item) => (
          <Box component={'section'} sx={{display: 'flex', flexDirection: 'column', maxWidth: 'min-content', alignItems: 'center'}} key={item.num}>
            <div style={{color: theme.palette.text.primary, fontSize: '1.7rem'}}>{item.num}</div>
            <div style={{textAlign: 'center'}}>{item.desc}</div>
          </Box>
        ))}
      </Box>
    )

  return (
    <Accordion id='About' style={{ boxShadow: "none" }}>
        <AccordionSummary
          sx={{display: 'flex', justifyContent: 'center'}}
        >
          <Typography component={'div'} sx={{ fontWeight: 700, fontSize: {xs: '1rem', md: '2rem'}, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4}}>
            <h2>About Me</h2>
            <img src={aboutSrc} alt="" className='accordian-img' />
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ boxShadow: "none" }}>
        <Typography sx={{color: theme.palette.text.secondary, fontSize: '1.2rem'}} component={'div'}>
            <Box sx={{color: theme.palette.text.secondary, fontSize: {xs: '.8rem', md: '1rem'}, fontWeight: 600, display: 'flex', flexDirection: 'column', gap: 3}}>
              <div>I discovered my passion for problem solving ever since I was little and tinkered with origami. The intricacies of origami and the problems
                 that a simple sheet of paper can help me solve–such as making my own container to store paper clips–gave me lots of joy. Flash forward to today, and competing in hackathons like SparkHacks and hearing stories about the types of problems that 
              computer scientists can solve all lead me to studying computer science at the University of Illinois Chicago. I am interested in
              making dynamic websites and mobile app development with Swift. </div>
              <div>I like building projects related to my toolkit that solves little problems around my life that I believe can be done more effectively. I also
              love trying new foods to eat around the city. I am also a google local tour, related to my food habits. In addition, I love to go to the gym, and love being outdoors.
              If you would like to know more about me, click on my resume below.</div>
              <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: 'center', justifyContent: 'space-around', gap: 4}}>
                {displayStacks}
                <a href={RESUME} download="EduardoMorales.pdf">
                    <Button variant='contained' size='large' sx={{textTransform: 'none', padding: {xs: '1rem 1rem',md: '2rem 2rem'}, fontFamily: 'Poppins', borderRadius: '10px'}}>
                      <img src={ARROW} alt="" className='arrow'/>
                      <div>Download Resume</div>
                      <img src={ARROW} alt="" className='arrow flip' />
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