import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilms } from '../../modules/films';
import Page from './Page';

@connect(({ state }) => ({
  films: state.films,
}), { dispatchFetchFilms: fetchFilms })

export default class PageContainer extends Component {
  componentWillMount() {
    const { match: { params: { search } }, location, dispatchFetchFilms } = this.props;
    if (search || location.search) {
      const searchString = location.search || search;
      const splittedSearch = searchString.split('?');
      const params = splittedSearch.length ? splittedSearch[1] : null;
      if (params) {
        dispatchFetchFilms(params);
      }
    }
  }

  render() {
    return (
      <Page films={this.props.films} />
    );
  }
}
