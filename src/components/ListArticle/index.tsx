import type { FC } from 'react'
import ImageLogo from 'components/ImageLogo'
import Box from '@mui/material/Box'
import CaptionText from 'components/CaptionText'
import TitleText from 'components/TitleText'
import IconButton from 'components/IconButton'
import type { Berita } from 'common-types'
import { dateFormatter } from 'utils/formatter'
import Link from 'components/Link'

interface ListArticleComponentProps {
  readonly data: Berita
}

const ListArticleComponent: FC<ListArticleComponentProps> = ({ data }) => {
  const { title, date, category, image, slug } = data
  return (
    <Box display="flex" justifyContent="space-between">
      <Box mr={2}>
        <CaptionText>{dateFormatter(date)}</CaptionText>
        <Link href={`/${slug}`}>
          <TitleText ellipsis={3}>{title}</TitleText>
        </Link>
        <CaptionText bigger>{category}</CaptionText>
      </Box>
      <Box textAlign="right">
        <ImageLogo src={image.original} thumb={image.thumb} alt={title} />
        <Box pt="6px" />
        <IconButton aria-label="Bagikan" src="ic_share" />
      </Box>
    </Box>
  )
}

export default ListArticleComponent
