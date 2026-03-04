import { Box, LinearProgress } from "@mui/material"
import "./loading.css"

interface LoadingProps {
  themeMode?: 'light' | 'dark' | null
}

const Loading = ({ themeMode }: LoadingProps) => {
  const isDark = themeMode === 'dark'
  
  return (
    <Box 
      id="loading-modal"
      className="loading-container"
      sx={{
        backgroundColor: isDark ? '#161927' : '#fbfbfe',
      }}
    >
      <Box sx={{ width: "40%" }}>
        <h1 
          className="loading-header" 
          style={{ color: isDark ? '#fbfbfe' : '#161927', textAlign: 'center' }}
        >
          Loading...
        </h1>
        <LinearProgress sx={{ 
          backgroundColor: isDark ? '#333' : '#ddd',
          '& .MuiLinearProgress-bar': {
            backgroundColor: isDark ? '#DE5246' : '#c53124',
          }
        }} />
      </Box>
    </Box>
  )
}

export default Loading
