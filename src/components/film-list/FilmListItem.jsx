import React from 'react';
import { Link } from 'react-router-dom';
import styles from './_film-list.css';

type Props = {
  title: string,
  id: string,
  date: string,
  genre: string,
  path: string,
};

const FilmListItem = ({
  title,
  id,
  date,
  genre,
  path,
}: Props) => (
  <Link to={{ pathname: `/film/${id}` }}>
    <div className={styles['film-list__item']}>
      <div className={styles.description__block_picture}>
        <img src={path} alt="item" />
      </div>
      <div className={styles['film-list__item_info']}>
        <span className={styles.item__title}>{title}</span>
        <span className={styles.item__date}>{date}</span>
        <span className={styles.item__category}>{genre}</span>
      </div>
    </div>
  </Link>
);

export default FilmListItem;
