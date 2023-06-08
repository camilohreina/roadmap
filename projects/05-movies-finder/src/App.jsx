import './App.css'

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
        Aquí van los resultados
      </main>
    </div>
  )
}

export default App
