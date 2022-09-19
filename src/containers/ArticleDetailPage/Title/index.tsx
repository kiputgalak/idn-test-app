import { FC } from 'react'
import Container from 'components/Container'
import Paper from '@mui/material/Paper'
import type { Berita } from 'common-types'
import TitleText from 'components/TitleText'
import CaptionText from 'components/CaptionText'
import { dateFormatter } from 'utils/formatter'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Link from 'components/Link'

interface TitleProps {
  readonly data: Berita
}

const Title: FC<TitleProps> = ({ data }) => {
  const { title, date, category, author } = data
  return (
    <Paper
      elevation={0}
      square={true}
      sx={{
        pt: 1,
        pb: 2,
      }}
    >
      <Container>
        <CaptionText bigger color="primary">
          {category}
        </CaptionText>{' '}
        <CaptionText>• {dateFormatter(date)}</CaptionText>
        <TitleText>{title}</TitleText>
        <Box display="flex" alignItems="center" mt={1}>
          <Avatar
            alt={author.name}
            src={author.image}
            sx={{ width: 25, height: 25 }}
          />
          <Box ml={1}>
            <Link href="/">
              <CaptionText>{author.name}</CaptionText>
            </Link>
          </Box>
        </Box>
      </Container>
    </Paper>
  )
}

export default Title
