import { FC } from 'react'
import Image from 'components/Image'
import { Root } from './styled'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CaptionText from 'components/CaptionText'
import type { Livestream } from 'common-types'
import dynamic from 'next/dynamic'

const Chip = dynamic(() => import('components/Chip'))
const LiveChip = dynamic(() => import('./LiveChip'))

export interface ListLivestreamComponentProps {
  readonly data: Livestream
}

const ListLivestreamComponent: FC<ListLivestreamComponentProps> = ({
  data,
}) => {
  const { title, category, type, image, audience } = data

  return (
    <Root>
      <Box
        p="12px"
        zIndex={7}
        position="relative"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        className="content"
      >
        <Box>
          {type === 'clip' && <Chip label="Clip" solid />}
          {type === 'terjadwal' && <Chip label="Terjadwal" color="primary" />}
          {type === 'live' && <LiveChip viewer={audience} />}
        </Box>
        <Box>
          <Typography
            color="common.white"
            sx={{
              fontWeight: 900,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {title}
          </Typography>
          <CaptionText color="common.white">{category}</CaptionText>
        </Box>
      </Box>
      <Image
        src={image.original}
        alt={title}
        layout="fill"
        objectFit="cover"
        blurSrc={image.thumb}
      />
    </Root>
  )
}

export default ListLivestreamComponent
