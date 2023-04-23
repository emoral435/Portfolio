import { useTheme } from "@mui/material"
import { ColorModeContext } from "../../context/ColorContext/ColorContext"
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
import arrow from '/src/assets/arrow.svg'
import arrowWhite from '/src/assets/arrowWhite.svg'
import mobileNav from '/src/assets/mobileNav.svg'
import mobileNavWhite from '/src/assets/mobileNavWhite.svg'

const drawerHeight = 170;
const navItems = ['Home', 'About', 'Koalifications', 'Projects', 'Contact'];

export function StickyNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: theme.palette.background.default, color: theme.palette.text.primary, boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: {sm: 'flex-start', md:'space-around'}, gap: '2rem' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            {theme.palette.mode === 'light' ? <img src={mobileNav} alt="" className="arrow" /> : <img src={mobileNavWhite} alt='' className="arrow" />}
          </IconButton>
          <Typography
            
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', fontFamily: 'Poppins' }}
            className="name"
          >
            Eduardo Morales
          </Typography>
          <section style={{display: 'flex', gap: '1rem'}}>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '1rem' }}>
                {navItems.map((item) => (
                  <button key={item} style={{fontWeight: 'bold', fontFamily: 'Poppins', fontSize: 'large', marginLeft: '1rem'}} className="button nav-btn" >
                    {item}
                  </button>
                ))}
              </Box>
            <button className="button nav-btn" onClick={colorMode.toggleColorMode} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {theme.palette.mode === 'dark' ? <img src={arrowWhite} alt="" className="arrow"/>  : <img src={arrow} alt="" className="arrow"/>}
                <section style={{display: 'flex', alignItems: 'center'}}>
                    {theme.palette.mode === 'dark' ? <img src={arrowWhite} alt="" className="arrow"/>  : <img src={arrow} alt="" className="arrow"/>}
                    <h6 style={{fontWeight: 'bold', fontFamily: 'Poppins', fontSize: 'large' }} >Dark Mode</h6>
                    {theme.palette.mode === 'dark' ? <img src={arrowWhite} alt="" className="arrow flip" /> : <img src={arrow} alt="" className="arrow flip" />} 
                </section>
                {theme.palette.mode === 'dark' ? <img src={arrowWhite} alt="" className="arrow"/>  : <img src={arrow} alt="" className="arrow"/>}
            </button>
          </section>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerHeight },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default StickyNav