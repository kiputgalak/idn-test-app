import { styled } from '@mui/material/styles'

export const Root = styled('div')`
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  color: #ffffff;
  display: inline-block;
  padding: 0 8px;

  & .mark {
    color: #ed2227;
  }
`
