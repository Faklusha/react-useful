// @flow

import React from 'react';
import styled from 'styled-components';

type Props = {
  selectedFilm: {
    title: string,
    overview: string,
    release_date: string,
    runtime: string,
    genres: string,
    poster_path: string,
  }
};

const Description = styled.div`
   background-color: currentColor;
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
`;
const Picture = styled.div`
   width: 200px;
    height: 300px;
`;

const Info = styled.div`
   display: flex;
    flex-direction: column;
    margin: 0 15px;
    height: 300px;
    justify-content: space-around;
    color: white;
`;

const Title = styled.span`
    font-size: 25px;
    font-weight: 700;
    color: #E91E63;
`;

const Timeline = styled.span`
     margin-left: 20px;
`;

const Image = styled.img`
     height: 100%;
    width: auto;
`;

const FilmDescription = (props: Props) => {
  const {
    selectedFilm: {
      title,
      overview,
      release_date: releaseDate,
      runtime,
      genres,
      poster_path: posterPath,
    },
  } = props;
  return (
    <Description>
      <Picture>
        <Image src={posterPath} alt="poster"/>
      </Picture>
      <Info>
        <Title>{title}</Title>
        <span>{genres}</span>
        <div>
          <span>{releaseDate}</span>
          <Timeline>{runtime}</Timeline>
        </div>
        <span>{overview}</span>
      </Info>
    </Description>
  );
}

export default FilmDescription;
