import React, { Component } from 'react';
import axios from 'axios';

export default class Todos extends Component {

    constructor(){
        super();
        this.state={
            listofTodos:[],
            listofComments:[],
        }
    }

    componentDidMount(){
   
        axios.get('https://jsonplaceholder.typicode.com/todos').then( 
            res =>{
                this.setState({
                    listofTodos:res.data
                })
            }
        ).catch(err=> console.log(err))

        /////////////comments

        axios.get('http://localhost:3004/comments').then( 
            res =>{
                this.setState({
                    listofComments:res.data
                })
            }
        ).catch(err=> console.log(err))

    }

    render() {
        const {listofTodos,listofComments}=this.state
        return (
            <center>
                {
                    listofTodos.map((item)=>{
                        return <ul><li>{item.title}</li></ul>
                    })
                }
                <h1>**********comments***************</h1>
                {
                    listofComments.map((item)=>{
                        return <ul><li>{item.name}</li></ul>
                    })
                }
            </center>
        )
    }
}
