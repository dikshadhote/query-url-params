import React, { Component } from 'react';
import queryString from 'query-string'; // import to use queryString

export default class Filter extends Component {

    constructor(){
        super();
        this.state={
            product:"",
            model:""
        }
    }

//we use componentDidMount method for parsing a string

componentDidMount(){
    const qs=queryString.parse(this.props.location.search)  //location.search gives parameters passed after question mark //{model: '13', product: 'iPhone'}
    console.log(qs.model);

    this.setState({
        product :qs.product,
        model : qs.model
    })
}

    render() {
        return (
            <center>
                <p>selected product {this.state.product}</p>
                <p>selected model {this.state.model}</p>
            </center>
        )
    }
}
