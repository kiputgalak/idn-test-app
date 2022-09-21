import axios from 'axios'
import useNextSWR from 'swr'
import type { Livestream } from 'common-types'

interface Data {
  readonly data: ReadonlyArray<Livestream>
}

interface Props {
  readonly query: string
}

const useSWR = ({ query }: Props) => {
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data)
  const { data, error } = useNextSWR<Data, Error>(
    `/api/livestream?s=${query}`,
    fetcher
  )
  return { data, loading: !data, error }
}

export default useSWR
