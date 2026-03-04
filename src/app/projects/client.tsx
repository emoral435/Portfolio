'use client'
 
import React from 'react'
import { Box, Toolbar } from "@mui/material"
import StickyNav from "../../components/StickyNav/StickyNav.tsx"
import ProjectsContent from "../../components/ProjectsContent/ProjectsContent.tsx"
import Footer from "../../components/Footer/Footer.tsx"
import Loading from "../../components/Loading/Loading.tsx"
import { useState, useEffect } from "react"
import getStaticProps from "../../lib/get-static-props.ts"
import { ToggleDarkMode } from "../../lib/ColorContext.tsx"
import { useTheme } from "@mui/material/styles"
import { getInitialThemeMode } from "../../lib/theme-utils"

import type { projectNode } from '../../lib/constants.ts'

export default function ProjectsPage() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark' | null>(null)
  const [isFetching, setIsFetching] = useState(true)
  const [projects, setProjects] = useState<projectNode[]>([])

  useEffect(() => {
    setThemeMode(getInitialThemeMode())
  }, [])

  useEffect(() => {
    async function fetchAPI() {
      try {
        const result = await getStaticProps()
        setProjects(result.pinnedItems)
      } catch (error) {
        console.log({ERROR: error})
      } finally {
        setIsFetching(false)
      }
    }
    fetchAPI()
  }, [])

  if (isFetching) {
    return <Loading themeMode={themeMode} />
  }

  return (
    <ToggleDarkMode>
      <ProjectsPageContent projects={projects} />
    </ToggleDarkMode>
  )
}

export function ClientOnly() {
  return <ProjectsPage />
}

function ProjectsPageContent({ projects }: { projects: projectNode[] }) {
  return (
      <div className="portfolio">
        <StickyNav />
        <Box component="main" sx={{ p: 3 }} id="Projects">
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
            <ProjectsPageInner projects={projects} />
          </Box>
        </Box>
        <Footer />
      </div>
  )
}

function ProjectsPageInner({ projects }: { projects: projectNode[] }) {
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
      <ProjectsContent 
        projects={projects} 
        description="A collection of projects I've worked on, showcasing my technical skills and passion for building useful tools."
      />
    </Box>
  )
}
