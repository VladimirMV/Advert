import styles from './AdvertList.module.css';
import PropTypes from 'prop-types';
import { CardItem } from 'components';

export default function AdvertList({ adverts, location }) {
  return (
    <ul className={styles.advertList}>
      {adverts.map(data => (
        <li key={data.id} className={styles.advertItem}>


    <CardItem   data={data} />
        
        </li>
      ))}
    </ul>
  );
}
AdvertList.propTypes = {
  data: PropTypes.array,
};