import React from 'react'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import AboutPage from '../pages/AboutPage'
import NotFound from '../pages/NotFound'


const Router = ({ children }) => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFound} />
    </Switch>
    { children }
  </HashRouter>
)

export default Router