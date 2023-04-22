import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext/ThemeContext"

export const useTheme = () => {
    return useContext(ThemeContext)
}