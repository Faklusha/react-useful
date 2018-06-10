import React, { Component } from 'react';
import { connect } from 'react-redux';
import DescriptionOptions from './DescriptionOptions';
import { changeSortField, fetchFilms } from '../../modules/films';

@connect(({state}) => ({
  sortField: state.sortField,
  searchField: state.searchField,
  searchValue: state.searchValue,
}), {dispatchChangeSortField: changeSortField, dispatchFetchFilms: fetchFilms})

export default class DescriptionOptionsContainer extends Component {

  render() {
    const {
      sortField,
      searchField,
      searchValue,
      dispatchFetchFilms,
      dispatchChangeSortField,
    } = this.props;
    return (
      <DescriptionOptions
        sortField={sortField}
        searchField={searchField}
        searchValue={searchValue}
        dispatchFetchFilms={dispatchFetchFilms}
        dispatchChangeSortField={dispatchChangeSortField}
      />
    );
  }
}

