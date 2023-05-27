import React, { useEffect, useMemo, useState } from 'react';
import {useLocation, useSearchParams  } from 'react-router-dom';

import ErrorComponent from '../../components/Error/Error';
import LoaderComponent from '../../components/Loader';
import MoviesList from '../../components/MoviesList/MoviesList';
import apiService from '../../services/apiService';
import Status from '../../services/status';
import styles from './HomePage.module.css';
import { Pagination } from '@mui/material';


export default function Home  ()  {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState(Status.IDLE);
  const [totalPage, setTotalPage] = useState(0);
  const [searchParams , setSearchParams] = useSearchParams({ page: 1 });
  const location = useLocation();
  const params = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);
  const page = Number(params.page || 1);
 

  useEffect(() => {
    setStatus(Status.PENDING);
    apiService.getPopularMovies(page)
      .then(({ results, total_pages }) => {
        setMovies(results);
        setTotalPage(total_pages);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong. Please try again.');
        setStatus(Status.REJECTED);
      });
  }, [page]);

    function handlePage(event, page) {
   
     setSearchParams({ page });

  };
 

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Trending today</h1>

      {status === Status.PENDING && <LoaderComponent />}

      {status === Status.REJECTED && <ErrorComponent message={error.message} textError="Error" />}

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
          onChange={handlePage}
          page={Number(page)}
          showFirstButton
          showLastButton
          size="large"
        />
      )}
      </>
    )}
    </main>
  );
};

 