import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Search from '../search/Search';
import Description from '../description/Description';
import FilmList from '../film-list/FilmList';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import { fetchFilms } from '../../modules/films';
import styles from './_page.css';

@connect(({ state }) => ({
  films: state.films,
}), { dispatchFetchFilms: fetchFilms })
export default class Page extends Component {
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
    const { films } = this.props;
    return (
      <div className={styles.page}>
        <ErrorBoundary>
          <Header />
          <Search />
          <Description isShownOptions count={films ? films.length : 0} />
          <FilmList />
          <Footer />
        </ErrorBoundary>
      </div>
    );
  }
}
