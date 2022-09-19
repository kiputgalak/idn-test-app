import type { FC } from 'react'
import ListQuiz from 'components/ListQuiz'
import Container from 'components/Container'
import Grid from '@mui/material/Grid'
import useSWR from './useSWR'
import dynamic from 'next/dynamic'

const Skeleton = dynamic(() => import('./Skeleton'))
const ErrorView = dynamic(() => import('components/ErrorRequest'))

const Quiz: FC = () => {
  const { data, loading, error } = useSWR()

  if (error) return <ErrorView />
  if (loading) return <Skeleton />
  return (
    <Container pt={3}>
      <Grid container rowSpacing={4} columnSpacing={2}>
        {data?.data.map((el) => (
          <Grid item xs={6} key={el.id}>
            <ListQuiz data={el} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Quiz
