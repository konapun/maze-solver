import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Maze from './App/Maze'

export default (
  <Switch>
    <Route path='/maze' component={Maze} />>
    <Redirect to='/maze' />
  </Switch>
)
