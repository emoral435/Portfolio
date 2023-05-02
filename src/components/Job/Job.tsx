import { Box, Divider, useTheme } from "@mui/material"

const Job = (position: any) => {
    const job = position.position
    const theme = useTheme()
  return (
    <section className='job'>
        <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, gap: {xs: '.1rem', sm: '.5rem'}, alignItems: {xs: 'start', sm: 'center'}}}>
            <p style={{color: theme.palette.text.primary, fontSize: '1.2rem'}}>{job.co}</p>
            <Box component={'p'} sx={{display: {xs :'none', sm: 'block'}}}> - </Box>
            <p className="job-title">{job.title}</p>
        </Box>
        <Box sx={{display: 'flex', gap: '.5rem', alignItems: 'center'}}>
            <p style={{color: theme.palette.text.primary, fontSize: '1rem'}}>{job.loc}</p>
            <Box component={'p'} sx={{display: {xs :'none', sm: 'block'}}}> - </Box>
            <p className="job-title">({job.period})</p>
        </Box>
        <Divider />
        <section style={{padding: '.5rem 2rem'}}>
            <ul>
                {job.bullets.map((bullet : string) => (
                    <li key={bullet}>
                        {bullet}
                    </li>
                ))}
            </ul>
        </section>
    </section>
  )
}

export default Job