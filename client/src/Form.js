//https://vegibit.com/a-simple-react-js-form-example/

import React, { Component } from 'react';
import {GET} from './Fetch.js'


export default class Form extends Component{

    constructor(){
        super();
        this.state = {
            value: ''
        };

    }

    handleSubmit = (event) => {
        //alert('A gauge was submitted ' + this.state.value)
        event.preventDefault();
        fetch(`http://51.81.32.218:4000/databaseTest?gauge=${this.state.value}`)
        .then(res => {
          console.log(res);
          return res.json();
        })
        .then(data => {
          console.log(data);
          this.props.saveData(data);
          
        })
        .catch(console.log);
      }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <h1>Needle Search Tool</h1>
            <label>Gauge:
              <input
               type="number"
               value={this.state.value}
               onChange={this.handleChange}
               />
           </label>
           <button>Find product</button>
         </form>
        )
    }

}