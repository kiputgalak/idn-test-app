import type { FC } from 'react'
import Box, { BoxProps } from '@mui/material/Box'

// Container to set left and right side spacing
const ContainerComponent: FC<BoxProps> = ({ children, ...props }) => (
  <Box {...props} px={3}>
    {children}
  </Box>
)

export default ContainerComponent
