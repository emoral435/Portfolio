import Links from "../../Links/Links"
import Typed from 'react-typed'
import { Box } from "@mui/material"
import { useTheme } from "@mui/material/styles";
import CSLOGO from '/public/CSLOGO.svg'
import FLAMES from '/src/assets/flames.svg'
import PROFILE from '/src/assets/profilePic.jpg'

const Introduction = () => {
const theme = useTheme()

    const floatingText = "Hey there"
    const welcome = "My name is Eduardo, nice to meet you!"
    const interest = "I am interested in designing websites, apps, games, and overall enjoy development of any sort!"
    const position = "Data Analyst Intern @ University of Illinois Chicago"
    const major = "Computer Science"
    const uni = "University of Illinois Chicago"

  return (
    <Box component={'section'} sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, gap: {xs: 2, md: 15}, justifyContent: 'center', alignItems: 'center' }}>
        <Box component={'section'} sx={{display: 'flex', gap: {xs: '1rem', md:'3rem'}}}>
            <Links whiteMode={false}/>
            <Box sx={{width: {xs: '15rem', md: '17rem', lg: '25rem'}, height: {xs: '15rem', md: '17rem', lg: '25rem'}}}>
                <img src={PROFILE} alt="" className="profile-pic"/>
            </Box>
        </Box>
        <Box component={'section'} sx={{maxWidth: 'min-content'}}>
            <Box sx={{paddingLeft: 3 ,textAlign: 'center', whiteSpace: 'nowrap' ,fontWeight: 700 ,fontSize: {xs: '3.7rem',sm: '4.5rem', md: '7rem'}}}>
                <Typed strings={[floatingText]} typeSpeed={110} className="typed" />
            </Box>
            <Box component={'h2'} sx={{textAlign: 'center' ,color: theme.palette.text.secondary, fontWeight: 700, fontSize: {xs: '1rem', sm: '1.22rem', md: '1.7rem'}}}>
                {welcome}
            </Box>
            <Box component={'h2'} sx={{margin: '1rem' , textAlign: 'center' ,color: theme.palette.text.secondary, fontWeight: 700, fontSize: {xs: '1rem', sm: '1.22rem', md: '1.7rem'}}}>
             {interest}
            </Box>
            <Box component={'h2'} sx={{ display: 'flex', flexDirection: 'column', gap: 1 ,color: theme.palette.text.secondary, fontSize: {xs: '.6rem' ,sm: '1rem', md: '1.1rem'}}}>
                <Box component={'div'} sx={{display: 'flex', gap: '6px', justifyContent: 'space-around', alignItems: 'center'}}>
                    <Box component={'h3'}>{position}</Box>
                </Box>
                <Box component={'div'} sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, gap: '6px', justifyContent: 'center', alignItems: 'center', whiteSpace: 'nowrap'}}>
                    <Box className="intro-img-container" >
                        <img src={CSLOGO} alt="" className="intro-img" />
                        <Box component={'h3'}>{major}</Box>
                    </Box>
                    <Box className="intro-img-container" >
                        <img src={FLAMES} alt="" className="intro-img"/>
                        <Box component={'h3'}>{uni}</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
)
}

export default Introduction