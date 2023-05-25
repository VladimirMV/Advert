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
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [backLocation, setBackLocation] = useState(null);
  const location = useLocation();

  if (location.state && location.state.getBack && !backLocation) {
    setBackLocation({ ...location.state.getBack });
  }

  useEffect(() => {
    setStatus(Status.PENDING);
    apiService
      .getMovieById(movieId)
      .then(data => {
        if (!data) {
          setError('Not found');
          setStatus(Status.REJECTED);
          return;
        }
        setMovie(data);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong. Please try again.');
        setStatus(Status.REJECTED);
      });
  }, [movieId, error]);

 
  const onGoBack = () => {
    
    navigate(backLocation);
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
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Cast
            </NavLink>

            <NavLink
              to="reviews"
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



