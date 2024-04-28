import { useEffect, useState } from "react";
import { fetchTrendingFilms } from "../../films-api";

export default function Homepage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      try {
        const films = await fetchTrendingFilms({ page: 1 });
        setMovies(films.data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    }
    fetchFilms();
  }, []);
  return (
    <>
      <h3>TRANDING TODAY</h3>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.backdrop_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              />
            )}
            {movie.title}
          </li>
        ))}
      </ul>
    </>
  );
}
