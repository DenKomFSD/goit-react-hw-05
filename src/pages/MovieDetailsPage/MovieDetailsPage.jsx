import { useEffect, useState } from "react";
import { fetchFilmDetails } from "../../films-api";

import Loader from "../../components/Loader/Loader";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { Link, Outlet, useParams } from "react-router-dom";
import css from "./MoviesDetaisPage.module.css";

export default function MovieDetailsPage() {
  const [movies, setMovie] = useState([]);
  const [error, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchDetailes() {
      try {
        setLoading(true);
        const data = await fetchFilmDetails(movieId);
        setMovie(data);
      } catch (error) {
        setErr(true);
      } finally {
        setLoading(false);
        setErr(false);
      }
    }
    fetchDetailes();
  }, [movieId]);

  const userScore = Math.round(movies.vote_average * 10);
  const genres = movies.genres || [];
  return (
    <>
      {<button className={css.btn}>go back</button>}
      <section className={css.box}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
            alt=""
            width="350px"
            height="500px"
          />
        </div>
        <div className={css.info}>
          <h3>{movies.title}</h3>
          <p>User score: {userScore}%</p>
          <h4>Overview</h4>
          <p>{movies.overview}</p>
          <h5>Genres</h5>
          <p>{genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </section>
      <hr />
      <section>
        <ul className={css.nav}>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="review">Review</Link>
          </li>
        </ul>
        <Outlet />
      </section>
      {error && <NotFoundPage />}
      {loading && <Loader />}
    </>
  );
}
