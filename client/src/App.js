import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from './components/homepage/HomePageContainer'
import SubmitProductFormContainer from './components/submit-product-form/SubmitProductFormContainer'

function App() {

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
export default App;