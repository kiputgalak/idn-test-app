import type { FC } from 'react'
import Box from '@mui/material/Box'
import CaptionText from 'components/CaptionText'
import TitleText from 'components/TitleText'
import Image from 'components/Image'
import { ImageContainer } from './styled'
import type { Quiz } from 'common-types'
import { numberFormatter } from 'utils/formatter'

export interface ListQuizComponentProps {
  readonly data: Quiz
}

const ListQuizComponent: FC<ListQuizComponentProps> = ({ data }) => {
  const { title, category, playCount, image } = data

  return (
    <Box>
      <ImageContainer>
        <Image
          layout="fill"
          objectFit="cover"
          src={image.original}
          alt={title}
          blurSrc={image.thumb}
        />
      </ImageContainer>
      <Box pt="12px" />
      <CaptionText bigger>{category}</CaptionText>
      <Box pt={1} />
      <TitleText ellipsis={3}>{title}</TitleText>
      <Box pt={1} />
      <CaptionText bigger>{numberFormatter(playCount)} plays</CaptionText>
    </Box>
  )
}

export default ListQuizComponent
