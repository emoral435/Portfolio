'use client'
 
import React from 'react'
import { Box, Toolbar } from "@mui/material"
import StickyNav from "../components/StickyNav/StickyNav.tsx"
import Introduction from "../components/Introduction/Introduction.tsx"
import Information from "../components/Information/Information.tsx"
import Footer from "../components/Footer/Footer.tsx"
import Loading from "../components/Loading/Loading.tsx"
import { useState, useEffect } from "react"
import getStaticProps from "../lib/get-static-props.ts"
import { ToggleDarkMode } from "../lib/ColorContext.tsx"

import type { projectNode } from '../lib/constants.ts'

function Home() {
  const [isFetching, setIsFetching] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [projects, setProjects] = useState<projectNode[]>([])

  useEffect(() => {
    async function fetchAPI() {
      try {
        const result = await getStaticProps()
        setIsFetching(false)
        setProjects(result.pinnedItems)
      } catch (error) {
        setIsFetching(false)
        console.log({ERROR: error})
      }
    }
    fetchAPI()
  
    // Check if the page has already loaded
    setTimeout(() => {
      setIsLoading(false)
      console.log("Hello! If you are reading this, you either are a software engineer, recruiter, or just know your way around the console! Feel free to look around.")
    }, 750)
    return () => {
      document.getElementById("loading-modal")?.classList.add("hidden")
    }
  }, [])

  

  // if we are not fetching from github's graphql,
  // and our DOM content from React is done loading, then show
  return (!isLoading && !isFetching) ? (
    <ToggleDarkMode>
      <div className="portfolio">
        <StickyNav />
        <Box component="main" sx={{ p: 3 }} id="Home">
          <Toolbar />
          <Box sx={{ marginTop: '3.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: {xs: '3rem',md: '5rem'}}} >
            <Introduction />
            <Information projects={projects} />
          </Box>
        </Box>
        <Footer />
      </div>
    </ToggleDarkMode>
  ) : (
    <Loading />
  )
}

export function ClientOnly() {
  return <Home />
}