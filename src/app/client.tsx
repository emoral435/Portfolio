'use client'
 
import React from 'react'
import { Box, Toolbar } from "@mui/material"
import StickyNav from "../components/StickyNav/StickyNav.tsx"
import Introduction from "../components/Introduction/Introduction.tsx"
import Information from "../components/Information/Information.tsx"
import Footer from "../components/Footer/Footer.tsx"
import { ToggleDarkMode } from "../lib/ColorContext.tsx"

export default function Home() {
  return <HomeContent />
}

export function ClientOnly() {
  return <HomeContent />
}

function HomeContent() {
  return (
    <ToggleDarkMode>
      <div className="portfolio">
        <StickyNav />
        <Box component="main" sx={{ p: 3 }} id="Home">
          <Toolbar />
          <Box sx={{ marginTop: '3.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: {xs: '3rem',md: '5rem'}}} >
            <Introduction />
            <Information />
          </Box>
        </Box>
        <Footer />
      </div>
    </ToggleDarkMode>
  )
}
