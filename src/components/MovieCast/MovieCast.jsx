import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "../../films-api";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Loader from "../Loader/Loader";

export default function MovieCast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getDetails() {
      try {
        setLoading(true);
        const data = await fetchCast(movieId);

        setActors(data.cast);

        // console.log(actors);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
        setError(false);
      }
    }
    getDetails();
  }, [movieId]);
  return (
    <>
      {error && <NotFoundPage />}
      {loading && <Loader />}
      {actors.length > 0 && (
        <ul>
          {actors.map((actor) => {
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt=""
              />
              <div>
                <p>{actor.name}</p>
              </div>
            </li>;
          })}
        </ul>
      )}
    </>
  );
}
