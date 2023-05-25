import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

import apiService from '../../services/apiService';
import { Pagination } from '@mui/material'; 
import Status from '../../services/status';
import LoaderComponent from '../../components/Loader';
import ErrorComponent from '../../components/Error';
import noPhoto from '../../img/no_image.jpg';
import SearchBar from '../../components/SearchBar';
import styles from './MoviesPage.module.css';

export const Movies  = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname: url } = location;
  const [query, setQuery] = useState('');
  const [totalPage, setTotalPage] = useState(0);
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const page = new URLSearchParams(location.search).get('page') ?? 1;

  useEffect(() => {
    if (location.search === '') {
      return;
    }

    const newSearch = new URLSearchParams(location.search).get('query');
    setQuery(newSearch, page);
  }, [location.search, page]);

  useEffect(() => {
    if (!query) return;
    setStatus(Status.PENDING);
    apiService
      .getMoviesByKeyWord(query, page)
      .then(({ results, total_pages }) => {
        if (results.length === 0) {
          setError(`No results to show for "${query}!"`);
          setStatus(Status.REJECTED);
          return;
        }
        setMovies(results);
        setTotalPage(total_pages);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
        setStatus(Status.REJECTED);
      });
  }, [query, page]);

  const searchImages = newSearch => {
    if (query === newSearch) return;
    setQuery(newSearch);
    setMovies(null);
    setError(null);
    setStatus(Status.IDLE);
    navigate({ ...location, search: `query=${newSearch}&page=1` });
  };

  const onHandlePage = (event, page) => {
    navigate({ ...location, search: `query=${query}&page=${page}` });
  };

  return (
    <>
      <SearchBar onHandleSubmit={searchImages} currQuery={query} />
      {status === Status.PENDING && <LoaderComponent />}
      {status === Status.REJECTED && (
        <ErrorComponent message={error} textError="Error" />
      )}
      {status === Status.RESOLVED && (
        <>
          <ul className={styles.moviesList}>
            {movies.map(movie => (
              <li key={movie.id} className={styles.moviesItem}>
                <NavLink
                  to={`${url}/${movie.id}`}
                  state={{ getBack: { ...location } }}
                  className={styles.link}
                >
                  <img
                    src={ movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`: noPhoto    }
                    alt={movie.title}
                    width="320"
                    className={styles.poster}
                  />
                  <p className={styles.movieTitle}>{movie.title}</p>
                </NavLink>
              </li>
            ))}
          </ul>
          {totalPage > 1 && (
            <Pagination
              className={styles.pagination}
              color='primary'
              count={totalPage}
              onChange={onHandlePage}
              page={Number(page)}
              showFirstButton
              showLastButton
              size="large"
            />
          )}
        </>
      )}
    </>
  );
}