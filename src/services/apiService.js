import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: process.env.REACT_APP_TMDB_API_KEY,
  language: 'en-US',
};

async function getPopularMovies(page) {
  const config = {
    url: `trending/movie/day`,
    params: {
      page,
    },
  };
  const { data } = await axios(config, page);
  return data;
}

async function getMoviesByKeyWord(query, page) {
  const config = {
    url: `search/movie`,
    params: {
      query,
      page,
    },
  };
  const { data } = await axios(config, query, page);
  return data;
}

async function getMovieById(id) {
  const config = {
    url: `movie/${id}`,
  };
  const { data } = await axios(config, id);
  return data;
}

async function getCastInfo(id) {
  const config = {
    url: `movie/${id}/credits`,
  };
  const { data } = await axios(config, id);
  return data.cast;
}

async function getMovieReview(id) {
  const config = {
    url: `movie/${id}/reviews`,
  };
  const { data } = await axios(config, id);
  return data.results;
}

const apiService = {
  getPopularMovies,
  getMoviesByKeyWord,
  getMovieById,
  getCastInfo,
  getMovieReview,
};

export default apiService;
