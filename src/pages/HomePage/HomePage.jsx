import React, { useEffect, useMemo, useState } from 'react';
import {NavLink, useLocation, useSearchParams,useNavigate } from 'react-router-dom';

import ErrorComponent from '../../components/Error/Error';
import LoaderComponent from '../../components/Loader';
import apiService from '../../services/apiService';
import Status from '../../services/status';
import styles from './HomePage.module.css';
import noPhoto from '../../img/no_image.jpg';
import { Pagination } from '@mui/material';


export default function Home  ()  {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState(Status.IDLE);
  const [totalPage, setTotalPage] = useState(0);
  const [searchParams , setSearchParams] = useSearchParams({ page: 1 });
  const navigate = useNavigate();
  const location = useLocation();
  const params = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);
  const page = Number(params.page || 1);

  function handleSetSearchParams (page) {
    setSearchParams({ page });
  }

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
   
      handleSetSearchParams(page);
     
    navigate({ ...location, search: `page=${page}` });
  };
 

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Trending today</h1>

      {status === Status.PENDING && <LoaderComponent />}

      {status === Status.REJECTED && <ErrorComponent message={error.message} textError="Error" />}

      {status === Status.RESOLVED && (
      <>
        <ul className={styles.moviesList}>
          {movies.map(({id, poster_path, title}) => (
            <li key={id} className={styles.moviesItem}> 
              
              
              <NavLink to={{ pathname: `/movies/${id}` }}
                 state={{ getBack: { ...location } }}
                className={styles.link}>
                <img
                  src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : noPhoto}
                  alt={title}
                  className={styles.poster}
                />
              <span className={styles.movieTitle}>{title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
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

 