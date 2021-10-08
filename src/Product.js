import React, { Component } from 'react'

export default class Product extends Component {

    constructor(){
        super();
        this.state={
            productName: ""
        }
    }

    componentDidMount(){
        const productName=this.props.match.params.name;
        this.setState({
            productName: productName 
        })
    }

    render() {
        return (
            <div>
               <center> product details : {this.state.productName}</center> 
            </div>
        )
    }
}
