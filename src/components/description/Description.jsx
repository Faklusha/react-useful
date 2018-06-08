// @flow

import React from 'react';
import DescriptionOptions from './DescriptionOptions';
import styles from './_description.css';

type Props = {
    isShownOptions: boolean,
    count: number
};

const Description = ({ isShownOptions, count }: Props) => (
  <div className={styles.description}>
    <span className={styles.description__title}>{count} items found</span>
    {isShownOptions && <DescriptionOptions />}
  </div>
);
export default Description;
