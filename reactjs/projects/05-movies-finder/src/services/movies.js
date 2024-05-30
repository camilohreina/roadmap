const API_KEY = '2504b99b'
export const searchMovies = async ({ search }) => {
  if (search === '') return
  console.log('llegando al fetch')
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()
    const movies = json.Search

    // No utilizar el contract de la api, es mejor mappear
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (error) {
    console.log(error)
    throw new Error('Error searching movies')
  }
}
