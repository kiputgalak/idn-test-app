import type { FC } from 'react'
import Chip, { ChipProps } from '@mui/material/Chip'

interface ChipComponentProps extends ChipProps {
  readonly roundedCorner?: boolean
  readonly solid?: boolean
}

const ChipComponent: FC<ChipComponentProps> = ({
  roundedCorner = true,
  size,
  solid = false,
  ...props
}) => {
  return (
    <Chip
      {...props}
      size={size || 'small'}
      className={`${roundedCorner ? 'roundedCorner' : ''} ${
        solid ? 'solid' : ''
      }`}
      sx={{ fontSize: 12 }}
    />
  )
}

export default ChipComponent
