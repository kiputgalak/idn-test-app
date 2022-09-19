import type { FC } from 'react'
import ImageComponent from 'components/Image'
import type { Image } from 'common-types'
import { Root } from './styled'

interface BannerProps {
  readonly image: Image
  readonly alt: string
}

const Banner: FC<BannerProps> = ({ image, alt }) => {
  const { original, thumb } = image

  return (
    <Root>
      <ImageComponent
        src={original}
        blurSrc={thumb}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
    </Root>
  )
}

export default Banner
