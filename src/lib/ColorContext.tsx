import { createTheme, ThemeProvider } from "@mui/material";
import { ReactElement, createContext, useMemo, useState } from "react";


interface Children {
    children: ReactElement
}

/* tslint:disable:no-empty */
export const ColorModeContext = createContext({ toggleColorMode: () => { undefined }})

export const ToggleDarkMode = ({ children } : Children) => {
    let defaultColorMode: 'light' | 'dark' = "dark"
    // https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        defaultColorMode = event.matches ? "dark" : "light";
    });

    const [mode, setMode] = useState<'light' | 'dark'>(defaultColorMode)
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode: string) => (prevMode === 'light') ? 'dark' : 'light')
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