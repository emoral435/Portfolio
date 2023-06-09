import { Box } from "@mui/material"
import GH from '/src/assets/github.svg'
import GHW from '/src/assets/githubWhite.svg'
import LI from '/src/assets/linkedIn.svg'
import LIW from '/src/assets/linkedInWhite.svg'
import MAIL from '/src/assets/mail.svg'
import repo from '/src/assets/repo.svg'

interface Props {
  whiteMode: boolean
}

const Links = ({whiteMode} : Props) => {
  const bottomRedirect = whiteMode ? "https://github.com/emoral435/Portfolio" : "mailto: emoral435@gmail.com"

  const direction = whiteMode ? 'row' : 'column'
  return (
    <Box component={'nav'} sx={{display: 'flex', flexDirection: {xs: direction, md:'column'}, gap: 4, justifyContent: 'space-around', alignItems: 'center'}}>
      <a href="https://www.linkedin.com/in/emswe/" target="_blank">{whiteMode ? <img src={LIW} alt="" className="intro-sidefooter-img" /> : <img src={LI} alt="" className="intro-side-img" />}</a>
      <a href="https://github.com/emoral435" target="_blank">{whiteMode ? <img src={GHW} alt="" className="intro-sidefooter-img" /> : <img src={GH} alt="" className="intro-side-img" />}</a>
      <a href={bottomRedirect} target="_blank">{whiteMode ? <img src={repo} alt="" className="intro-sidefooter-img" /> : <img src={MAIL} alt="" className="intro-side-img" />}</a>
    </Box>
    )
}

export default Links