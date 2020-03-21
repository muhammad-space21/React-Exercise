import React, { lazy, Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';

import './App.css';

const HomePage = lazy(() => import('./pages/home-page/home-page'));
const  ArticlePage = lazy(() => import('./pages/article-page/article-page'));
const TopicPage = lazy(() => import('./pages/topic-page/topic-page'));


const App = () => {
  return (
    <Switch>
      <Suspense fallback={<div>Loading</div>}>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/article-page' component={ArticlePage} />
        <Route exact path='/topic-page' component={TopicPage} />
      </Suspense>
    </Switch>
  )
};

export default App;
