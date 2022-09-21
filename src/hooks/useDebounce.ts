import { useRef, useCallback } from 'react'

const useDebounce = () => {
  const time = useRef<NodeJS.Timeout | null>(null)
  return useCallback(
    (callback: () => void) => {
      if (time.current) {
        clearTimeout(time.current)
        time.current = null
      }
      time.current = setTimeout(callback, 400)

      return time.current
    },
    [time]
  )
}

export default useDebounce
