import type { FC } from 'react'
import Chip, { ChipProps } from '@mui/material/Chip'

interface ChipButtonComponentProps extends ChipProps {
  readonly fullWidth?: boolean
  readonly active?: boolean
}

const ChipButtonComponent: FC<ChipButtonComponentProps> = ({
  fullWidth = true,
  active = false,
  ...props
}) => {
  return (
    <Chip
      {...props}
      clickable={!active}
      variant={active ? 'filled' : 'outlined'}
      color={active ? 'primary' : 'default'}
      sx={{
        width: fullWidth ? '100%' : 'auto',
        fontSize: 12,
        fontWeight: 700,
      }}
    />
  )
}

export default ChipButtonComponent
