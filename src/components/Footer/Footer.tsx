import { Box } from "@mui/material"
import Links from "../Links/Links"
import Link from "next/link";

const Footer = () => {
    const navItems = [
        { label: "Experience", href: "/experience" },
        { label: "Projects", href: "/projects" },
        { label: "Contact Me", href: "/contact" }
    ]

  return (
    <Box component={'footer'} className="footer" sx={{flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'center', alignItems: {xs: 'start', md: 'center'}, gap: {xs: 3, md: 8}}}>
        <Links inFooter={true} />
        <Box component={'h2'}>
            <Box component={'p'} sx={{fontSize: {xs: '2rem', md:'3rem'}}}>Eduardo</Box>
            <Box component={'p'} sx={{fontSize: {xs: '.9rem', md:'1.3rem'}}}>Software Engineer</Box >
        </Box>
        <Box sx={{ display: 'flex', gap: '1rem', flexDirection: {xs: 'column', md: 'row'} }}>
            {navItems.map((item) => (
                <Link className="--font-roboto" href={item.href} key={item.label}>
                    <button style={{fontWeight: 'bold', fontSize: 'large'}} className="button footer-nav" >
                        {item.label}
                    </button>
                </Link>
            ))}
        </Box>
    </Box>
  )
}

export default Footer
