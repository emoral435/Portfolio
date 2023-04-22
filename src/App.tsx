import { ThemeProvider } from "./context/ThemeContext/ThemeContext"

function App() {
  return (
    <>
    <ThemeProvider> {/* NOTE this just gives us access to the useTheme hook we made that tells us whether it is dark mode or not */}
        
      </ThemeProvider>
    </>
  )
}

export default App
