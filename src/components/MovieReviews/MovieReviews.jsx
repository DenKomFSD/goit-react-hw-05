import { useParams } from "react-router-dom";
import { fetchReviews } from "../../films-api";
import { useEffect, useState } from "react";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getReview() {
      try {
        setLoading(true);
        const data = await fetchReviews(movieId);

        setReviews(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
        setError(false);
      }
    }
    getReview();
  }, [movieId]);
  console.log(reviews);
  return (
    <>
      {error && <NotFoundPage />}
      {loading && <Loader />}
      {reviews.length > 0 && (
        <ul className={css.container}>
          {reviews.map((review) => {
            return (
              <li className={css.item} key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
