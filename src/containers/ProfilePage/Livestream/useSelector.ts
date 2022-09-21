import { useSelector as useReduxSelector } from 'react-redux'
import type { RootState } from 'store'

const useSelector = () =>
  useReduxSelector((state: RootState) => state.livestream)

export default useSelector
