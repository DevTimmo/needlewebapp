//https://www.telerik.com/blogs/how-to-build-forms-with-react-the-easy-way

import React from 'react';
import './App.css';

export default function App() {
  const [gauge, setGauge] = React.useState("");
  //https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    fetch(`http://51.81.32.218:4000/databaseTest?gauge=${gauge}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }})
      .then(data => {
        JSON.stringify(data);
        // data.map(thing =>{
        //   console.log(thing.gauge);
        // })

        console.log(data);

      })

    // console.log(`
    //   Gauge: ${gauge}
    // `);
  }
  return (
      <form onSubmit={handleSubmit}>
          <h1>Needle Search Tool</h1>
          <label>
            Gauge:
            <input
              name="gauge"
              type="number"
              value={gauge}
              onChange={e => setGauge(e.target.value)}
              required />
          </label>
          <button>Find product</button>
      </form>
  ); 
}
