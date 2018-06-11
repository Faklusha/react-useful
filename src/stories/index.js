import React from 'react';

import { storiesOf } from '@storybook/react';

import Footer from '../components/footer/Footer';
import FilmDescription from '../components/film-description/FilmDescription';


storiesOf('Footer', module)
  .add('Footer', () => (
    <Footer />
  ));


const selectedFilm = {
  title: 'title',
  overview: 'overview',
  release_date: 'release_date',
  runtime: 'runtime',
  genres: 'genres',
  poster_path: 'poster_path',
};

storiesOf('FilmDescription', module)
  .add('FilmDescription', () => (
    <FilmDescription selectedFilm={selectedFilm} />
  ));
