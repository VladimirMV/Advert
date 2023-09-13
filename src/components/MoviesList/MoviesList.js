import styles from './MoviesList.module.css';
import noPhoto from '../../img/no_image.jpg';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CardItem } from 'components';
// import { CatigoryList } from './CategoryRecipesList.styled';

export default function MoviesList({ movies, location }) {
  console.log('MoviesList', movies);
  return (
    <ul className={styles.moviesList}>
      {movies.map(data => (
        <li key={data.id} className={styles.moviesItem}>


    <CardItem   data={data} />
          {/* <NavLink
            to={{ pathname: `/movies/${id}` }}
            state={{ from: { ...location } }}
            className={styles.link}
          >
            <img
              src={img ? `${img}`: noPhoto }
              alt={title}
              className={styles.poster}
            />
            <span className={styles.movieTitle}>{title}</span>
          </NavLink> */}


        </li>
      ))}
    </ul>
  );
}
MoviesList.propTypes = {
  data: PropTypes.array,
};