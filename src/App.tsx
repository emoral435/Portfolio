import { useTheme } from "@emotion/react"
import StickyNav from "./components/StickyNav/StickyNav"
import Box from '@mui/material/Box';

function App() {
  const theme = useTheme()
  
  return (
    <div style={{
      backgroundColor: theme.palette.background.default,
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
      }}>
      <Box>
        <StickyNav />
      </Box>
    </div>
  )
}

export default App
