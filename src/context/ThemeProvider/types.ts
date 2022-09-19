import type { ReactNode } from 'react'
import type { PaletteMode } from '@mui/material'

export type Mode = PaletteMode

export interface ThemeProviderValue {
  readonly setColorMode: (mode: Mode) => void
  readonly mode: Mode
}

export interface ThemeProviderProps {
  readonly children: ReactNode
}
