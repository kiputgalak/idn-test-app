import type { FC } from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

interface TitleTextComponentProps extends TypographyProps {
  readonly ellipsis?: number
}

const TitleTextComponent: FC<TitleTextComponentProps> = ({
  children,
  ellipsis,
  ...props
}) => {
  return (
    <Typography
      variant="h3"
      sx={{
        fontSize: 16,
        fontWeight: 900,
        lineHeight: '21px',
        ...(ellipsis
          ? {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: ellipsis,
              WebkitBoxOrient: 'vertical',
            }
          : {}),
      }}
      {...props}
    >
      {children}
    </Typography>
  )
}

export default TitleTextComponent
