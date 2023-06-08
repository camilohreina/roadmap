import './App.css'
import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'
import { Movies } from './components/Movies'

const movies = responseMovies.Search

function App () {
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
