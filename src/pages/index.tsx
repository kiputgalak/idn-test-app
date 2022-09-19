import type { GetServerSideProps, NextPage } from 'next'
import type { User, SuccessProps } from 'common-types'
import Head from 'next/head'
import Page from 'containers/ProfilePage'
import { faker } from '@faker-js/faker'

const ProfilePage: NextPage<SuccessProps<User>> = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.name}</title>
        <meta name="description" content={data.bio} />
      </Head>
      <Page data={data} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Populate user data
  const data = {
    name: faker.name.fullName(),
    image: faker.image.avatar(),
    following: faker.datatype.number({ min: 1000, max: 9999 }),
    followers: faker.datatype.number({ min: 10000 }),
    bio: faker.lorem.paragraph(),
  }

  return { props: { data } }
}

export default ProfilePage
