// @flow
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import FilmDescription from '../film-description/FilmDescription';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import styled from 'styled-components';

type Props = {selectedFilm: Object, resetSelectedFilm: Function};
const Page = styled.div`
      width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    background-color: black;
`;

const FilmPage = (props: Props) => {
  const { selectedFilm, resetSelectedFilm } = props;
  return (
  <Page>
    <ErrorBoundary>
      <Header isFilmSelected resetSelectedFilm={resetSelectedFilm} />
      {selectedFilm && <FilmDescription selectedFilm={selectedFilm} />}
      <Footer />
    </ErrorBoundary>
  </Page>
)
};

export default FilmPage;