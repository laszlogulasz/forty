import { useEffect } from 'react'

const useOutsideClick = (
  ref: { current: { contains: (arg0: EventTarget) => any } },
  callback: () => void
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
  }
  const escapeListener = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    document.addEventListener('keyup', escapeListener)

    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keyup', escapeListener)
    }
  })
}

export default useOutsideClick
