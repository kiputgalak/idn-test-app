import type { FC } from 'react'
import IconButton from 'components/IconButton'
import ColorSwitcher from 'components/ColorSwitcher'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Container from 'components/Container'
import Link from 'next/link'

interface TopMenuComponentProps {
  readonly href?: string
}

const TopMenuComponent: FC<TopMenuComponentProps> = ({ href }) => (
  <Paper elevation={0} square={true} sx={{ pt: 3 }}>
    <Container py={2} display="flex">
      <Box>
        <Link href={href || '/'} passHref>
          <IconButton aria-label="Kembali" src="ic_angle_left" />
        </Link>
      </Box>
      <Box flexGrow={1} />
      <Box mr={1}>
        <ColorSwitcher />
      </Box>
      <Box>
        <IconButton aria-label="Bagikan" src="ic_share" />
      </Box>
    </Container>
  </Paper>
)

export default TopMenuComponent
