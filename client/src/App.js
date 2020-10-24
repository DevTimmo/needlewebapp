import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from 'react-ga';
import './App.css';
import HomePage from './components/homepage/HomePageContainer'
import SubmitProductFormContainer from './components/submit-product-form/SubmitProductFormContainer'


function App() {

  useEffect(() => {
    ReactGA.initialize('G-YXWKW8WJ3L');
    ReactGA.pageview(window.location.pathname);
  })

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