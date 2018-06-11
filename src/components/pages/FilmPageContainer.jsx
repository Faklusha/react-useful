import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilmById, resetSelectedFilm } from '../../modules/films';
import FilmPage from './FilmPage';


@connect(({ state }) => ({
  selectedFilm: state.selectedFilm,
}), { dispatchFetchFilmById: fetchFilmById, dispatchResetSelectedFilm: resetSelectedFilm })


export default class FilmPageContainer extends Component {
  componentWillMount() {
    const { dispatchFetchFilmById, match: { params: { id } } } = this.props;
    dispatchFetchFilmById(id);
  }


  render() {
    const { selectedFilm, dispatchResetSelectedFilm } = this.props;
    return (<FilmPage selectedFilm={selectedFilm} resetSelectedFilm={dispatchResetSelectedFilm} />
    );
  }
}
