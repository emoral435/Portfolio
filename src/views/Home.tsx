import { Box, Toolbar, CircularProgress } from "@mui/material"
import StickyNav from "../components/StickyNav/StickyNav"
import Introduction from "../components/Introduction/Introduction"
import Information from "../components/Information/Information"
import Footer from "../components/Footer/Footer"
import { useState } from "react"

function App() {
  const [isLoading, setIsLoading] = useState<Boolean>(true)
  return !isLoading ? (
    <div className="app">
      <StickyNav />
      <Box component="main" sx={{ p: 3 }} id="Home">
        <Toolbar />
        <Box sx={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: {xs: '3rem',md: '5rem'}}} >
          <Introduction />
          <Information setIsLoading={setIsLoading}/>
        </Box>
      </Box>
      <Footer />
    </div>
  ) : (
    <CircularProgress />
  )
}

export default App
