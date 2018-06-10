import React, { Component } from 'react';
import styles from './_error-boundary.css';
import styled from 'styled-components';

export default class ErrorBoundary extends Component {
  state = {
    isErrorExisted: false,
  }

  componentDidCatch(error) {
    this.setState({ isErrorExisted: true });
    console.error(error); //eslint-disable-line
  }

    resetError = () => this.setState({ isErrorExisted: false });

    render() {
      const { isErrorExisted } = this.state;
      const { children } = this.props;
      const title = "We're sorry — something's gone wrong.";

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

      return isErrorExisted ?
        (
          <Error
          >
            <ErrorTitle
            >
              {title}
            </ErrorTitle>
            <ErrorLink //eslint-disable-line
              className={styles.error__link}
              onClick={this.resetError}
            >
              HIDE
            </ErrorLink>
          </Error>
        ) : children;
    }
}
