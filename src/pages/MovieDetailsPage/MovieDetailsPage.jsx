import { Suspense, useEffect, useRef, useState } from "react";
import { fetchFilmDetails } from "../../films-api";

import Loader from "../../components/Loader/Loader";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import css from "./MoviesDetaisPage.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");
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
        toast.error("An error occurred while fetching movie details.");
      } finally {
        setLoading(false);
      }
    }
    fetchDetailes();
  }, [movieId]);

  if (loading || error || !movies) {
    return (
      <>
        {error && <NotFoundPage />}
        {loading && <Loader />}
      </>
    );
  }

  const userScore = Math.round(movies.vote_average * 10);
  const genres = movies.genres || [];
  return (
    <>
      {
        <div className={css.btn}>
          <Link to={backLinkRef.current}>Go back</Link>
        </div>
      }
      <section className={css.box}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
            alt=""
            width="250px"
            height="350px"
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
          <li className={css.btn}>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li className={css.btn}>
            <NavLink to="review">Review</NavLink>
          </li>
        </ul>
        <hr />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </section>
      <Toaster position="top-right" containerStyle={{ zIndex: 99999999 }} />
    </>
  );
}
