import { Box, Divider, useTheme } from "@mui/material"
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import { Company } from "../../services/ExperienceService"

interface ICompany {
	position: Company,
}

const Job = ({ position: job } : ICompany) => {
  const theme = useTheme()

  return (
    <section>
        <Box sx={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			gap: 1,
		}}>
			<Box sx={{display: 'flex', gap: {xs: '.5rem', sm: '1rem'}, alignItems: 'center', justifyContent: 'center'}}>
				{
					job.icon 
					? <Box src={job.icon}
						component="img"
						alt={`${job.name} logo`}
						sx={{
							width: "2rem",
							height: "auto",
						}} />
					: <></>
				}
				<Box component={job.redirect ? 'a' : 'p'}
					href={job.redirect ?? undefined}
					target={job.redirect ? "_blank" : undefined}
					title={job.redirect ? `Redirect to ${job.name}'s website.` : undefined}
					sx={{
						fontSize: {xs: '2rem', md:'3.5rem'},
						fontWeight: 'Bold',
						color: theme.palette.text.primary,
						textAlign: 'center',
						'&:hover': {color: job.redirect ? theme.palette.primary.light : theme.palette.text.primary}
					}}>
						{job.name}
						</Box>
					{
						job.icon 
						? <Box src={job.icon}
						component="img"
						alt={`${job.name} logo`}
						sx={{
							width: "2rem",
							height: "auto",
						}} />
						: <></>
					}
			
			</Box>
			<Box
				component={job.extraRedirect ? 'a' : 'p'}
				href={job.extraRedirect ?? undefined}
				target={job.extraRedirect ? "_blank" : undefined}
				title={job.extraRedirect ? `Redirect to see extra information.` : undefined}
				sx={{
					
					display: "flex",
					alignItems: "center",
					textAlign: "center",
					color: theme.palette.text.primary,
					fontSize: {xs: ".9rem", sm: "1.5rem"},
					'&:hover': {color: job.extraRedirect ? theme.palette.primary.light : theme.palette.text.primary}
				}}>
				<ArrowRightIcon />
				{job.role}
				<ArrowLeftIcon />
			</Box>
			<Box sx={{margin: ".5rem 0", fontSize: {xs: '.8rem', sm: '1rem'}, display: 'flex', gap: '.5rem', alignItems: 'center', flexDirection: {xs: "column", sm: "row"}, color: theme.palette.text.secondary}}>
				<p style={{color: theme.palette.text.primary}}>{job.location}</p>
				<Box component={'p'} sx={{display: {xs :'none', sm: 'block'}}}> | </Box>
				<p style={{color: theme.palette.text.primary}}>{job.startDate} - {job.endDate}</p>
			</Box>
		</Box>
        <Divider />
        <section style={{padding: '.5rem 2rem', color: theme.palette.text.primary}}>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '.5rem'}}>
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