import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "../../films-api";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Loader from "../Loader/Loader";
import css from "../MovieCast/MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const defaultImg =
    "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg";
  useEffect(() => {
    async function getDetails() {
      try {
        setLoading(true);
        const data = await fetchCast(movieId);
        setActors(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getDetails();
  }, [movieId]);

  return (
    <>
      {error && <NotFoundPage />}
      {loading && <Loader />}
      {actors.length > 0 && (
        <ul className={css.box}>
          {actors.map((actor) => {
            return (
              <li key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                      : defaultImg
                  }
                  alt=""
                  width="190px"
                />
                <div>
                  <p>{actor.name}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
