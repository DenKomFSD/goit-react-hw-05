import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovie } from "../../films-api";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function MoviesPage() {
  const [movies, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [params, setParams] = useSearchParams();
  const userParams = params.get("query") ?? "";

  const handleSubmit = (newSearch) => {
    params.set("query", newSearch);
    setParams(params);
  };

  useEffect(() => {
    if (!userParams) {
      setFilms([]);
      return;
    }
    async function searchFilms() {
      try {
        setLoading(true);
        const data = await searchMovie(userParams);
        setFilms(data);
        setError(false);
        if (data.length === 0) {
          toast("No movies found", { icon: "🎬" });
        }
      } catch (error) {
        setError(true);
        toast.error("An error occurred while searching.", {
          style: {
            color: "#ffffff",
            backgroundColor: "red",
          },
        });
      } finally {
        setLoading(false);
      }
    }
    searchFilms();
  }, [userParams]);

  return (
    <>
      <SearchBar value={userParams} onFilter={handleSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieList movies={movies} />}
      <Toaster position="top-right" containerStyle={{ zIndex: 99999999 }} />
    </>
  );
}
