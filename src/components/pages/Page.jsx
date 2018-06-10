// @flow
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SearchContainer from '../search/SearchContainer';
import Description from '../description/Description';
import FilmListContainer from '../film-list/FilmListContainer';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import styled from 'styled-components';

type Props = {films: Array<Object>};

const StyledPage = styled.div`
      width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    background-color: black;
`;

const Page = (props: Props) => {
    const { films } = props;
    return (
      <StyledPage>
        <ErrorBoundary>
          <Header isFilmSelected={false} />
          <SearchContainer />
          <Description isShownOptions count={films ? films.length || films.size : 0} />
          <FilmListContainer />
          <Footer />
        </ErrorBoundary>
      </StyledPage>
    );
  }

  export default Page;