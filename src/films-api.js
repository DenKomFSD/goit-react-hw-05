import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGI0MmQyOGQ2ZWE3ZWUxYTNiODhjNzZlMzA1NzQwMiIsInN1YiI6IjY2MmQwYjNmNjBjNzUxMDEyNjY0NmY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s9Tx9-hLTEaW93DXdMCezJM2KgAwgbXXd7ZREl4fXVE",
  },
};

export const fetchTrendingFilms = async ({ page }) => {
  const response = await axios.get(`trending/movie/week?page=${page}`, {
    ...options,
    params: { page: page },
  });
  return response;
};
