import type { NextApiRequest, NextApiResponse } from 'next'
import { faker } from '@faker-js/faker'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { error } = req.query
  const n = Array.from(Array(10).keys())

  const data = n.map((_, index) => ({
    id: index,
    title: faker.lorem.paragraph(2),
    category: faker.helpers.arrayElement(['Health', 'Life', 'Bisnis']),
    playCount: faker.datatype.number({ min: 1000 }),
    image: {
      original: faker.image.image(1000, 1000),
      thumb: faker.image.image(100, 100),
    },
  }))

  if (error) {
    res.status(405).end()
  }
  res.status(200).json({ data })
}

export default handler
