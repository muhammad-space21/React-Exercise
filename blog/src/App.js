import React, { lazy, Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';

import './App.css';

const HomePage = lazy(() => import('./pages/home-page/home-page'));

const App = () => {
  return (
    <Switch>
      <Suspense fallback={<div>Loading</div>}>
        <Route exact path='/' component={HomePage} />
      </Suspense>
    </Switch>
  )
};

export default App;
