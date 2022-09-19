import { FC } from 'react'
import MuiIconButton, { IconButtonProps } from '@mui/material/IconButton'
import Image from 'next/image'
import { useThemeProviderContext } from 'context/ThemeProvider'

interface IconButtonComponentProps extends IconButtonProps {
  readonly src: string
  readonly width?: number
  readonly height?: number
}

// Button with svg icon, svg changed based on current palette mode
const IconButtonComponent: FC<IconButtonComponentProps> = ({
  src,
  width = 24,
  height = 24,
  ...props
}: IconButtonComponentProps) => {
  const { mode } = useThemeProviderContext()

  return (
    <MuiIconButton {...props} sx={{ p: 0 }}>
      <Image
        src={`/icons/${src}_${mode || 'light'}.svg`}
        width={width}
        height={height}
        alt=""
      />
    </MuiIconButton>
  )
}

export default IconButtonComponent
