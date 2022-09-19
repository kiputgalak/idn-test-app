import type { FC } from 'react'
import Image from 'next/image'
import { Root } from './styled'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { numberFormatter } from 'utils/formatter'

interface LiveChipProps {
  readonly viewer: number
}

const LiveChip: FC<LiveChipProps> = ({ viewer }) => {
  return (
    <Root>
      <Box display="inline" sx={{ verticalAlign: 'middle' }}>
        <Image
          className="test"
          src="/icons/ic_eye_open.svg"
          alt=""
          width={12}
          height={12}
        />
      </Box>{' '}
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: 10,
          lineHeight: '12px',
          color: '#ffffff',
        }}
        variant="caption"
      >
        {numberFormatter(viewer)} | <span className="mark">• Live</span>
      </Typography>
    </Root>
  )
}

export default LiveChip
