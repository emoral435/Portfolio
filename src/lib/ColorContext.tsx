import { createTheme, ThemeProvider } from "@mui/material";
import { ReactElement, createContext, useMemo, useState, useEffect } from "react";


interface Children {
    children: ReactElement
}

/* tslint:disable:no-empty */
export const ColorModeContext = createContext({ toggleColorMode: () => { undefined }})

const STORAGE_KEY = 'theme-mode'

export const ToggleDarkMode = ({ children } : Children) => {
    const [mode, setMode] = useState<'light' | 'dark'>('dark')
    const [isHydrated, setIsHydrated] = useState(false)

    useEffect(() => {
        // Check localStorage first
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored === 'light' || stored === 'dark') {
            setMode(stored)
        } else {
            // First visit - check system preference and store it
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            const systemMode = prefersDark ? 'dark' : 'light'
            setMode(systemMode)
            localStorage.setItem(STORAGE_KEY, systemMode)
        }
        setIsHydrated(true)

        // Listen for system changes (only if no stored preference)
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handler = (event: MediaQueryListEvent) => {
            // Only update if user hasn't set a preference
            if (!localStorage.getItem(STORAGE_KEY)) {
                const newMode = event.matches ? 'dark' : 'light'
                setMode(newMode)
            }
        }
        mediaQuery.addEventListener('change', handler)
        return () => mediaQuery.removeEventListener('change', handler)
    }, [])

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode: string) => {
                    const newMode = prevMode === 'light' ? 'dark' : 'light'
                    localStorage.setItem(STORAGE_KEY, newMode)
                    return newMode
                })
            }
        }), [],
    )

    const theme = useMemo(
        () => 
            createTheme({
                palette: {
                    mode,
                    primary: {
                        light: '#f08076',
                        main: '#DE5246',
                        dark: '#c53124',
                        contrastText: '#fff',
                    },
                    background: {
                        ...(mode === 'light' 
                        ?   {
                                default: '#e7eef1',
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
            }), [mode]
    )

    // Prevent hydration mismatch by not rendering until hydrated
    if (!isHydrated) {
        return null
    }

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
