import React, { Component } from 'react'

export default class Home extends Component {

    navigateToFilter = (path) => {
        this.props.history.push(path);
    }
    render() {
        return (
            <div>
            <center>
            <h1>Use Params</h1>
            <button onClick={ () => {this.navigateToFilter('./filter?product=iPhone&model=13')}}>Go to Filter</button>
            <button onClick={ () => {this.navigateToFilter('./products')}}>Go to Products</button>
            </center>
            </div>
        )
    }
}
