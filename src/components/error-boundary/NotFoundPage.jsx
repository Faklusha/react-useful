import React from 'react';
import { Link } from 'react-router-dom';
import styles from './_error-boundary.css';
import styled from 'styled-components';

const Error = styled.div`
  position: absolute;
    z-index: 2;
    height: 100%;
    width: 100%;
    display: flex;
    background-color: black;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
const ErrorTitle = styled.span`
   font-size: 20px;
    color: white;
    font-weight: 700;
    padding: 10px;
`;

const ErrorLink = styled.span`
    font-size: 15px;
    color: white;
    font-weight: 700;
    padding: 10px;
    text-decoration: underline;
`;

const NotFoundPage = () => (
  <Error>
    <ErrorTitle>Such page was not found =(</ErrorTitle>
    <Link to={{ pathname: '/' }}>
      <ErrorLink
        className={styles.error__link}
      >
       HIDE
      </ErrorLink>
    </Link>
  </Error>
);

export default NotFoundPage;
