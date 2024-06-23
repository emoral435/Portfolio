import { ReactTyped } from "react-typed";
import { Box } from "@mui/material"
import { useTheme } from "@mui/material/styles";
import TerminalIcon from '@mui/icons-material/Terminal';
import FunctionsIcon from '@mui/icons-material/Functions';
import Links from "../Links/Links"
import PROFILEGIF from '/src/assets/profileGif.gif'
import UIUC from '../../assets/UIUC.svg';
import { introInfo } from "../../services/constants";

const Introduction = () => {
const theme = useTheme()

  return (
    <Box component={'section'} sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, gap: {xs: 2, md: 15}, justifyContent: 'center', alignItems: 'center' }}>
        <Box component={'section'} sx={{display: 'flex', gap: {xs: '1rem', md:'3rem'}}}>
            <Links inFooter={false}/>
            <Box sx={{width: {xs: '15rem', md: '17rem', lg: '25rem'}, height: {xs: '15rem', md: '17rem', lg: '25rem'}, borderRadius: "15px", boxShadow: "5px 10px 20px rgb(0 0 0 / 0.5)"}}>
                <img src={PROFILEGIF} alt="" className="profile-pic"/>
            </Box>
        </Box>
        <Box component={'section'} sx={{maxWidth: 'min-content'}}>
            <Box sx={{paddingLeft: 3 ,textAlign: 'center', whiteSpace: 'nowrap' ,fontWeight: 700 ,fontSize: {xs: '3.7rem',sm: '4.5rem', md: '6.5rem'}}}>
                <ReactTyped strings={[introInfo.floatingText]} typeSpeed={110} className="typed" />
            </Box>
            <Box component={'h2'} sx={{textAlign: 'center' ,color: theme.palette.text.secondary, fontWeight: 700, fontSize: {xs: '1rem', sm: '1.22rem', md: '1.7rem'}}}>
                {introInfo.welcome}
            </Box>
            <Box component={'h2'} sx={{margin: '1rem' , textAlign: 'center' ,color: theme.palette.text.secondary, fontWeight: 700, fontSize: {xs: '1rem', sm: '1.22rem', md: '1.7rem'}}}>
             	{introInfo.interest}
            </Box>
            <Box component={'h2'} sx={{ display: 'flex', flexDirection: 'column', gap: 1 ,color: theme.palette.text.secondary, fontSize: {xs: '.9rem', sm: '1rem', md: '1.1rem'}}}>
                <Box component={'div'} sx={{display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center'}}>
					<TerminalIcon sx={{ color: "#4086f4" }} />
                    <Box sx={{ textAlign: "center" }} >{introInfo.position}</Box>
					<TerminalIcon sx={{ color: "#4086f4" }} />
                </Box>
                <Box component={'div'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', whiteSpace: 'nowrap'}}>
                    <Box className="intro-img-container" sx={{ gap: '12px' }} >
                        <FunctionsIcon sx={{fontSize: 30, color: '#069e57'}} />
                        <Box component={'h3'}>{introInfo.major} Major</Box>
                        <FunctionsIcon sx={{fontSize: 30, color: '#069e57'}} />
                    </Box>
                    <Box className="intro-img-container"  sx={{ gap: '12px'}}>
					<Box src={UIUC}
						component="img"
						alt={`Illini`}
						sx={{
							width: "1rem",
							height: "auto",
						}} />
                        <Box component={'h3'}>{introInfo.uni}</Box>
                        <Box src={UIUC}
						component="img"
						alt={`Illini`}
						sx={{
							width: "1rem",
							height: "auto",
						}} />
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
)
}

export default Introduction