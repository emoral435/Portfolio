import { Box } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReplyIcon from '@mui/icons-material/Reply';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { useTheme } from "@mui/material/styles";
interface Props {
  inFooter: boolean
}

const Links = ({inFooter} : Props) => {
  const bottomRedirect = inFooter ? "https://github.com/emoral435/Portfolio" : "mailto: emoral435@gmail.com"
  const theme = useTheme()
  const direction = inFooter ? 'row' : 'column'

  return (
    <Box component={'nav'} sx={{display: 'flex', flexDirection: {xs: direction, md:'column'}, gap: 4, justifyContent: 'space-around', alignItems: 'center'}}>
      <a href="https://www.linkedin.com/in/emswe/" target="_blank">
		<LinkedInIcon sx={{ fontSize: {xs: 55, md: 80}, "&:hover": {color: inFooter ? theme.palette.primary.light : theme.palette.primary.main} }} />	
	  </a>
      <a href="https://github.com/emoral435" target="_blank">
			<GitHubIcon sx={{ fontSize: {xs: 55, md: 80}, "&:hover": {color: inFooter ? theme.palette.primary.light : theme.palette.primary.main} }} />
	  </a>
      <a href={bottomRedirect} target="_blank">
	 	{
			inFooter
			? <AccountTreeIcon sx={{ fontSize: {xs: 55, md: 80}, "&:hover": {color: inFooter ? theme.palette.primary.light : theme.palette.primary.main} }} />
			: <ReplyIcon sx={{ fontSize: {xs: 55, md: 80}, "&:hover": {color: inFooter ? theme.palette.primary.light : theme.palette.primary.main} }} />
		}
	  </a>
    </Box>
    )
}

export default Links