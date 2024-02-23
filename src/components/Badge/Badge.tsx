import { Box } from "@mui/material"

interface PropInterface {
    text: string,
    color: string,
    textColor: string
}


const Badge = ({text, color, textColor} : PropInterface) => {
  return (
    <Box sx={{backgroundColor: color, width: '100%', whiteSpace: "nowrap", overflow: "hidden", fontSize: {xs: '.6rem', sm: '.85rem', color: textColor}}} className="badge">{text}</Box>
  )
}

export default Badge