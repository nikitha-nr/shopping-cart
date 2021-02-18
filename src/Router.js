import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';
import Cart from './Cart';

const Router = () => {
    return(
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/cart' component={Cart}/>
    </Switch>
)};

export default Router;