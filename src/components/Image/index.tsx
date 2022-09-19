import React, { useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface ImageComponentProps extends ImageProps {
  fallbackSrc?: string
  blurSrc?: string
}

// Override next image with fallback error and placeholder
const ImageComponent = (props: ImageComponentProps) => {
  const { src, fallbackSrc, blurSrc, alt, ...rest } = props
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc || '/timmy_sad.jpeg')
      }}
      alt={alt || ''}
      placeholder={blurSrc ? 'blur' : undefined}
      blurDataURL={blurSrc}
    />
  )
}

export default ImageComponent
