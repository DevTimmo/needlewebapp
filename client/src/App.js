//https://www.telerik.com/blogs/how-to-build-forms-with-react-the-easy-way
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import './App.css';
import Table from 'react-bootstrap/Table'
import Form from './components/Form.js'
import ResultTable from './components/Table.js'

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
      <Table responsive>
        <ResultTable data={this.state.syringes}/>
      </Table>
    </div>
    );
};
}
//https://medium.com/the-andela-way/handling-user-input-in-react-crud-1396e51a70bf
