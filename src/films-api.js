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
//popular(trending)
export const fetchTrendingFilms = async () => {
  const response = await axios.get("trending/movie/day", options);
  return response;
};
//search movie
export const searchMovie = async (value, page = 1) => {
  const response = await axios.get(`search/movie?page=1&query=${value}`, {
    ...options,
    params: {
      query: value,
      page: page,
    },
  });
  return response.data.results;
};
//details
export const fetchFilmDetails = async (id) => {
  const response = await axios.get(`movie/${id}`, options);
  return response.data;
};
//actors
export const fetchCast = async (id) => {
  const response = await axios.get(`movie/${id}/credits`, options);
  console.log(response);
  return response.data;
};
//reviews
export const fetchReviews = async (id) => {
  const response = await axios.get(`movie/${id}/reviews`, options);
  console.log(response);
  return response.data;
};
