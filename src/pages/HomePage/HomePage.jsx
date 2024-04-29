import { useEffect, useState } from "react";
import { fetchTrendingFilms } from "../../films-api";
import MovieList from "../../components/MovieList/MovieList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";

export default function Homepage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchFilms() {
      try {
        setLoading(true);
        const films = await fetchTrendingFilms();
        setMovies(films.data.results);
      } catch (error) {
        setError(true);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }
    fetchFilms();
  }, []);
  return (
    <>
      {movies.length > 0 && <h3>Tranding films this week! </h3>}
      {loading && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} />}
      {error && <ErrorMessage />}
    </>
  );
}
