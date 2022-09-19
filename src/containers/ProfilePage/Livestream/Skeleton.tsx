import type { FC } from 'react'
import MuiSkeleton from '@mui/material/Skeleton'
import Container from 'components/Container'
import Grid from '@mui/material/Grid'

const n = Array.from(Array(4).keys())

const Skeleton: FC = () => (
  <Container pt={3}>
    <Grid container spacing={2}>
      {n.map((_el, i) => (
        <Grid item xs={6} key={i}>
          <MuiSkeleton
            variant="rounded"
            width="100%"
            sx={{ paddingTop: '148.38%' }}
          />
        </Grid>
      ))}
    </Grid>
  </Container>
)

export default Skeleton
