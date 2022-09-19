import { styled } from '@mui/material/styles'

export const Root = styled('div')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  width: '100%',
  paddingTop: '148.38%',
  position: 'relative',
  zIndex: 5,
  overflow: 'hidden',

  '&:before': {
    content: '""',
    display: 'block',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 6,
    left: 0,
    top: 0,
    background:
      'linear-gradient(0deg, rgba(0, 0, 0, 0.859) 20.8%, rgba(68, 68, 68, 0.165) 88.19%, rgba(84, 84, 84, 0) 122.9%)',
  },

  '& .content': {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
}))
