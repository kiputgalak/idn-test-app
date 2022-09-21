import axios from 'axios'
import useNextSWR from 'swr'
import type { Berita } from 'common-types'

interface News {
  readonly data: ReadonlyArray<Berita>
}

interface Props {
  readonly query: string
}

const useSWR = ({ query }: Props) => {
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data)
  const { data, error } = useNextSWR<News, Error>(
    `/api/berita?s=${query}`,
    fetcher
  )
  return { data, loading: !data, error }
}

export default useSWR
