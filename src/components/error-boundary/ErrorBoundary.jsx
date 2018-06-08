import React, { Component } from 'react';
import styles from './_error-boundary.css';

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
      return isErrorExisted ?
        (
          <div
            className={styles.error}
          >
            <span
              className={styles.error__title}
            >
              {title}
            </span>
            <span //eslint-disable-line
              className={styles.error__link}
              onClick={this.resetError}
            >
              HIDE
            </span>
          </div>
        ) : children;
    }
}
