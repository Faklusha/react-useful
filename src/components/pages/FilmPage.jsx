// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import FilmDescription from '../film-description/FilmDescription';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import { fetchFilmById, resetSelectedFilm } from '../../modules/films';
import styles from './_page.css';

@connect(({ state }) => ({
  selectedFilm: state.selectedFilm,
}), { dispatchFetchFilmById: fetchFilmById, dispatchResetSelectedFilm: resetSelectedFilm })

export default class FilmPage extends Component {
  componentWillMount() {
    type Props = {
        dispatchFetchFilmById: Function,
        match: {
            params: {
            id: string,
          }
        }
    }
    const { dispatchFetchFilmById, match: { params: { id } } }: Props = this.props;
    dispatchFetchFilmById(id);
  }

    resetFilm = () => {
      type Props = { dispatchResetSelectedFilm: Function };
      const { dispatchResetSelectedFilm }: Props = this.props;
      dispatchResetSelectedFilm();
    }

    render() {
      type Props = { selectedFilm: Object };
      const { selectedFilm }: Props = this.props;

      return (
        <div className={styles.page}>
          <ErrorBoundary>
            <Header isFilmSelected />
            {selectedFilm && <FilmDescription selectedFilm={selectedFilm} />}
            <Footer />
          </ErrorBoundary>
        </div>
      );
    }
}
