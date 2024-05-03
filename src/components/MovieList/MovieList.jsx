import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  const defaultImg =
    "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
  return (
    <>
      <div className={css.wrapper}>
        <ul className={css.container}>
          {movies.map((movie) => (
            <li key={movie.id} className={css.item}>
              <Link to={`/movies/${movie.id}`} state={location}>
                {movie.backdrop_path && (
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : defaultImg
                    }
                    className={css.photo}
                    width="233px"
                    height="350px"
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
