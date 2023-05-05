import { Box } from "@mui/material"

interface PropInterface {
    text: string,
    color: string,
    textColor: string
}


const Badge = ({text, color, textColor} : PropInterface) => {
  return (
    <Box sx={{backgroundColor: color, maxWidth: 'min-content', fontSize: {xs: '.7rem', sm: '.85rem', color: textColor}}} className="badge">{text}</Box>
  )
}

export default Badge