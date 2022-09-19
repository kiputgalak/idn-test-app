import type { FC } from 'react'
import Container from 'components/Container'
import ListArticle from 'components/ListArticle'
import Stack from '@mui/material/Stack'
import useSWR from './useSWR'
import dynamic from 'next/dynamic'

const Skeleton = dynamic(() => import('./Skeleton'))
const ErrorView = dynamic(() => import('components/ErrorRequest'))

const Berita: FC = () => {
  const { data, loading, error } = useSWR()

  if (error) return <ErrorView />
  if (loading) return <Skeleton />

  return (
    <Container mt={3}>
      <Stack spacing={3}>
        {data?.data.map((el) => (
          <ListArticle key={el.id} data={el} />
        ))}
      </Stack>
    </Container>
  )
}

export default Berita
