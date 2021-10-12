import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import NewPostPage from '../pages/NewPostPage'
import PostPage from '../pages/PostPage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'


const Router = ({ children }) => (
  <HashRouter>
    { children }
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/new_post" component={NewPostPage} />
      <Route path="/post/:id" component={PostPage} />
      <Route path="/login" component={LoginPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </HashRouter>
)

export default Router