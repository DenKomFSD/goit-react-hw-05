import { useEffect, useState } from "react";
import { fetchTrendingFilms } from "../../films-api";
import MovieList from "../../components/MovieList/MovieList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function Homepage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchFilms() {
      try {
        const films = await fetchTrendingFilms({ page: 1 });
        setMovies(films.data.results);
      } catch (error) {
        setError(true);
      } finally {
      }
    }
    fetchFilms();
  }, []);
  return (
    <>
      {movies.length > 0 && <h3>Tranding films this week! </h3>}
      {movies.length > 0 && <MovieList movies={movies} />}
      {error && <ErrorMessage />}
    </>
  );
}
