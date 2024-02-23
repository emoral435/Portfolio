import { useTheme } from "@mui/material"
import { ColorModeContext } from "../../store/ColorContext/ColorContext"
import { useContext, useEffect } from "react"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const drawerWidth = '100%';
const navItems = ['Home', 'About', 'Experience', 'Projects', 'Contact Me'];
export function Home() {
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false);
  const [colorText, setColorText] = useState(theme.palette.mode === "dark" ? "Light mode" : "Dark mode");
  const colorMode = useContext(ColorModeContext)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setColorText(theme.palette.mode === "dark" ? "Light mode" : "Dark mode")
  }, [theme.palette.mode])

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Eduardo Morales
      </Typography>
      <Divider />
      <List>
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
    <Box sx={{ display: 'flex', maxHeight: 'min-content', justifyContent: 'space-around' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: theme.palette.background.default, color: theme.palette.text.primary, boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around', gap: '2rem' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
			<MenuIcon />
          </IconButton>
          <Typography
            
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', fontFamily: 'Poppins', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
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
                      : <h6 style={{fontWeight: 'bold', fontFamily: 'Poppins', fontSize: 'large' }} >{colorText}</h6>
                    <KeyboardDoubleArrowLeftIcon />
                </section>
                {theme.palette.mode === 'dark' ? <LightModeIcon />  : <DarkModeIcon />}
            </button>
          </section>
        </Toolbar>
      </AppBar>
      <nav>
		<Drawer
			variant="temporary"
			anchor="top"
			open={mobileOpen}
			onClose={handleDrawerToggle}
			ModalProps={{
				keepMounted: true, // Better open performance on mobile.
			}}
			sx={{
				display: { xs: 'flex', sm: 'none' },
				'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
			}}
			>
			{drawer}
		</Drawer>
      </nav>
	</Box>
  )};

export default Home