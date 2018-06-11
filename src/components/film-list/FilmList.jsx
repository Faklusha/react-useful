// @flow
import React from 'react';
import styled from 'styled-components';
import FilmListItem from './FilmListItem';

type Props = {films: Array<Object>};

const List = styled.div`
    display: flex;
    background-color: white;
    height: 635px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 15px;
    overflow: auto;
`;

const FilmList = (props: Props) => {
  const { films } = props;
  const renderFilms = () => {
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

  return (
    <List>
      {renderFilms()}
    </List>
  );
};

export default FilmList;
