// import { useCallback, useEffect, useRef } from 'react'

// export const useOutsideClick = (onClose: () => void) => {
//   const ref = useRef(null)
//   const escapeListener = useCallback((e: KeyboardEvent) => {
//     if (e.key === 'Escape') {
//       onClose()
//     }
//   }, [])
//   const clickListener = useCallback(
//     (e: MouseEvent) => {
//       if (!(ref.current! as any).contains(e.target)) {
//         console.log(onClose)
//         onClose?.()
//       }
//     },
//     [ref.current]
//   )
//   useEffect(() => {
//     document.addEventListener('click', clickListener)
//     document.addEventListener('keyup', escapeListener)
//     return () => {
//       document.removeEventListener('click', clickListener)
//       document.removeEventListener('keyup', escapeListener)
//     }
//   }, [])
//   return ref
// }

import { useEffect } from 'react'

const useOutsideClick = (ref, callback: () => void) => {
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
