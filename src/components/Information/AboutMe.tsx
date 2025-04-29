import { useTheme } from "@mui/material/styles";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, Button } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
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
					I began my coding journey through Harvard’s CS50 course, where I was drawn to its rigor, challenge, and emphasis on understanding the lower-level inner workings of computers. Even as a kid, I loved taking apart computers to learn how they functioned, and that same curiosity continues to drive me today.
				</div>
				<div>
					Since then, I’ve embraced programming as a lifelong learning journey, enjoying the constant opportunities to grow and the new challenges each day brings.
				</div>
				<div>
					Outside of coding, I’m a proud cat dad and a lifelong fan of building with Legos.
				</div>
				<Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', gap: 4}}>
					<a href={'/EduardoMoralesResume.pdf'} download="EduardoMoralesResume">
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