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


  renderTableData(){
    return this.state.syringes.map((syringe, index) => {
      const {referenceID, gauge, length, volume} = syringe;
      return (
          <tr key={referenceID}>
            <td>{referenceID}</td>
            <td>{gauge}</td>
            <td>{length}</td>
            <td>{volume}</td>
          </tr>
      )
    })
  }

  // renderTableHeader(){
  //   let header = Object.keys(this.state.syringes)
  //   return header.map((key,index) => {
  //     return <th key={index}>{key.toUpperCase()}</th>
  //   })
  // }

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
