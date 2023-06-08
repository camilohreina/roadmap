import responseMovies from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'

export function useMovies () {
  const movies = responseMovies.Search

  // No utilizar el contract de la api, es mejor mappear
  const mappedMovies = movies.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: mappedMovies }
}
