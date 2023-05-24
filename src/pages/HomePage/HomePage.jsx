 
import React, { useEffect, useMemo, useState } from 'react';
import {Link, useLocation, useSearchParams } from 'react-router-dom';
 
import ErrorComponent from '../../components/Error/Error';
import LoaderComponent from '../../components/Loader';
import apiService from '../../services/apiService';
import Status from '../../services/status';
import styles from './HomePage.module.css';
import noPhoto from '../../img/no_image.jpg';

 

export const Home = () => {
    const [movies, setMovies] = useState([]);
      
    const [error, setError] = useState(false);
    const [status, setStatus] = useState(Status.IDLE);
    const [totalPage, setTotalPage] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
 
    const params = useMemo(
        () => Object.fromEntries([...searchParams]),
        [searchParams]
    );
    const page = Number(params.page || 1);
    const location = useLocation();
    // get popular movies
    useEffect(() => {
    setStatus(Status.PENDING);
    apiService
      .getPopularMovies(page)
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

 return (
    <main className={styles.main}>
      <h1 className={styles.title}>Trending today</h1>

      {status === Status.PENDING && <LoaderComponent />}

      {status === Status.REJECTED && <ErrorComponent message={error.message} textError="Error" />}

      {status === Status.RESOLVED && (
        <>
          <ul className={styles.moviesList}>
            {movies.map(movie => (
              <li key={movie.id} className={styles.moviesItem}>
                <Link
                  to={`/movies/${movie.id}`}
                  className={styles.link}
                  state={{ getBack: {...location} }}
                >
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : noPhoto
                    }
                    alt={movie.title}
                    className={styles.poster}
                  />
                  <span className={styles.movieTitle}>{movie.title}</span>
                </Link>
                
              </li>
            ))}
          </ul>
          {/* {totalPage > 1 && (
            <Pagination
              className={classes.root}
              count={totalPage}
              onChange={onHandlePage}
              page={Number(page)}
              showFirstButton
              showLastButton
              size="large"
            />
          )} */}
        </>
      )}
    </main>
  );


};

 