//https://www.telerik.com/blogs/how-to-build-forms-with-react-the-easy-way

import React, { Component } from 'react';
import './App.css';

export default class App extends Component{
  
  constructor(){
    super();
    this.state = {
      syringes: [],
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    //alert('A gauge was submitted ' + this.state.value)
    event.preventDefault();
    fetch(`http://51.81.32.218:4000/databaseTest?gauge=${this.state.value}`)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(syringes => {
      console.log(syringes);
      this.setState({ syringes })
    });
  }


  // changeText(event) {
  //   this.setState({
  //     gauge = event.target.value
  //   });
  // }


  // componentDidMount(){
  //   fetch(`http://51.81.32.218:4000/databaseTest?gauge=${this.handleChange}`)
  //     .then(res => {
  //       console.log(res);
  //       return res.json();
  //     })
  //     .then(syringes => {
  //       console.log(syringes);
  //       this.setState({ syringes })
  //     });
  //   }
    
  render() {
    return (

    <div className="App">
    <h1>Results</h1>
     <form onSubmit={this.handleSubmit}>
         <h1>Needle Search Tool</h1>
         <label>Gauge:
           <input
            type="number"
            value={this.state.gauge}
            onChange={this.handleChange}
            />
        </label>
        <button>Find product</button>
    </form>
    <div>NDC Length Gauge Volume</div>
    {this.state.syringes.map(item =>
      <div key={item.referenceID}>
        {'08290-' + item.referenceID}
        {item.length}
        {item.volume}
      </div>
      )}
    </div>
    );
};
}
//https://medium.com/the-andela-way/handling-user-input-in-react-crud-1396e51a70bf



// export default function App() {

  




//   const [gauge, setGauge] = React.useState("");
//   //https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
  
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const data = new FormData(event.target);
//     fetch(`http://51.81.32.218:4000/databaseTest?gauge=${gauge}`, {
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//       }})
//       .then(data => {
//         const body = await Response.json()
//         console.log(data.gauge);
//       })

//     // console.log(`
//     //   Gauge: ${gauge}
//     // `);
//   }
//   return (
//       <form onSubmit={handleSubmit}>
//           <h1>Needle Search Tool</h1>
//           <label>
//             Gauge:
//             <input
//               name="gauge"
//               type="number"
//               value={gauge}
//               onChange={e => setGauge(e.target.value)}
//               required />
//           </label>
//           <button>Find product</button>
//       </form>
//   ); 
// }

