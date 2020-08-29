//https://www.telerik.com/blogs/how-to-build-forms-with-react-the-easy-way
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Form from './components/Form'
import ResultTable from './components/Table'
import NavToDBPost from './components/NavToDBPost'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      syringes: [],
      value: ''
    };
  }

  saveData = (data) => {
    this.setState({ syringes: data });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Form saveData={this.saveData} />
          <ResultTable data={this.state.syringes} />
          <NavToDBPost />
        </Router>
      </div>
    );
  };
}
//https://medium.com/the-andela-way/handling-user-input-in-react-crud-1396e51a70bf
