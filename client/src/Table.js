import React, { Component } from 'react';
import './App.css';


export default class Table extends React.Component {




    renderTableData(){
        return this.props.data.map((syringe, index) => {
          const {referenceID, gauge, length, volume} = syringe;
          return (
              <tr key={referenceID}>
                <td>08290-{referenceID}</td>
                <td>{gauge}G</td>
                <td>{length} inch</td>
                <td>{volume} milliliters</td>
              </tr>
          )
        })
      }
    
  renderTableHeader(){
    this.props.data.map((syringe, index) => {
        //const {referenceID, gauge, length, volume} = syringe;
        //let header = Object.keys(syringe)
        
        Object.keys(syringe).map((key) => {
            console.log(key)
            return <th key={syringe.referenceID}>{key}</th>
        })
        
    })
    

    // return this.props.data.map((item) => {
    //     return <th key={item.key()}> {item.key()}</th>
    // })


    // return header.map((key,index) => {
    //   return <th key={index}>{key.toUpperCase()}</th>
    // })
  }


    render(){
        return(
            <table className='syringes'>
                <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                    
                </tbody>
            </table>
        )
    }

}