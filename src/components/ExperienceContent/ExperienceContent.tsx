import { Box, Typography } from '@mui/material'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { useTheme } from "@mui/material/styles";
import Job from '../Job/Job'
import { Company, myExperience } from '../../lib/experience-service'

const accentMap: Record<string, string> = {
  Nextdoor: '#69B36D',
  Enova: '#1B6DE0',
  Nextcloud: '#1B6DE0',
  'University of Illinois Chicago': '#D50032',
}

interface ExperienceContentProps {
  description?: string
}

const ExperienceContent = ({ description }: ExperienceContentProps) => {
  const theme = useTheme()

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 4
        }}
      >
        <Typography
          component={'div'}
          sx={{
            fontFamily: 'Roboto Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
            fontWeight: 700,
            fontSize: {xs: '1rem', md: '2rem'},
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4
          }}
        >
          <HomeRepairServiceIcon sx={{ fontSize: 35 }} />
          <h2 style={{ margin: 0 }}>Experience</h2>
          <HomeRepairServiceIcon sx={{ fontSize: 35 }} />
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

      <Box
        component={'div'}
        sx={{
          color: theme.palette.text.secondary,
          fontSize: {xs: '.8rem', md: '1rem'},
          fontWeight: 600,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          fontFamily: 'Roboto Mono, ui-monospace, SFMono-Regular, Menlo, monospace'
        }}
      >
        {myExperience.map((job: Company) => (
          <section key={job.name}>
            <Job position={job} accentColor={accentMap[job.name]} />
          </section>
        ))}
      </Box>
    </Box>
  )
}

export default ExperienceContent
