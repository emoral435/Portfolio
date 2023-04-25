import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import KOALA from '/src/assets/koala.svg'


const Koalifications = () => {
  return (
    <Accordion id='Koalifications' style={{ boxShadow: "none" }} >
        <AccordionSummary
          expandIcon={<div></div>}
          sx={{display: 'flex', justifyContent: 'center'}}
        >
          <Typography sx={{ fontWeight: 700, fontSize: {xs: '1rem', md: '2rem'}, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4}}>
            <h2>Koalifications</h2>
            <img src={KOALA} alt="" className='accordian-img'/>
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

export default Koalifications