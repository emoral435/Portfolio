import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import contact from '/src/assets/contact.svg'
import contactW from '/src/assets/contactWhite.svg'
import { useTheme } from '@emotion/react'

const ContactMe = () => {
    const theme = useTheme()

    const contactSrc = theme.palette.mode == 'light' ? contact : contactW

  return (
    <Accordion id='Contact Me' style={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<div></div>}
          sx={{display: 'flex', justifyContent: 'center'}}
        >
          <Typography sx={{ fontWeight: 700, fontSize: {xs: '1rem', md: '2rem'}, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4}}>
            <h2>Contact Me</h2>
            <img src={contactSrc} alt="" className='accordian-img' />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color: theme.palette.text.secondary, fontSize: '1.2rem'}}>
            <Box sx={{color: theme.palette.text.secondary, fontSize: '1rem'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default ContactMe