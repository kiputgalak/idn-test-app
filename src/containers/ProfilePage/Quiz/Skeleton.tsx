import type { FC } from 'react'
import MuiSkeleton from '@mui/material/Skeleton'
import Container from 'components/Container'
import Grid from '@mui/material/Grid'

const n = Array.from(Array(4).keys())

const Skeleton: FC = () => (
  <Container pt={3}>
    <Grid container rowSpacing={4} columnSpacing={2}>
      {n.map((_el, i) => (
        <Grid item xs={6} key={i}>
          <MuiSkeleton
            variant="rounded"
            width="100%"
            sx={{ paddingTop: '100%' }}
          />
          <MuiSkeleton variant="text" width="40%" />
          <MuiSkeleton variant="text" width="80%" />
          <MuiSkeleton variant="text" width="60%" />
        </Grid>
      ))}
    </Grid>
  </Container>
)

export default Skeleton
