import type { NextApiRequest, NextApiResponse } from 'next'
import { faker } from '@faker-js/faker'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { error } = req.query
  const n = Array.from(Array(10).keys())

  const data = n.map((_, index) => ({
    id: index,
    date: faker.date.recent(360),
    title: faker.lorem.paragraph(2),
    slug: faker.lorem.slug(),
    category: faker.helpers.arrayElement(['Health', 'Life', 'Bisnis']),
    bio: faker.lorem.paragraph(),
    image: {
      original: faker.image.image(112, 84),
      thumb: faker.image.image(50, 50),
    },
  }))

  if (error) {
    res.status(405).end()
  }
  res.status(200).json({ data })
}

export default handler
