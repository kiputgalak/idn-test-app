import type { FC } from 'react'
import Image from 'next/image'
import Container from 'components/Container'

const ErrorRequestComponent: FC = () => (
  <Container mt={3} display="flex" alignItems="center" justifyContent="center">
    <Image src="/illustration_break.svg" width={263} height={148} alt="" />
  </Container>
)

export default ErrorRequestComponent
