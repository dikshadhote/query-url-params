import React, { Component } from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import Home from './Home'
import Filter from './Filter';
import Products from './Products';
import Product from './Product'
import Todos from './Todos'

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Route exact path="/" component={Home}/>
                <Route path="/home"component={Home}/>
                <Route path="/filter"component={Filter}/>
                <Route exact path="/products"component={Products}/>
                <Route exact path="/products/:name"component={Product}/>
                <Route exact path="/todos"component={Todos}/>
                </BrowserRouter>
            </div>
        )
    }
}
