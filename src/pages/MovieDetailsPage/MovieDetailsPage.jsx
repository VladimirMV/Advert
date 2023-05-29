import { useState, useEffect, Suspense } from 'react';
import {
  NavLink,
  useParams,
  useNavigate,
  Outlet,
  useLocation,
} from 'react-router-dom';

import apiService from '../../services/apiService';
import Status from '../../services/status';
import LoaderComponent from '../../components/Loader';
import ErrorComponent from '../../components/Error';
import noPhoto from '../../img/no_image.jpg';
import styles from './MovieDetailsPage.module.css';

export default function  MovieDetailsPage   ()   {
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const [status, setStatus] = useState(Status.IDLE);
  const location = useLocation();

  const goBack = location.state?.from || "/";
  

  useEffect(() => {
    setStatus(Status.PENDING);
    apiService
      .getMovieById(movieId)
      .then(data => {
        setMovie(data);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

 
  const onGoBack = () => { 
    navigate(goBack);
  };

  return (
    <>
      {status === Status.PENDING && <LoaderComponent />}
      {status !== Status.PENDING && (
        <button type="button" className={styles.button} onClick={onGoBack}>
          &#8656;&ensp; Go back
        </button>
      )}

      {status === Status.REJECTED && <ErrorComponent textError="ERROR" />}

      {status === Status.RESOLVED && (
        <>
          <div className={styles.movies}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : noPhoto
              }
              alt={movie.title}
              width="250"
            />
            <div className={styles.about}>
              <h1 className={styles.mainTitle}>{movie.title} </h1>
              <p className={styles.score}>
                User Score: {(movie.vote_average * 10).toFixed(0)}%
              </p>
              <h3 className={styles.title}>
                Overview
                <span className={styles.description}>{movie.overview}</span>
              </h3>
              <h3 className={styles.title}>
                Release Date
                <span className={styles.description}>{movie.release_date}</span>
              </h3>
              {movie.genres && (
                <>
                  <h3 className={styles.title}>Genres</h3>
                  <ul className={styles.genre}>
                    {movie.genres.map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          <nav className={styles.navigation}>
            <p className={styles.information}>Additional information</p>

            <NavLink
              to="cast"
             state={location.state}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Cast
            </NavLink>

            <NavLink
              to="reviews"
              state={location.state}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
                
              }
            >
              Reviews
            </NavLink>
          </nav>

          <Suspense fallback={<LoaderComponent />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}



