import { styled } from '@mui/material/styles'

export const Root = styled('div')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  width: 112,
  height: 84,
  position: 'relative',
  overflow: 'hidden',
}))

export const Logo = styled('div')`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 72px;
  height: 24px;
`
