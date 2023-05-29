import styles from './MoviesList.module.css';
import noPhoto from '../../img/no_image.jpg';
import { NavLink } from 'react-router-dom';

export default function MoviesList({ movies, location }) {
  return (
    <ul className={styles.moviesList}>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id} className={styles.moviesItem}>
          <NavLink
            to={{ pathname: `/movies/${id}` }}
            state={{ from: { ...location } }}
            className={styles.link}
          >
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : noPhoto
              }
              alt={title}
              className={styles.poster}
            />
            <span className={styles.movieTitle}>{title}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
