// @flow
import React from 'react';
import styled from 'styled-components';
import SORT_FIELDS from './consts';
import resolveUrl from '../../modules/actions/utils/resolveUrl';
import styles from './_description.css';

type Props = {
  sortField: string,
  searchField: string,
  searchValue: string,
  dispatchFetchFilms: Function,
  dispatchChangeSortField: Function,
}
const DescriptionOptions = (props: Props) => {
  const {
    sortField,
    searchField,
    searchValue,
    dispatchFetchFilms,
    dispatchChangeSortField,
  } = props;

  const Options = styled.div`
   display: flex;
  `;

  const ActiveOption = styled.div`
    margin: 0 10px;
    color: white;
  `;

  const Option = styled.div`
  margin: 0 10px;
    color: #E91E63;
`;

  const changeField = (value: string) => {
    if (sortField !== value) {
      const params = resolveUrl(searchValue, searchField, sortField);
      dispatchChangeSortField(value);
      dispatchFetchFilms(params);
    }
  };

  const resolveField = (value: string, title: string) => value === sortField //eslint-disable-line
    ? <ActiveOption className={styles['description-options__button--active']} onClick={() => changeField(value)}> {title} </ActiveOption>
    : <Option className={styles['description-options__button']} onClick={() => changeField(value)}> {title} </Option>;

  return (
    <Options>
      <span>Sort by</span>
      {resolveField(SORT_FIELDS.release.name, SORT_FIELDS.release.title)}
      {resolveField(SORT_FIELDS.raiting.name, SORT_FIELDS.raiting.title)}
    </Options>
  );
};

export default DescriptionOptions;
