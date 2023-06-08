import './App.css'
import { useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies } = useMovies()

  return (
    <div className='page'>
      <header>
        <h1>Movies Finder</h1>
        <form className='form'>
          <input type='text' placeholder='Avengers, The Matrix, Star Wars' />
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
