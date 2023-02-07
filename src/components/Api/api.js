import axios from "axios";

const API_KEY = '209b988e1e5a3c54f84bfbe290fdf3e2';
axios.defaults.baseURL =`https://api.themoviedb.org/3`;
const baseURL = axios.defaults.baseURL

export const fetchPopular = async () => {
    const url = `${baseURL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const data = await axios.get(url);
  const movieList = await data.data.results;
  return movieList
};

export const findCast = async (moviesId) => {
  const url = `${baseURL}/movie/${moviesId}/credits?api_key=${API_KEY}&language=en-US`;
  const data = await axios.get(url);
  const castMovie = await data.data.cast;
  return castMovie;
};

export const findReview = async(moviesId) => {
  const url = `${baseURL}/movie/${moviesId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  const data = await axios.get(url);
  const reviewMovie = await data.data.results;
  return reviewMovie
};

export const findMoviesData = async (filter) => {
  const url = `${baseURL}/search/movie?api_key=${API_KEY}&language=en-US&query=${await filter}&page=1&include_adult=false`;
  const data = await axios.get(url);
  const movieFiltered = await data.data.results;
  return movieFiltered;
};

export const findDetails = async (moviesId) => {
  const url = `${baseURL}/movie/${moviesId}?api_key=${API_KEY}&language=en-US`;
  const data = await axios.get(url);
  const singleMovie = await data.data;
  return singleMovie
};