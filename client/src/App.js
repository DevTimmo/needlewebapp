//https://www.telerik.com/blogs/how-to-build-forms-with-react-the-easy-way

import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'
import Table from './Table.js'

export default class App extends Component{
  
  constructor(){
    super();
    this.state = {
      syringes: [],
      value: ''
    };
  }

  saveData = (data) => {
    this.setState({syringes: data});
  }

  render() {
    return (
    <div className="App">
      <Form saveData={this.saveData}/>
      <Table data={this.state.syringes}/>
    </div>
    );
};
}
//https://medium.com/the-andela-way/handling-user-input-in-react-crud-1396e51a70bf
