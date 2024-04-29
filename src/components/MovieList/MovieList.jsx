import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <>
      <div className={css.wrapper}>
        <ul className={css.container}>
          {movies.map((movie) => (
            <li key={movie.id} className={css.item}>
              <Link to={`/movies/${movie.id}`}>
                {movie.backdrop_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    className={css.photo}
                  />
                )}
                <p className={css.title}>{movie.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
