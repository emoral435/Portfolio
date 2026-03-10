import { Box, Button, Typography, useTheme } from "@mui/material"
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { alpha } from "@mui/material/styles"
import { ReactNode } from "react"

interface IContactItem {
  icon: ReactNode
  label: string
  url: string
  accentColor: string
  description: string
  position?: 'left' | 'right' | 'center'
  fullWidth?: boolean
}

const ContactItem = ({ icon, label, url, accentColor, description, position = 'left', fullWidth = false }: IContactItem) => {
  const theme = useTheme()
  const fontMono = 'Roboto Mono, ui-monospace, SFMono-Regular, Menlo, monospace'

  const getBorderPosition = () => {
    if (position === 'left') return { borderLeft: `4px solid ${accentColor}` }
    if (position === 'right') return { borderRight: `4px solid ${accentColor}` }
    return { borderBottom: `4px solid ${accentColor}` }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        fontFamily: fontMono,
        width: fullWidth ? '100%' : 'auto',
        ...getBorderPosition(),
        pl: position !== 'right' ? 2 : 0,
        pr: position !== 'left' ? 2 : 0,
        pb: 2
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5
        }}
      >
        <Box
          sx={{
            color: accentColor,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {icon}
        </Box>
        <Typography
          sx={{
            fontSize: { xs: '1.15rem', sm: '1.35rem', md: '1.5rem' },
            fontWeight: 800,
            fontFamily: fontMono,
            color: theme.palette.text.primary
          }}
        >
          {label}
        </Typography>
      </Box>

      <Typography
        sx={{
          color: theme.palette.text.secondary,
          fontFamily: fontMono,
          fontSize: { xs: '.85rem', md: '.95rem' },
          fontWeight: 500,
        }}
      >
        {description}
      </Typography>

      <Box>
        <Button
          component="a"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<OpenInNewIcon />}
          variant="outlined"
          size="small"
          sx={{
            fontFamily: fontMono,
            borderColor: accentColor,
            color: accentColor,
            '&:hover': {
              borderColor: accentColor,
              backgroundColor: alpha(accentColor, 0.08),
              color: accentColor
            }
          }}
        >
          Connect
        </Button>
      </Box>
    </Box>
  )
}

export default ContactItem
