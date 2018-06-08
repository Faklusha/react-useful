// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './_header.css';

type Props = {
    isFilmSelected: boolean,
    resetSelectedFilm: Function,
};

const Header = ({ isFilmSelected, resetSelectedFilm }: Props) => (
  <div className={styles.header}>
    <span className={styles['main-title']}>netflixroulette</span>
    {
      isFilmSelected &&
      <Link to={{ pathname: '/' }}>
        <div //eslint-disable-line
          onClick={() => resetSelectedFilm && resetSelectedFilm()}
          className={styles['search-button']}
        >
          SEARCH
        </div>
      </Link>
    }
  </div>
);

export default Header;
