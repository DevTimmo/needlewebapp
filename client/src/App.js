//https://www.telerik.com/blogs/how-to-build-forms-with-react-the-easy-way
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from './components/homepage/HomePageContainer'
import SubmitProductFormContainer from './components/SubmitProductFormContainer'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/submitproduct" component={SubmitProductFormContainer} />
          </Switch>
        </Router>
      </div>
    );
  };
}
//https://medium.com/the-andela-way/handling-user-input-in-react-crud-1396e51a70bf
