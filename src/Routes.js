import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TaskScreen from './pages/TaskScreen';

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={ TaskScreen }
      />
      <Redirect
        to="/not-found"
      />
    </Switch>
  );
}
