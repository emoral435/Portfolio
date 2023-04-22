import { createTheme, ThemeProvider } from "@mui/material";
import { ReactElement, createContext, useMemo, useState } from "react";

interface Children {
    children: ReactElement
}

export const ColorModeContext = createContext({ toggleColorMode: () => {}})

export const ToggleDarkMode = ({ children } : Children) => {
    const [mode, setMode] = useState<'dark' | 'light'>('light')

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light') ? 'dark' : 'light')
            }
        }), [],
    )

    const theme = useMemo(
        () => 
            createTheme({
                palette: {
                    mode,
                    primary: {
                        light: '#757ce8',
                        main: '#3f50b5',
                        dark: '#002884',
                        contrastText: '#fff',
                    },
                    background: {
                        ...(mode === 'light' 
                        ?   {
                                default: '#fbfbfe',
                            }
                        :   {
                                default: '#161927'
                            }
                        )
                    },
                    text: {
                        ...(mode === 'light'
                        ?   {
                                primary: '#232429',
                                secondary: '#6a6d7c' 
                            }
                        :   {
                                primary: '#f1f2f3',
                                secondary: '#b1b3bb'
                            }
                        )
                    }
                },
            }), [mode] // NOTE this means that the theme we will be sending is reacts to changes to mode, which the color mode context will change
    )

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}