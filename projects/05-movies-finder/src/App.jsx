import './App.css'
import { useEffect, useRef, useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()

    // Se puede obtener todos los campos del form de esta manera, esto es no contolado
    /*  const fields = Object.fromEntries(new window.FormData(event.target))
    console.log(fields) */

    console.log({ query })
  }

  const handleChange = (event) => {
    // Para obtener directamente el ultimo valor, recordar que el estado es asincrono
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
    // Validaciones directamente cuando cambia el field
    /*     if (newQuery === '') {
      setError('no se puede buscar una película vacía')
      return
    }

    if (newQuery.match(/^\d+$/)) {
      setError('no se puede buscar una película con números')
      return
    }

    if (newQuery.length < 3) {
      setError('no se puede buscar una película con menos de 3 caracteres')
      return
    }

    setError(null) */
  }

  // Validaciones por useEffect
  useEffect(() => {
    if (query === '') {
      setError('no se puede buscar una película vacía')
      return
    }

    if (query.match(/^\d+$/)) {
      setError('no se puede buscar una película con números')
      return
    }

    if (query.length < 3) {
      setError('no se puede buscar una película con menos de 3 caracteres')
      return
    }

    setError(null)
  }, [query])

  return (
    <div className='page'>
      <header>
        <h1>Movies Finder</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' placeholder='Avengers, The Matrix, Star Wars' />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
