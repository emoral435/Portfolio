import { useTheme } from "@mui/material"
import { ColorModeContext } from "../../store/ColorContext/ColorContext"
import { useContext } from "react"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const drawerHeight = '100%';
const navItems = ['Home', 'About', 'Experience', 'Projects', 'Contact Me'];

export function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: '100%' }}>
      <List className="grid-container grid-auto-fit">
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <a href={item === 'Contact Me' ? 'mailto:emoral435@gmail.com' : `#${item}`} key={item}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', maxHeight: 'min-content' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: theme.palette.background.default, color: theme.palette.text.primary, boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around', gap: '2rem' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
          </IconButton>
          <Typography
            
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', fontFamily: 'Poppins' }}
            className="name"
          >
            <a href="#">Eduardo Morales</a>
          </Typography>
          <section style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '1rem' }}>
                {navItems.map((item) => (
                  <a href={item === 'Contact Me' ? 'mailto:emoral435@gmail.com' : `#${item}`} key={item}>
                    <button style={{fontWeight: 'bold', fontFamily: 'Poppins', fontSize: 'large', marginLeft: '1rem'}} className="button nav-btn" >
                      {item}
                    </button>
                  </a>
                ))}
              </Box>
            <button className="button nav-btn" onClick={colorMode.toggleColorMode} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {theme.palette.mode === 'dark' ? <LightModeIcon />  : <DarkModeIcon />}
                <section style={{display: 'flex', alignItems: 'center'}}>
                    <KeyboardDoubleArrowRightIcon />
                    {
                      theme.palette.mode == "dark"
                      ? <h6 style={{fontWeight: 'bold', fontFamily: 'Poppins', fontSize: 'large' }} >Light mode</h6>
                      : <h6 style={{fontWeight: 'bold', fontFamily: 'Poppins', fontSize: 'large' }} >Dark mode</h6>
                    }
                    
                    <KeyboardDoubleArrowLeftIcon />
                </section>
                {theme.palette.mode === 'dark' ? <LightModeIcon />  : <DarkModeIcon />}
            </button>
          </section>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="top"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerHeight },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Home