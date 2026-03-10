import { Box, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import ContactItem from "../ContactItem/ContactItem"
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import TwitterIcon from '@mui/icons-material/Twitter'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import { ReactNode } from "react"

const LINKEDIN_COLOR = '#0077B5'
const EMAIL_COLOR = '#EA4335'
const TWITTER_COLOR = '#1DA1F2'

interface ContactData {
  icon: ReactNode
  label: string
  url: string
  accentColor: string
  description: string
}

const contacts: ContactData[] = [
  {
    icon: <LinkedInIcon sx={{ fontSize: 32 }} />,
    label: "LinkedIn",
    url: "https://linkedin.com/in/emswe",
    accentColor: LINKEDIN_COLOR,
    description: "Quick glance into my professional career and education."
  },
  {
    icon: <EmailIcon sx={{ fontSize: 32 }} />,
    label: "Email",
    url: "mailto:emoral435@gmail.com",
    accentColor: EMAIL_COLOR,
    description: "Preferred for detailed discussions and collaborations."
  },
  {
    icon: <TwitterIcon sx={{ fontSize: 32 }} />,
    label: "X",
    url: "https://x.com/muchoeduardo",
    accentColor: TWITTER_COLOR,
    description: "Great for quick updates and tech conversations."
  }
]

interface ContactContentProps {
  description: string
}

const ContactContent = ({ description }: ContactContentProps) => {
  const theme = useTheme()
  const fontMono = 'Roboto Mono, ui-monospace, SFMono-Regular, Menlo, monospace'

  return (
    <Box>
      <Typography
        component={'div'}
        sx={{
          fontFamily: fontMono,
          fontWeight: 700,
          fontSize: {xs: '1rem', md: '2rem'},
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4
        }}
      >
        <ConnectWithoutContactIcon sx={{ fontSize: 35 }} />
        <h2 style={{ margin: 0 }}>Contact Me</h2>
        <ConnectWithoutContactIcon sx={{ fontSize: 35 }} />
      </Typography>
      <Box
        component={'div'}
        sx={{
          color: theme.palette.text.secondary,
          fontSize: {xs: '.8rem', md: '1rem'},
          fontWeight: 600,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          fontFamily: fontMono
        }}
      >
        <Box
          sx={{
            mb: 4,
            p: 2,
            borderLeft: `4px solid ${theme.palette.primary.main}`,
            fontFamily: fontMono,
            color: theme.palette.text.primary,
            fontSize: { xs: '.8rem', md: '1rem' },
            fontWeight: 500,
            textAlign: 'center'
          }}
        >
          {description}
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3
        }}
      >
        {contacts.map((contact) => (
          <Box
            key={contact.label}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <ContactItem
              {...contact}
              fullWidth
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ContactContent
