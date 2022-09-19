import { FC, ReactNode, useMemo } from 'react'
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles'
import { useThemeProviderContext } from 'context/ThemeProvider'
import { getDesignTokens } from './options'

interface ThemeProps {
  readonly children: ReactNode
}

// Material UI theming for entire app
const Theme: FC<ThemeProps> = ({ children }) => {
  // Get palette mode from context
  const { mode } = useThemeProviderContext()

  // Create MUI Theme with costumized options and current mode
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default Theme
