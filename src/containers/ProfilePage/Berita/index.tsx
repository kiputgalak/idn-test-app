import type { FC } from 'react'
import Container from 'components/Container'
import ListArticle from 'components/ListArticle'
import Stack from '@mui/material/Stack'
import useSWR from './useSWR'
import dynamic from 'next/dynamic'
import useSelector from './useSelector'

const Skeleton = dynamic(() => import('./Skeleton'))
const ErrorView = dynamic(() => import('components/ErrorRequest'))

const Berita: FC = () => {
  const { query } = useSelector()
  const { data, loading, error } = useSWR({ query })

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
