'use client'
 
import React from 'react'
import { Box, Toolbar } from "@mui/material"
import StickyNav from "../../components/StickyNav/StickyNav.tsx"
import ExperienceContent from "../../components/ExperienceContent/ExperienceContent.tsx"
import Footer from "../../components/Footer/Footer.tsx"
import { ToggleDarkMode } from "../../lib/ColorContext.tsx"
import { useTheme } from "@mui/material/styles"

export default function ExperiencePage() {
  return (
    <ToggleDarkMode>
      <ExperiencePageContent />
    </ToggleDarkMode>
  )
}

export function ClientOnly() {
  return (
    <ToggleDarkMode>
      <ExperiencePageContent />
    </ToggleDarkMode>
  )
}

function ExperiencePageContent() {
  return (
      <div className="portfolio">
        <StickyNav />
        <Box component="main" sx={{ p: 3 }} id="Experience">
          <Toolbar />
          <Box 
            sx={{ 
              marginTop: '3.2rem', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: {xs: '3rem',md: '5rem'},
              width: '100%'
            }}
          >
            <ExperiencePageInner />
          </Box>
        </Box>
        <Footer />
      </div>
  )
}

function ExperiencePageInner() {
  const theme = useTheme()

  return (
    <Box 
      sx={{
        width: {xs: '100%', md: '80%', lg: '60%'},
        p: {xs: 2, md: 4},
        borderRadius: 2,
        backgroundColor: theme.palette.mode === 'dark' ? '#222222' : '#f5f5f5',
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"
      }}
    >
      <ExperienceContent 
        description="A brief overview of my journey towards platform engineering and the skills I've developed along the way."
      />
    </Box>
  )
}
