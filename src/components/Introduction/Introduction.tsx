import Links from "../../Links/Links"
import Typed from 'react-typed'
import { Box } from "@mui/material"
import { useTheme } from "@emotion/react"
import CSLOGO from '/public/CSLOGO.svg'
import FLAMES from '/src/assets/flames.svg'
// import Divider from '@mui/material/Divider';

const Introduction = () => {
const theme = useTheme()

  return (
    <Box component={'section'} sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'center', alignItems: 'center' }}>
        <img src="" alt="" />
        <Box component={'section'} sx={{maxWidth: 'min-content'}}>
            <Box sx={{paddingLeft: 3 ,textAlign: 'center', whiteSpace: 'nowrap' ,fontWeight: 700 ,fontSize: {xs: '3.7rem',sm: '4.5rem', md: '7rem'}}}>
                <Typed strings={['Hey there']} typeSpeed={110} className="typed" />
            </Box>
            <Box component={'h2'} sx={{textAlign: 'center' ,color: theme.palette.text.secondary, fontWeight: 700, fontSize: {xs: '1rem', sm: '1.22rem', md: '1.7rem'}}}>
                My name is Eduardo, nice to meet you!
            </Box>
            {/* <Divider />
                <Box component={'h2'} sx={{textAlign: 'center' ,color: theme.palette.text.secondary, fontWeight: 700, fontSize: {xs: '1rem', sm: '1.22rem', md: '1.7rem'}}}>
                I am interested in designing websites, apps, games, and overall enjoy development of any sort
                </Box>
            <Divider /> */}
            <Box component={'h2'} sx={{ display: 'flex', flexDirection: 'column', gap: 1 ,color: theme.palette.text.secondary, fontSize: {xs: '.6rem' ,sm: '1rem', md: '1.1rem'}}}>
                <Box component={'div'} sx={{display: 'flex', gap: '6px', justifyContent: 'space-around', alignItems: 'center'}}>
                    {/* <img src={RESEARCH} alt="" className="intro-img"/> */}
                    <Box component={'h3'}>Research assistant @ University of Illinois Chicago</Box>
                </Box>
                <Box component={'div'} sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, gap: '6px', justifyContent: 'center', alignItems: 'center', whiteSpace: 'nowrap'}}>
                    <Box className="intro-img-container" >
                        <img src={CSLOGO} alt="" className="intro-img" />
                        <Box component={'h3'}>Computer Science</Box>
                    </Box>
                    <Box className="intro-img-container" >
                        <img src={FLAMES} alt="" className="intro-img"/>
                        <Box component={'h3'}>University of Illinois Chicago</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Links />
    </Box>
)
}

export default Introduction