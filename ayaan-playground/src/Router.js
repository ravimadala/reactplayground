import React, { Component } from  'react'
import {Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage.js'
import CartPage from './pages/cartpage.js'

export default class Router extends Component {
render () {
    return (
       <Switch>
             <Route exact path ='/' component={HomePage} />
             <Route exact path ='/cart' component={CartPage} />
        </Switch>
    )
}
}