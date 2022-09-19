import { styled } from '@mui/material/styles'

export const ImageContainer = styled('div')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  width: '100%',
  paddingTop: '100%',
  position: 'relative',
}))
