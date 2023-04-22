import { ReactElement, createContext, useState } from "react";

interface isDarkModeContext {
    isDarkMode: boolean,
    toggleDarkMode: () => void
}

interface PropsChildren {
    children: ReactElement<any>
}

export const ThemeContext = createContext<isDarkModeContext>({})

export const ThemeProvider = ({children} : PropsChildren) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

    const toggleDarkMode = () => {
        setIsDarkMode(prevDarkMode => !prevDarkMode);
      };

    return (
      <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        {children}
      </ThemeContext.Provider>
    )
}