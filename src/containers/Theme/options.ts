import type { ThemeOptions } from '@mui/material'
import type { Mode } from 'context/ThemeProvider/types'

type Option = (mode: Mode) => ThemeOptions

// Grouped colors for theme options
export const colors = {
  tarnishedSilver: '#797D7F',
  darkWillow: '#14171A',
  ottomanRed: '#ED2227',
  ottomanRedLight: '#ED2232',
  callaLily: '#E5E9EC',
  maryRose: '#FBD2D4',
  silverCharm: '#ADB1B4',
  background: '#F5F5F5',
}

// Theme Options, override some default behavior of
// components and palette from MUI
export const getDesignTokens: Option = (mode) => ({
  palette: {
    mode,
    primary: {
      main: colors.ottomanRed,
      light: colors.ottomanRedLight,
    },
    ...(mode === 'light' ? { divider: colors.callaLily } : {}),
  },
  typography: {
    fontFamily: ['Lato', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    body1: {
      fontSize: 14,
      lineHeight: '22px',
      ...(mode === 'light' ? { color: colors.darkWillow } : {}),
    },
    ...(mode === 'light'
      ? {
          h3: {
            color: colors.darkWillow,
          },
          caption: {
            color: colors.tarnishedSilver,
          },
        }
      : {}),
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          body {
            ${mode === 'light' ? 'background-color: #F5F5F5;' : ''}
          }
        `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'unset',
          fontWeight: 400,
          borderRadius: 8,
          paddingTop: 16,
          paddingBottom: 16,
          lineHeight: '16px',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: 'unset',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: colors.maryRose,
          color: colors.ottomanRed,
        },
        root: {
          '&.roundedCorner': { borderRadius: '6px' },
          '&.solid': {
            backgroundColor: colors.silverCharm,
            color: '#ffffff',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          ...(mode === 'dark' ? { color: 'inherit' } : {}),
        },
      },
    },
  },
})
