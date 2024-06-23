import { Box } from "@mui/material"
import Links from "../Links/Links"
import { ReactTyped } from "react-typed";

const Footer = () => {
    const textLoop = [
        'Thank you for getting this far!',
        "Interested? Contact me",
        "Check out the rest of the page!",
    ]

    const navItems = ["Experience", "Projects", "Contact Me"]

  return (
    <Box component={'footer'} className="footer" sx={{flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'center', alignItems: {xs: 'start', md: 'center'}, gap: {xs: 3, md: 8}}}>
        <Links inFooter={true} />
        <Box component={'h2'}>
            <Box component={'p'} sx={{fontSize: {xs: '2rem', md:'3rem'}}}>Eduardo</Box>
            <Box component={'p'} sx={{fontSize: {xs: '.9rem', md:'1.3rem'}}}>Mathematics and</Box >
            <Box component={'p'} sx={{fontSize: {xs: '.9rem', md:'1.3rem'}}}>Computer Scientist</Box >
        </Box>
        <Box sx={{ display: 'flex', gap: '1rem', flexDirection: {xs: 'column', md: 'row'} }}>
            {navItems.map((item) => (
                <a href={item === 'Contact Me' ? 'mailto:emoral435@gmail.com' : `#${item}`} key={item}>
                    <button style={{fontWeight: 'bold', fontFamily: 'Poppins', fontSize: 'large'}} className="button footer-nav" >
                        {item}
                    </button>
                </a>
            ))}
        </Box>
        <Box sx={{color: '#d9b63c', fontSize: '1.5rem', width: '20rem', display: 'flex', alignItems: 'center', height: '6rem'}}>
            <ReactTyped strings={textLoop} typeSpeed={60} backSpeed={40} className="typed" loop />
        </Box>
    </Box>
  )
}

export default Footer