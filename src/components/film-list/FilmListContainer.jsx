import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilmList from './FilmList';

@connect(({ state }) => ({
  films: state.films,
}))
export default class FilmListContainer extends Component {
  render() {
    return (
      <FilmList
        films={this.props.films}
      />
    );
  }
}
