import './App.css'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'

function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  // Validaciones por useEffect
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('no se puede buscar una película con números')
      return
    }

    if (search.length < 3) {
      setError('no se puede buscar una película con menos de 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}

function App () {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  // prevent debounce : esperar que el usuario termine para ejecutar el llamado
  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , [])

  const handleSubmit = (event) => {
    event.preventDefault()

    // Se puede obtener todos los campos del form de esta manera, esto es no contolado

    /*  const fields = Object.fromEntries(new window.FormData(event.target))
    console.log(fields) */

    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
    // Para obtener directamente el ultimo valor, recordar que el estado es asincrono
    /*     const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return */

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

  return (
    <div className='page'>
      <header>
        <h1>Movies Finder</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }}
            onChange={handleChange} value={search} name='query' placeholder='Avengers, The Matrix, Star Wars'
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>Loading...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
