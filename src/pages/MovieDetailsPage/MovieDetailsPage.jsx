import { useEffect, useState } from "react";
import { fetchFilmDetails } from "../../films-api";

import Loader from "../../components/Loader/Loader";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { useParams } from "react-router-dom";
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
        console.log(data);
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
      <section className={css.box}>
        <div>
          {<button>go back</button>}
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
        <hr />
      </section>
      {error && <NotFoundPage />}
      {loading && <Loader />}
    </>
  );
}
