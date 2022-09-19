import type { FC } from 'react'
import Button, { ButtonProps } from '@mui/material/Button'
import { alpha } from '@mui/material/styles'

interface ButtonComponentProps extends ButtonProps {
  readonly shadow?: boolean
}

// Override MUI Button to have shadow and
// disable the elevation
const ButtonComponent: FC<ButtonComponentProps> = ({
  children,
  shadow = true,
  ...props
}) => (
  <Button
    {...props}
    disableElevation
    sx={(theme) => ({
      boxShadow: shadow
        ? `8px 8px 16px ${alpha(theme.palette.primary.light, 0.16)} !important`
        : 'none',
    })}
  >
    {children}
  </Button>
)

export default ButtonComponent
