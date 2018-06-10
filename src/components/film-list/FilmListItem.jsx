// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  title: string,
  id: string,
  date: string,
  genre: string,
  path: string,
};

const ListItem = styled.div`
    display: flex;
    width: 200px;
    flex-direction: column;
    height: 360px;
    margin: 10px;
    cursor: pointer;
`;

const Picture = styled.div`
 width: 100%;
    height: 85%;
    background-color: teal;
`;

const Info = styled.div`
       margin: 10px;
    width: 100%;
`;

const Date = styled.span`
      display: inline-block;
    padding: 0 5px;
    float: right;
    border: 1px solid black;
    font-size: 10px;
`;

const Category = styled.span`
       font-size: 11px;
    display: block;
`;

const Image = styled.img`
     height: 100%;
    width: auto;
`;

const FilmListItem = (props: Props) => {
  const {
    title,
      id,
      date,
      genre,
      path,
  } = props;
  return (
    <Link to={{ pathname: `/film/${id}` }}>
      <ListItem>
        <Picture>
          <Image src={path} alt="item" />
        </Picture>
        <Info>
          <span>{title}</span>
          <Date>{date}</Date>
          <Category>{genre}</Category>
        </Info>
      </ListItem>
    </Link>
  );
}

export default FilmListItem;
