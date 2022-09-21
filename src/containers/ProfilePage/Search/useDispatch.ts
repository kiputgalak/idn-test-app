import { useMemo } from 'react'
import { useDispatch as useReduxDispatch } from 'react-redux'
import { filter as filterBerita } from '../Berita/reducer'
import { filter as filterLivestream } from '../Livestream/reducer'
import { filter as filterQuiz } from '../Quiz/reducer'

const useDispatch = () => {
  const dispatch = useReduxDispatch()
  return useMemo(
    () => ({
      berita: (query: string) => {
        dispatch(filterBerita(query))
      },
      livestream: (query: string) => {
        dispatch(filterLivestream(query))
      },
      quiz: (query: string) => {
        dispatch(filterQuiz(query))
      },
    }),
    [dispatch]
  )
}

export default useDispatch
