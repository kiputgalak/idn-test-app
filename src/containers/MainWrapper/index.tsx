import type { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'

interface MainWrapperProps {
  readonly children: ReactNode
}

// Add style for global wrapper if necessary
const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
  return <Box pb={3}>{children}</Box>
}

export default MainWrapper
