import { useState, useEffect } from 'react'
import { getRandomFact } from './services/facts'

import './App.css'

const CAT_PREFIX_URL = 'https://cataas.com'
export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // Para recuperar las cita al cargar la pagina
  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

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

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App de gatos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_URL}${imageUrl}`} alt={`Image extracted using three words for ${fact}`} />}
    </main>
  )
}
