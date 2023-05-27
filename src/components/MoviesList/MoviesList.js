import styles from './MoviesList.module.css';
import noPhoto from '../../img/no_image.jpg';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

export default function MoviesList({ movies, location }) {
  return (
    <ul className={styles.moviesList}>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id} className={styles.moviesItem}>
          <NavLink
            to={{ pathname: `/movies/${id}` }}
            state={{ getBack: { ...location } }}
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

// MoviesList.propTypes = {
//   movies: PropTypes.shape({
//     poster_path: PropTypes.string,
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired,
//   location: PropTypes.objectOf(PropTypes.object).isRequired,
// };
