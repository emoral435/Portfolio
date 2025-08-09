import { useTheme } from "@mui/material/styles";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, Button } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'

const AboutMe = () => {
  const theme = useTheme()
  const accent = theme.palette.primary.main // ✅ matches Experience style

  return (
    <Accordion id='About' style={{ boxShadow: "none" }}>
      <AccordionSummary
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Typography
          component={'div'}
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1rem', md: '2rem' },
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4
          }}
        >
          <InfoIcon sx={{ fontSize: 35 }} />
          <h2>About Me</h2>
          <InfoIcon sx={{ fontSize: 35 }} />
        </Typography>
      </AccordionSummary>

      <AccordionDetails style={{ boxShadow: "none" }}>
        {/* ✅ Added borderLeft to match Experience style */}
        <Box
          sx={{
            borderLeft: `4px solid ${accent}`,
            pl: 2,
            fontFamily: 'Roboto Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
            color: theme.palette.text.secondary,
            fontSize: { xs: '.8rem', md: '1rem' },
            fontWeight: 600,
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}
        >
          <div>
            I got my start in coding through Harvard’s CS50, where I was drawn to the rigor and low-level problem solving. As a kid, I loved taking apart computers to see how they worked—and that same curiosity drives me today. I see programming as a lifelong learning journey, full of new challenges and constant growth.
          </div>
          <div>
            Outside of work, I’m a proud cat dad and a longtime Pokémon fan.
          </div>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
              gap: 4
            }}
          >
            <a href={'/EduardoMoralesResume.pdf'} download="EduardoMoralesResume">
              <Button
                variant='contained'
                size='large'
                sx={{
                  textTransform: 'none',
                  padding: { xs: '1rem 1rem', md: '2rem 2rem' },
                  fontFamily: 'Poppins',
                  borderRadius: '10px'
                }}
              >
                <KeyboardDoubleArrowRightIcon />
                <div>Download Resume</div>
                <KeyboardDoubleArrowLeftIcon />
              </Button>
            </a>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default AboutMe
