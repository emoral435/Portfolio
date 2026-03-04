export function getInitialThemeMode(): 'light' | 'dark' | null {
  if (typeof window === 'undefined') {
    return null
  }
  
  const stored = localStorage.getItem('theme-mode')
  if (stored === 'light' || stored === 'dark') {
    return stored
  }
  
  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  
  return 'light'
}
