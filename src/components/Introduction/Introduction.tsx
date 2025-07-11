import { ReactTyped } from "react-typed";
import { Box } from "@mui/material"
import { useTheme } from "@mui/material/styles";
import StorageIcon from '@mui/icons-material/Storage';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Links from "../Links/Links"
import ProfilePic from '../../../public/profilePic.jpg'
import { introInfo } from "../../lib/constants";
import Image from 'next/image';
import UoI from '../../../public/university-of-illinois.svg'
const Introduction = () => {
	const theme = useTheme()

	return (
		<Box component={'section'} sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, gap: {xs: 2, md: 15}, justifyContent: 'center', alignItems: 'center' }}>
			<Box component={'section'} sx={{display: 'flex', gap: {xs: '1rem', md:'3rem'}}}>
				<Links inFooter={false}/>
				<Box
					sx={{
						width: { xs: '15rem', md: '17rem', lg: '25rem' },
						height: { xs: '15rem', md: '17rem', lg: '25rem' },
						borderRadius: "15px",
						boxShadow: "5px 10px 20px rgb(0 0 0 / 0.5)",
						position: "relative", // Required for Image fill
						overflow: "hidden" // Ensures borderRadius is respected
					}}
				>
					<Image
						src={ProfilePic}
						alt="Candid photo of myself"
						fill // This makes the image fill the parent container
						className="profile-pic"
					/>
				</Box>
			</Box>
			<Box component={'section'}>
				<Box sx={{paddingLeft: 3 ,textAlign: 'center', whiteSpace: 'nowrap' ,fontWeight: 700 ,fontSize: {xs: '3.7rem',sm: '4.5rem', md: '6rem'}}}>
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
						<LocationCityIcon sx={{ color: "#ffcc00" }} />
						<Box sx={{ textAlign: "center" }} >{introInfo.location}</Box>
						<LocationCityIcon sx={{ color: "#ffcc00" }} />
					</Box>
					<Box component={'div'} sx={{display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center'}}>
						<HomeWorkIcon sx={{ color: "#4086f4" }} />
						<Box sx={{ textAlign: "center" }} >{introInfo.position}</Box>
						<HomeWorkIcon sx={{ color: "#4086f4" }} />
					</Box>
					<Box sx={{display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center'}} >
						<StorageIcon sx={{color: '#069e57'}} />
							<Box>{introInfo.major}</Box>
						<StorageIcon sx={{color: '#069e57'}} />
					</Box>
					<Box sx={{display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center'}}>
						<Image src={UoI} alt="University of Illinois Icon" width={20} height={20}/>
						<Box>{introInfo.uni}</Box>
						<Image src={UoI} alt="University of Illinois Icon" width={20} height={20}/>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Introduction