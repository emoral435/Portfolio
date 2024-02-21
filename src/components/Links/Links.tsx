import { Box } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReplyIcon from '@mui/icons-material/Reply';

interface Props {
  inFooter: boolean
}

const Links = ({inFooter} : Props) => {
  const bottomRedirect = inFooter ? "https://github.com/emoral435/Portfolio" : "mailto: emoral435@gmail.com"

  const getClassName = inFooter ? "intro-sidefooter-img" : "intro-side-img"

  const direction = inFooter ? 'row' : 'column'
  return (
    <Box component={'nav'} sx={{display: 'flex', flexDirection: {xs: direction, md:'column'}, gap: 4, justifyContent: 'space-around', alignItems: 'center'}}>
      <a href="https://www.linkedin.com/in/emswe/" target="_blank">
		<LinkedInIcon className={`${getClassName}`}/>	
	  </a>
      <a href="https://github.com/emoral435" target="_blank">
			<GitHubIcon className={`${getClassName}`}/>
	  </a>
      <a href={bottomRedirect} target="_blank">
	 	{
			inFooter
			? <GitHubIcon className={`${getClassName}`}/>
			: <ReplyIcon className={`${getClassName}`}/>
		}
	  </a>
    </Box>
    )
}

export default Links