import React from 'react'

import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import NewPostPage from '../pages/NewPostPage'
import PostPage from '../pages/PostPage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'


const RouteSwitch = () => (
  <Switch>
    <Route path='/' exact component={HomePage} />
    <Route path='/:page' component={HomePage} />
    <Route path='/about' component={AboutPage} />
    <Route path='/new_post' component={NewPostPage} />
    <Route path='/post/:id' component={PostPage} />
    <Route path='/login' component={LoginPage} />
    <Route path='*' component={NotFoundPage} />
  </Switch>
)

export default RouteSwitch
