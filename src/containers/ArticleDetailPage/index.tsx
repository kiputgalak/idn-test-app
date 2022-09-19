import { FC } from 'react'
import TopMenu from 'components/TopMenu'
import type { Berita } from 'common-types'
import Title from './Title'
import Banner from './Banner'
import Typography from '@mui/material/Typography'
import Container from 'components/Container'

interface ArticleDetailProps {
  readonly data: Berita
}

const ArticleDetail: FC<ArticleDetailProps> = ({ data }) => {
  const { image, title, content } = data
  return (
    <>
      <TopMenu href="/" />
      <Title data={data} />
      <Banner image={image} alt={title} />
      <Container mt={3}>
        <Typography>{content}</Typography>
      </Container>
    </>
  )
}

export default ArticleDetail
