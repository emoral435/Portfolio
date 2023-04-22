import { useTheme } from "@mui/material"
import { ColorModeContext } from "../../context/ColorContext/ColorContext"
import { useContext } from "react"

const StickyNav = () => {
    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)

    return (
    <nav>StickyNav {theme.palette.mode}</nav>
    )
}

export default StickyNav