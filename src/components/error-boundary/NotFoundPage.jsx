import React from 'react';
import { Link } from 'react-router-dom';
import styles from './_error-boundary.css';

const NotFoundPage = () => (
  <div className={styles.error}>
    <span className={styles.error__title}>Such page was not found =(</span>
    <Link to={{ pathname: '/' }}>
      <span
        className={styles.error__link}
      >
       HIDE
      </span>
    </Link>
  </div>
);

export default NotFoundPage;
