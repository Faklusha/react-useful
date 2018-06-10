// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import SEARCH_FIELDS from './consts';
import resolveUrl from '../../modules/actions/utils/resolveUrl';
import maskUrl from '../../modules/actions/utils/maskUrl';
import styles from './_search.css';
import styled from 'styled-components';

type Props = {
  dispatchChange: Function,
  searchField: string,
  searchValue: string,
  sortField: string,
  dispatchFetchFilms: Function,
  dispatchChangeSearchField: Function,
};

const SearchItem = styled.div`
    background-color: black;
    height: 150px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Options = styled.div`
    color: white;
    font-size: 15px;
    display: flex;
    font-weight: 500;
    margin: 10px 0;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.span`
    color: white;
    font-size: 20px;
    display: block;
    font-weight: 500;
    margin: 10px 0;
`;

const Button = styled.div`
     background-color: #E91E63;
  padding: 5px 40px;
  font-size: 15px;
  font-weight: 700;
  color: white;
`;

const Search = (props: Props) => {
  const {
    dispatchChange,
    dispatchFetchFilms,
    searchField,
    searchValue,
    sortField,
    dispatchChangeSearchField,
  } = props;

  const changeValue = (value) => {
    dispatchChange(value);
  };

  const changeField = (value) => {
    if (searchField !== value) {
      dispatchChangeSearchField(value);
    }
  };

  const resolveFieldClassName = (value) => { //eslint-disable-line
    return value === searchField ? styles['search__options_button--active']
      : styles.search__options_button;
  };

  const searchFilms = () => {
    const params = resolveUrl(searchValue, searchField, sortField);
    dispatchFetchFilms(params);
  };

  const params = maskUrl(searchValue, searchField, sortField);
  return (
    <SearchItem>
      <Title>FIND YOUR MOVIE</Title>
      <input
        type="text"
        className={styles.search__input}
        onChange={e => changeValue(e.target.value)}
        value={searchValue}
      />
      <Options>
        <div>
          <span>SEARCH BY</span>
          <div //eslint-disable-line
            className={resolveFieldClassName(SEARCH_FIELDS.title.name)}
            onClick={() => changeField(SEARCH_FIELDS.title.name)}
          >
            {SEARCH_FIELDS.title.title}
          </div>
          <div //eslint-disable-line
            className={resolveFieldClassName(SEARCH_FIELDS.genre.name)}
            onClick={() => changeField(SEARCH_FIELDS.genre.name)}
          >
            {SEARCH_FIELDS.genre.title}
          </div>
        </div>
        <Link to={{ pathname: `/search/movies?${params}` }}>
          <Button //eslint-disable-line
            onClick={searchFilms}
            className={styles['search-button']}
          >
            SEARCH
          </Button>
        </Link>
      </Options>
    </SearchItem>
  );
};

export default Search;
