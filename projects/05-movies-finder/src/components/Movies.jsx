function ListOfMovies ({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  )
}

function NoMoviesResults () {
  return (<p>No se han encontrado resultados</p>)
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />
  )
}
