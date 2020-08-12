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
        const header = [];
        Object.keys(this.props.data[0]).map((key) => {
            header.push(<th key={this.props.data.referenceID}>{key}</th>)
        })
        //console.log(header);
        return header;
    }

    render(){
        return(
            <table className='syringes'>
                <tbody>
                    <tr>{this.props.data && this.props.data[0] && this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </tbody>
            </table>
        )
    }

}