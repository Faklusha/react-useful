import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilmListItem from './FilmListItem';
import styles from './_film-list.css';

@connect(({ state }) => ({
  films: state.films,
}))
export default class FilmList extends Component {
    renderFilms = () => {
      const { films } = this.props;
      if (!films || films.length === 0) {
        return (<span>No films found</span>);
      }
      return films.map(film => (
        <FilmListItem
          title={film.title}
          date={film.release_date}
          genre={film.genres.join(',')}
          id={film.id}
          path={film.poster_path}
        />
      ));
    };


    render() {
      return (
        <div className={styles['film-list']}>
          {this.renderFilms()}
        </div>
      );
    }
}
