import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ProjectBox from '../Project/Project';

const Projects = ({projects}:any) => {
	return (
		<Accordion id='Projects' style={{ boxShadow: "none" }} >
				<AccordionSummary
					expandIcon={<div></div>}
					sx={{display: 'flex', justifyContent: 'center'}}
				>
					<Typography component={'div'} sx={{ fontWeight: 700, fontSize: {xs: '1rem', md: '2rem'}, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4}}>
						<AccountTreeIcon sx={{ fontSize: 35 }} />
						<h2>Projects</h2>
						<AccountTreeIcon sx={{ fontSize: 35 }} />
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography component={'div'}>
				{
				projects ?
					<Box className="grid-container grid-project-fit" sx={{gap: '3rem', alignItems: 'center'}}>
						{projects.length > 0 && projects.map((project : any) =>(
						<ProjectBox project={project} key={project.name} />
						))}
					</Box>
				: <div></div>
				}
					</Typography>
				</AccordionDetails>
			</Accordion>
	)
}

export default Projects