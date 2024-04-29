import { useEffect, useState } from "react";
import { fetchFilmDetails } from "../../films-api";

import Loader from "../../components/Loader/Loader";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { useParams } from "react-router-dom";

export default function MovieDetailsPage() {
  const [movies, setMovie] = useState(null);
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
  return (
    <>
      {error && <NotFoundPage />}
      {loading && <Loader />}
      <p>{movies.data.overview}</p>
    </>
  );
}
