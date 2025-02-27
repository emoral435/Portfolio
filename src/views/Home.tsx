import { Box, Toolbar } from "@mui/material"
import StickyNav from "../components/StickyNav/StickyNav"
import Introduction from "../components/Introduction/Introduction"
import Information from "../components/Information/Information"
import Footer from "../components/Footer/Footer"
import Loading from "./Loading"
import { useState, useEffect } from "react"
import getStaticProps from "../services/getStaticProps"
import { ToggleDarkMode } from "../store/ColorContext/ColorContext.tsx"

function Portfolio() {
  const [isFetching, setIsFetching] = useState<Boolean>(true)
  const [isLoading, setIsLoading] = useState<Boolean>(true)
  const [projects, setProjects] = useState<any>([])

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
            <Information projects={projects} id="projects" />
          </Box>
        </Box>
        <Footer />
      </div>
    </ToggleDarkMode>
  ) : (
    <Loading />
  )
}

export default Portfolio
