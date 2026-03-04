'use client'

import AboutMeContent from '../AboutMeContent/AboutMeContent';
import { Box } from '@mui/material';
import { useTheme } from "@mui/material/styles";

export default function Information() {
  const theme = useTheme()

  return (
    <Box 
      component={'div'} 
      sx={{
        width: {xs: '100%', md: '80%', lg: '60%'},
        p: {xs: 2, md: 4},
        borderRadius: 2,
        backgroundColor: theme.palette.mode === 'dark' ? '#222222' : '#f5f5f5',
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"
      }}
    >
      <AboutMeContent />
    </Box>
  );
}
