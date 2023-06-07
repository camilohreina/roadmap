import { useState, useEffect } from 'react'
const CAT_PREFIX_URL = 'https://cataas.com'
// custom hooks
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  // Para recuperar la imagen cada que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3)
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_URL}${imageUrl}` }
}
