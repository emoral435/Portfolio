import { Box, Divider, useTheme } from "@mui/material"
import { Company } from "../../services/ExperienceService"

interface ICompany {
	position: Company,
	alignment: number,
}

const Job = ({ position: job, alignment: indexNum } : ICompany) => {
  	const theme = useTheme()
	const alignment = indexNum % 2 === 0 ? "start" : "end" 


  	return (
		<section>
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: alignment,
				justifyContent: 'center',
			}}>
				<Box sx={{display: 'flex', gap: {xs: '.5rem', sm: '1rem'}, alignItems: 'center', justifyContent: 'center'}}>
					<Box component={job.redirect ? 'a' : 'p'}
						href={job.redirect ?? undefined}
						target={job.redirect ? "_blank" : undefined}
						title={job.redirect ? `Redirect to ${job.name}'s website.` : undefined}
						sx={{
							fontSize: {xs: '2rem', md:'3.5rem'},
							fontWeight: 'Bold',
							color: theme.palette.text.primary,
							textAlign: 'center',
							margin: '0px',
							'&:hover': {color: job.redirect ? theme.palette.primary.light : theme.palette.text.primary}
						}}>
							{job.name}
					</Box>
					
				</Box>
				<Box sx={{display: 'flex', justifyContent: 'center'}}>
					{job.role}
				</Box>
				<Box sx={{margin: ".5rem 0", fontSize: {xs: '.8rem', sm: '1rem'}, display: 'flex', gap: '.5rem', alignItems: alignment, flexDirection: {xs: "column", sm: "row"}, color: theme.palette.text.secondary}}>
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