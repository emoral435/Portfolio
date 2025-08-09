import Image from 'next/image'
import { Box, Button, Chip, Divider, Typography, useTheme } from "@mui/material"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { alpha } from '@mui/material/styles'
import { Company } from "../../lib/experience-service"

interface ICompany {
  position: Company
  accentColor?: string
}

const Job = ({ position: job, accentColor }: ICompany) => {
  const theme = useTheme()
  const accent = accentColor ?? theme.palette.primary.main
  const fontMono = 'Roboto Mono, ui-monospace, SFMono-Regular, Menlo, monospace'

  // Responsive logo size
  const logoSize = { xs: 32, sm: 36, md: 42 }

  return (
    <section>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          fontFamily: fontMono,
          borderLeft: `4px solid ${accent}`,
          pl: 2,
          pb: 3
        }}
      >
        {/* Header: logo + text in one row (no wrapping) */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            columnGap: 1.5,
            alignItems: 'center',
            // Keep everything on one line visually
            // (text will ellipsize instead of wrapping beneath the logo)
          }}
        >
          {/* Logo */}
          {(job as any).logoUrl && (
            <Box
              sx={{
                width: { xs: logoSize.xs, sm: logoSize.sm, md: logoSize.md },
                height: { xs: logoSize.xs, sm: logoSize.sm, md: logoSize.md },
                position: 'relative',
                flexShrink: 0
              }}
            >
              <Image
                src={(job as any).logoUrl}
                alt={`${job.name} logo`}
                fill
                sizes="(max-width: 600px) 32px, (max-width: 900px) 36px, 42px"
                style={{ objectFit: 'contain', borderRadius: 4 }}
                priority
              />
            </Box>
          )}

          {/* Text block */}
          <Box sx={{ minWidth: 0 /* allow ellipsis */, overflow: 'hidden' }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.15rem', sm: '1.35rem', md: '1.6rem' },
                fontWeight: 800,
                fontFamily: fontMono,
                lineHeight: 1.2,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
              title={job.name}
            >
              {job.name}
            </Typography>
            <Typography
              sx={{
                mt: 0.25,
                fontWeight: 500,
                fontFamily: fontMono,
                fontSize: { xs: '.85rem', sm: '.95rem', md: '1rem' },
                lineHeight: 1.25,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
              title={job.role}
            >
              {job.role}
            </Typography>
          </Box>
        </Box>

        {/* Meta */}
				<Box
					sx={{
						fontSize: { xs: '.85rem', md: '.95rem' },
						color: theme.palette.text.secondary,
						display: 'flex',
						alignItems: 'center', // ✅ ensures vertical alignment
						gap: 1,
						flexWrap: 'wrap'
					}}
				>
					<Typography component="span" color="text.primary" sx={{ fontFamily: fontMono }}>
						{job.location}
					</Typography>

					<Divider
						orientation="vertical"
						flexItem
						sx={{
							display: { xs: 'none', sm: 'block' },
							borderColor: theme.palette.text.secondary,
							mx: 0.5
						}}
					/>

					<Typography component="span" color="text.primary" sx={{ fontFamily: fontMono }}>
						{job.startDate} – {job.endDate}
					</Typography>
				</Box>

        {/* Links */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {(job as any).redirect && (
            <Button
              component="a"
              href={(job as any).redirect}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<OpenInNewIcon />}
              variant="outlined"
              size="small"
              sx={{
                fontFamily: fontMono,
                borderColor: accent,
                color: accent,
                '&:hover': {
                  borderColor: accent,
                  backgroundColor: alpha(accent, 0.08),
                  color: accent
                }
              }}
            >
              Company
            </Button>
          )}
          {(job as any).extraRedirect && (
            <Button
              component="a"
              href={(job as any).extraRedirect}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<OpenInNewIcon />}
              variant="text"
              size="small"
              sx={{
                fontFamily: fontMono,
                color: accent,
                '&:hover': {
                  backgroundColor: alpha(accent, 0.08),
                  color: accent
                }
              }}
            >
              More
            </Button>
          )}
        </Box>

        {/* Summary */}
        <Typography sx={{ mb: 1.5, lineHeight: 1.7, fontFamily: fontMono }}>
          {(job as any).summary ?? ''}
        </Typography>

        <Divider sx={{ my: 1.5 }} />

        {/* Achievements */}
        <Box component="ul" sx={{ pl: 2.5, m: 0, display: 'flex', flexDirection: 'column', gap: .75 }}>
          {(job as any).achievements?.map((line: string) => (
            <li key={line}>
              <Typography component="span" sx={{ fontFamily: fontMono }}>
                {line}
              </Typography>
            </li>
          ))}
        </Box>

        {/* Impact */}
        {(job as any).impact && (
          <Box
            sx={{
              mt: 2,
              p: 2,
              borderRadius: 2,
              backgroundColor: alpha(accent, 0.06),
              border: `1px solid ${alpha(accent, 0.25)}`
            }}
          >
            <Typography sx={{ fontWeight: 700, mb: .5, fontFamily: fontMono, color: accent }}>
              Impact
            </Typography>
            <Typography sx={{ fontFamily: fontMono }}>
              {(job as any).impact}
            </Typography>
          </Box>
        )}

        {/* Tech stack */}
        {(job as any).technologies?.length ? (
          <>
            <Divider sx={{ mt: 2 }} />
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontWeight: 700, mb: 1, fontFamily: fontMono }}>
                Tech Stack
              </Typography>
              <Box sx={{ display: 'flex', gap: .6, flexWrap: 'wrap' }}>
                {(job as any).technologies.map((t: string) => (
                  <Chip
                    key={t}
                    label={t}
                    size="small"
                    sx={{
                      fontFamily: fontMono,
                      borderRadius: '999px',
                      borderColor: alpha(accent, 0.25),
                      backgroundColor: alpha(accent, 0.06),
                      color: theme.palette.mode === 'dark' ? theme.palette.grey[100] : theme.palette.grey[900]
                    }}
                    variant="outlined"
                  />
                ))}
              </Box>
            </Box>
          </>
        ) : null}
      </Box>

      <Divider sx={{ mt: 3 }} />
    </section>
  )
}

export default Job
