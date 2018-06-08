import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeSearchValue, changeSearchField, fetchFilms } from '../../modules/films';
import SEARCH_FIELDS from './consts';
import resolveUrl from '../../modules/actions/utils/resolveUrl';
import maskUrl from '../../modules/actions/utils/maskUrl';
import styles from './_search.css';


@connect(({ state }) => ({
  searchValue: state.searchValue,
  searchField: state.searchField,
  sortField: state.sortField,
}), { dispatchFetchFilms: fetchFilms, dispatchChange: changeSearchValue, changeSearchField })
export default class Search extends Component {
    changeValue = (value) => {
      const { dispatchChange } = this.props;
      dispatchChange(value);
    };

    changeField = (value) => {
      const { searchField, dispatchChange } = this.props;
      if (searchField !== value) {
        dispatchChange(value);
      }
    };

  resolveFieldClassName = (value) => {
    const { searchField } = this.props;
    return value === searchField ? styles['search__options_button--active']
      : styles.search__options_button;
  };

  searchFilms = () => {
    const {
      searchValue,
      searchField,
      sortField,
      dispatchFetchFilms,
    } = this.props;
    const params = resolveUrl(searchValue, searchField, sortField);
    dispatchFetchFilms(params);
  }

  render() {
    const { searchValue, searchField, sortField } = this.props;
    const params = maskUrl(searchValue, searchField, sortField);
    return (
      <div className={styles.search}>
        <span className={styles.search__title}>FIND YOUR MOVIE</span>
        <input
          type="text"
          className={styles.search__input}
          onChange={e => this.changeValue(e.target.value)}
          value={searchValue}
        />
        <div className={styles.search__options}>
          <div>
            <span className={styles.search__options_title}>SEARCH BY</span>
            <div //eslint-disable-line
              className={this.resolveFieldClassName(SEARCH_FIELDS.title.name)}
              onClick={() => this.changeField(SEARCH_FIELDS.title.name)}
            >
              {SEARCH_FIELDS.title.title}
            </div>
            <div //eslint-disable-line
              className={this.resolveFieldClassName(SEARCH_FIELDS.genre.name)}
              onClick={() => this.changeField(SEARCH_FIELDS.genre.name)}
            >
              {SEARCH_FIELDS.genre.title}
            </div>
          </div>
          <Link to={{ pathname: `/search/movies?${params}` }}>
            <div //eslint-disable-line
              onClick={this.searchFilms}
              className={styles['search-button']}
            >
              SEARCH
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
