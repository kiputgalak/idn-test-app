import type { GetServerSideProps, NextPage } from 'next'
import type { Berita, SuccessProps } from 'common-types'
import Head from 'next/head'
import Page from 'containers/ArticleDetailPage'
import { faker } from '@faker-js/faker'

const ProfilePage: NextPage<SuccessProps<Berita>> = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.content} />
      </Head>
      <Page data={data} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Populate article data
  const data = {
    date: faker.date.recent(360).toString(),
    title: faker.lorem.paragraph(2),
    category: faker.helpers.arrayElement(['Health', 'Life', 'Bisnis']),
    content: faker.lorem.paragraph(),
    author: {
      name: faker.name.fullName(),
      image: faker.image.avatar(),
    },
    image: {
      original: faker.image.image(1120, 840),
      thumb: faker.image.image(50, 50),
    },
  }

  return { props: { data } }
}

export default ProfilePage
