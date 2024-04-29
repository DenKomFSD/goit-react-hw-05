import { useEffect, useState } from "react";
import { fetchFilmDetails } from "../../films-api";

import Loader from "../../components/Loader/Loader";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { useParams } from "react-router-dom";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchDetailes() {
      try {
        setLoading(true);
        const details = await fetchFilmDetails({ id: movieId });
        setMovie(details);
      } catch (error) {
        setErr(true);
      } finally {
        setLoading(false);
        setErr(false);
      }
    }
    fetchDetailes();
  }, [movieId]);
  return (
    <>
      {err && <NotFoundPage />}
      {loading && <Loader />}
      <h3>Details {movieId} </h3>
    </>
  );
}
