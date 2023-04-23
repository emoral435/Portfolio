import { Box, Toolbar, Typography } from "@mui/material"
import StickyNav from "./components/StickyNav/StickyNav"

function App() {
  return (
    <div className="app">
      <StickyNav />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <div>huh</div>
      </Box>
    </div>
  )
}

export default App
