import type { FC } from 'react'
import ChipButton from 'components/ChipButton'
import Stack from '@mui/material/Stack'
import Container from 'components/Container'

export interface NavigationProps {
  readonly active: 'berita' | 'livestream' | 'quiz'
  readonly setActive: (state: 'berita' | 'livestream' | 'quiz') => void
}

const Navigation: FC<NavigationProps> = ({ active, setActive }) => (
  <Container pt={2}>
    <Stack spacing={1} direction="row">
      <ChipButton
        active={active === 'berita'}
        label="Berita"
        onClick={() => setActive('berita')}
      />
      <ChipButton
        active={active === 'livestream'}
        label="Livestream"
        onClick={() => setActive('livestream')}
      />
      <ChipButton
        active={active === 'quiz'}
        label="Quiz"
        onClick={() => setActive('quiz')}
      />
    </Stack>
  </Container>
)

export default Navigation
