import axios from 'axios'
import useNextSWR from 'swr'
import type { Quiz } from 'common-types'

interface Data {
  readonly data: ReadonlyArray<Quiz>
}

interface Props {
  readonly query: string
}

const useSWR = ({ query }: Props) => {
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data)
  const { data, error } = useNextSWR<Data, Error>(
    `/api/quiz?s=${query}`,
    fetcher
  )
  return { data, loading: !data, error }
}

export default useSWR
