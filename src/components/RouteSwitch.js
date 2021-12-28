import React from 'react'

import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import NewPostPage from '../pages/NewPostPage'
import PostPage from '../pages/PostPage'
import NotFoundPage from '../pages/NotFoundPage'


const RouteSwitch = () => (
  <Switch>
    <Route path='/' exact component={HomePage} />
    <Route path='/:page([1-9]|[1-9]*[0-9]+)' component={HomePage} />
    <Route path='/about' component={AboutPage} />
    <Route path='/new_post' component={NewPostPage} />
    <Route path='/post/:id([1-9]|[1-9]*[0-9]+)' component={PostPage} />
    <Route path='*' component={NotFoundPage} />
  </Switch>
)

export default RouteSwitch
