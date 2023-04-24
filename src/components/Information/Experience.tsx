import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import exp from '/src/assets/exp.svg'
import expW from '/src/assets/expWhite.svg'
import { useTheme } from '@emotion/react'

const Experience = () => {
    const theme = useTheme()

    const expSrc = theme.palette.mode == 'light' ? exp : expW

  return (
    <Accordion id='Experience' >
        <AccordionSummary
          expandIcon={<div></div>}
          sx={{display: 'flex', justifyContent: 'center'}}
        >
          <Typography sx={{ fontWeight: 700, fontSize: {xs: '1rem', md: '2rem'}, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4}}>
            <h2>Experience</h2>
            <img src={expSrc} alt="" className='accordian-img' />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default Experience