import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovie } from "../../films-api";

export default function MoviesPage() {
  const [movies, setFilms] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [params] = useSearchParams();
  console.log(params);

  const handleSubmit = async (query) => {
    setSearchValue(query);
    setPage(1);
  };

  useEffect(() => {
    if (!searchValue) {
      return;
    }
    async function searchFilms() {
      try {
        const data = await searchMovie(searchValue, page);
        setFilms(data);
      } catch (error) {
        console.error(error.message);
      }
    }
    searchFilms();
  }, [searchValue, page]);
  return (
    <>
      <h4>Movies Page Test</h4>
      <SearchBar onSubmit={handleSubmit} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}
