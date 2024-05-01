import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function MoviesPage() {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [params, setParams] = useSearchParams();
  console.log(params);
  useEffect(() => {}, []);

  return (
    <>
      <h4>Movies Page Test</h4>
      <SearchBar onSubmit={handleSubmit} />
    </>
  );
}
