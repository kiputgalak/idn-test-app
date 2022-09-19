import {
  FC,
  createContext,
  useMemo,
  useEffect,
  useState,
  useContext,
} from 'react'
import type { ThemeProviderValue, ThemeProviderProps, Mode } from './types'
import { COLOR_MODE } from './constants'
import useMediaQuery from '@mui/material/useMediaQuery'

/**
 * Create context for theme palette mode
 *
 * @param {callback} setColorMode set mode value in context & localstorage
 * @param {string} mode current palette mode
 * @return {context}
 */
const ThemeProviderContext = createContext<ThemeProviderValue>({
  setColorMode: () => undefined,
  mode: 'light',
})

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  // flag if system using darkmode
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const [colorMode, setColorMode] = useState<Mode>('light')

  useEffect(() => {
    // get current mode from localstorage
    const localMode = localStorage.getItem(COLOR_MODE)

    // temp mode based on system
    const mode = prefersDarkMode ? 'dark' : 'light'

    // Check if there is localstorage data
    if (localMode) {
      // If there is data, store to component state
      setColorMode(localMode as Mode)
    } else {
      // If no localstorage data, set localstorage and
      // state with temp mode
      localStorage.setItem(COLOR_MODE, mode)
      setColorMode(mode)
    }
  }, [prefersDarkMode])

  // Context value
  const value = useMemo(
    () => ({
      mode: colorMode,
      setColorMode: (mode: Mode) => {
        setColorMode(mode)
        localStorage.setItem(COLOR_MODE, mode)
      },
    }),
    [colorMode]
  )

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useThemeProviderContext = (): ThemeProviderValue => {
  return useContext(ThemeProviderContext)
}

export default ThemeProvider
