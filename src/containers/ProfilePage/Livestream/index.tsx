import type { FC } from 'react'
import ListLivestream from 'components/ListLivestream'
import Container from 'components/Container'
import Grid from '@mui/material/Grid'
import useSWR from './useSWR'
import dynamic from 'next/dynamic'

const Skeleton = dynamic(() => import('./Skeleton'))
const ErrorView = dynamic(() => import('components/ErrorRequest'))

const Livestream: FC = () => {
  const { data, loading, error } = useSWR()

  if (error) return <ErrorView />
  if (loading) return <Skeleton />

  return (
    <Container pt={3}>
      <Grid container spacing={2}>
        {data?.data.map((el) => (
          <Grid item xs={6} key={el.id}>
            <ListLivestream data={el} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Livestream
