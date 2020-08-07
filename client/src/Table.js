import React, { Component } from 'react';
import './App.css';


export default class Table extends React.Component {




    renderTableData(){
        return this.props.data.map((syringe, index) => {
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
    
    renderTableHeader(){
        let keys = Object.keys(this.props.data);
        console.log(keys);
        for(var index=0; index<keys; index++){
            console.log(keys[index]);
        }
    

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