import { Box, Typography } from '@mui/material';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ProjectBox from '../Project/Project';
import { projectNode } from '../../lib/constants';
import { useTheme } from "@mui/material/styles";

interface projectsProps {
  projects: projectNode[]
  description?: string
}

const ProjectsContent = ({ projects, description } : projectsProps) => {
  const theme = useTheme()

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Typography 
          component={'div'} 
          sx={{ 
            fontWeight: 700, 
            fontSize: {xs: '1rem', md: '2rem'}, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 4
          }}
        >
          <AccountTreeIcon sx={{ fontSize: 35 }} />
          <h2>Projects</h2>
          <AccountTreeIcon sx={{ fontSize: 35 }} />
        </Typography>
      </Box>

      {description && (
        <Box
          sx={{
            mb: 4,
            p: 2,
            borderLeft: `4px solid ${theme.palette.primary.main}`,
            fontFamily: 'Roboto Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
            color: theme.palette.text.secondary,
            fontSize: { xs: '.8rem', md: '1rem' },
            fontWeight: 500,
            fontStyle: 'italic',
            textAlign: 'center'
          }}
        >
          {description}
        </Box>
      )}
      
      <Box className="grid-container grid-project-fit" sx={{gap: '3rem', alignItems: 'center'}}>
        {projects.length > 0 && projects.map((project : projectNode) =>(
          <ProjectBox project={project} key={project.name} />
        ))}
      </Box>
    </Box>
  )
}

export default ProjectsContent
