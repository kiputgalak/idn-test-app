import { FC, useState, useEffect, useMemo } from 'react'
import type { NavigationProps } from '../Navigation'
import SearchForm from 'components/Search'
import useDispatch from './useDispatch'
import Container from 'components/Container'
import useDebounce from 'hooks/useDebounce'
import useBeritaSelector from '../Berita/useSelector'
import useLivestreamSelector from '../Livestream/useSelector'
import useQuizSelector from '../Quiz/useSelector'

interface SearchProps {
  readonly tab: NavigationProps['active']
}

const Search: FC<SearchProps> = ({ tab }) => {
  const beritaState = useBeritaSelector()
  const livestreamState = useLivestreamSelector()
  const quizState = useQuizSelector()
  const dispatch = useDispatch()
  const [value, setValue] = useState<string>('')
  const debounce = useDebounce()

  const values = useMemo(
    () => ({
      berita: beritaState.query,
      livestream: livestreamState.query,
      quiz: quizState.query,
    }),
    [beritaState.query, livestreamState.query, quizState.query]
  )

  useEffect(() => {
    debounce(() => {
      dispatch[tab](value)
    })
  }, [debounce, dispatch, tab, value])

  useEffect(() => {
    setValue(values[tab])
  }, [tab, values])

  return (
    <Container mt={3}>
      <SearchForm
        value={value}
        changeAction={(e) => setValue(e.target.value)}
        placeholder={`Cari ${tab}...`}
        mb={2}
      />
    </Container>
  )
}

export default Search
