import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSearchValue, changeSearchField, fetchFilms } from '../../modules/films';
import Search from './Search';


@connect(({ state }) => ({
  searchValue: state.searchValue,
  searchField: state.searchField,
  sortField: state.sortField,
}), {
  dispatchFetchFilms: fetchFilms,
  dispatchChange: changeSearchValue,
  dispatchChangeSearchField: changeSearchField,
})

export default class SearchContainer extends Component {
  render() {
    const {
      dispatchChangeSearchField,
      dispatchChange,
      dispatchFetchFilms,
      searchField,
      searchValue,
      sortField,
    } = this.props;
    return (
      <Search
        dispatchChange={dispatchChange}
        dispatchFetchFilms={dispatchFetchFilms}
        searchField={searchField}
        searchValue={searchValue}
        sortField={sortField}
        dispatchChangeSearchField={dispatchChangeSearchField}
      />
    );
  }
}
