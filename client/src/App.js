import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import HomePage from './components/homepage/HomePageContainer'
ReactGA.initialize('UA-28141175-2');

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  })

  return (
    <div className="App">
      <HomePage />
    </div>
  );
};
export default App;