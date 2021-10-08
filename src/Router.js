import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={} />
      <Route path="/login" component={} />
      <Route path="/register" component={} />
      <Route path="/cart" component={} />
      <Route component={} />
    </Switch>
  </BrowserRouter>
)

export default Router