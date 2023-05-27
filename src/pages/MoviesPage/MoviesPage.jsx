import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import apiService from '../../services/apiService';
import { Pagination } from '@mui/material'; 
import Status from '../../services/status';
import LoaderComponent from '../../components/Loader';
import ErrorComponent from '../../components/Error';
import SearchBar from '../../components/SearchBar';
import styles from './MoviesPage.module.css';
import MoviesList from '../../components/MoviesList/MoviesList';

export default function  Movies  ()  {

  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [totalPage, setTotalPage] = useState(0);
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const page = new URLSearchParams(location.search).get('page') ?? 1;

  useEffect(() => {
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
          <MoviesList
          movies={movies}
          location={location}
        /> 
          
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