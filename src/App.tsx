import { Box, Toolbar, Typography } from "@mui/material"
import StickyNav from "./components/StickyNav/StickyNav"
import Introduction from "./components/Introduction/Introduction"
import Information from "./components/Information/Information"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="app">
      <StickyNav />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Box sx={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5rem'}}>
          <Introduction />
          <Information />
          <Footer />
        </Box>
      </Box>
    </div>
  )
}

export default App
