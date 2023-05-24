import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default function SearchBar({ onHandleSubmit, currQuery }) {
  const [query, setQuery] = useState('');
  const [done, setDone] = useState(false);

  const handleChangeQuery = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.info('Please enter your query!');
      return;
    }

    onHandleSubmit(query);
  };

  if (currQuery && !query && !done) {
    setQuery(currQuery);
    setDone(true);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={query}
        autoComplete="off"
        autoFocus
        placeholder="Enter movie name..."
        onChange={handleChangeQuery}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
      <ToastContainer />
    </form>
  );
}

SearchBar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
  currQuery: PropTypes.string,
};
