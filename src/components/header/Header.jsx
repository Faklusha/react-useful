// @flow

import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import styles from './_header.css';


type Props = {
    isFilmSelected ?: boolean, //eslint-disable-line
    resetSelectedFilm ?: Function, //eslint-disable-line
};

const HeaderItem = styled.div`
    height: 40px;
    background-color: #131306;
    display: -ms-flexbox;
    display: flex;
    padding: 0 15px;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.div`
   color: #E91E63;
    font-size: 20px;
    font-weight: 700;
    padding: 15px;
`;

const Button = styled.div`
    background-color: #E91E63;
    padding: 5px 40px;
    font-size: 15px;
    font-weight: 700;
    color: white;
`;

const Header = (props: Props) => {
  const { isFilmSelected, resetSelectedFilm } = props;
  return (
    <HeaderItem>
      <Title>netflixroulette</Title>
      {
        isFilmSelected &&
        <Link to={{ pathname: '/' }}>
          <Button //eslint-disable-line
            onClick={() => resetSelectedFilm && resetSelectedFilm()}
            className={styles['search-button']}
          >
            SEARCH
          </Button>
        </Link>
      }
    </HeaderItem>
  );
};

export default Header;
