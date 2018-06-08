// @flow

import React from 'react';
import styles from './_film-description.css';

type Props = {
  selectedFilm: {
      title: string,
      overview : string,
      release_date: string,
      runtime: string,
      genres: string,
      poster_path: string,
  }
};

const FilmDescription = ({
  selectedFilm: {
    title,
    overview,
    release_date: releaseDate,
    runtime,
    genres,
    poster_path: posterPath,
  },
}: Props) => (
  <div className={styles.description__block}>
    <div className={styles.description__block_picture}>
      <img src={posterPath} alt="poster" />
    </div>
    <div className={styles.description__block_info}>
      <span className={styles.info__title}>{title}</span>
      <span className={styles.info__description}>{genres}</span>
      <div>
        <span className={styles.info__date}>{releaseDate}</span>
        <span className={styles.info__timeline}>{runtime}</span>
      </div>
      <span className={styles.info__description}>{overview}</span>
    </div>
  </div>
);

export default FilmDescription;
