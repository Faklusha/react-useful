import React from 'react';
import 'isomorphic-fetch';
import 'babel-polyfill';

import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Page from './components/pages/PageContainer';
import FilmPage from './components/pages/FilmPageContainer';
import NotFoundPage from './components/error-boundary/NotFoundPage';

const Root = ({
  Router, location, context, store,
}) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <Switch>
        <Route exact path="/" component={Page} />
        <Route path="/film/:id" component={FilmPage} />
        <Route path="/search/:search" component={Page} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>
);

export default hot(module)(Root);

