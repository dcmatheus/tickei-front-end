import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={ Login }
      />
      <Redirect
        to="/not-found"
      />
    </Switch>
  );
}
