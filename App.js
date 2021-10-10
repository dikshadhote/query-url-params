import React, { Component } from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import Home from './Home'
import Discussions from './src/Discussions';
import {
 BrowserRouter as Router,
 Switch,
 Link
} from 'react-router-dom'



export default class App extends Component {
    render() {
        return (
            <div>
            <Router>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="discussions">Discussions</Link></li>
            </ul>
            <div>
                <Switch>
                    <Route exact path="/">Home</Route>
                    <Route path="/home">Home</Route>
                    <Route path="/discussions"><Discussions/></Route>
                </Switch>
            </div>
        </Router>
            </div>
        )
    }
}
