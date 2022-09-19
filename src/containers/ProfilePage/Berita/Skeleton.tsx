import type { FC } from 'react'
import MuiSkeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Container from 'components/Container'
import Box from '@mui/material/Box'

const n = Array.from(Array(3).keys())

const Skeleton: FC = () => (
  <Container mt={3}>
    <Stack spacing={3}>
      {n.map((_el, i) => (
        <Box display="flex" justifyContent="space-between" key={i}>
          <Box flex={1} mr={2}>
            <MuiSkeleton variant="text" />
            <MuiSkeleton variant="text" />
            <MuiSkeleton variant="text" />
          </Box>
          <Box>
            <MuiSkeleton variant="rounded" width={112} height={84} />
          </Box>
        </Box>
      ))}
    </Stack>
  </Container>
)

export default Skeleton
