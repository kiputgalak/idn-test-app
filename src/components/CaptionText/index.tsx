import type { FC } from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

interface CaptionTextComponent extends TypographyProps {
  readonly bigger?: boolean
}

const CaptionTextComponent: FC<CaptionTextComponent> = ({
  children,
  bigger = false,
  ...props
}) => {
  return (
    <Typography
      variant="caption"
      sx={{
        fontSize: bigger ? 12 : 11,
        lineHeight: '15px',
      }}
      {...props}
    >
      {children}
    </Typography>
  )
}

export default CaptionTextComponent
