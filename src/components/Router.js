import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import AboutPage from '../pages/AboutPage'
import PostPage from '../pages/PostPage'
import NotFound from '../pages/NotFound'


const Router = ({ children }) => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/post/:id" component={PostPage} />
      <Route component={NotFound} />
    </Switch>
    { children }
  </HashRouter>
)

export default Router