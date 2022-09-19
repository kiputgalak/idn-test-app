import type { FC } from 'react'
import Image from 'components/Image'
import NextImage from 'next/image'
import { Root, Logo } from './styled'

interface ImageLogoComponentProps {
  readonly src: string
  readonly thumb?: string
  readonly alt?: string
}

const ImageLogoComponent: FC<ImageLogoComponentProps> = ({
  src,
  thumb,
  alt,
}) => {
  return (
    <Root>
      <Image
        src={src}
        alt={alt || ''}
        layout="fill"
        objectFit="cover"
        blurSrc={thumb}
      />
      <Logo>
        <NextImage src="/logo_wrapped.svg" width={72} height={24} alt="IDN" />
      </Logo>
    </Root>
  )
}

export default ImageLogoComponent
