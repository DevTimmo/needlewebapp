import React from 'react';
import '../styles/Table.css'
//import Table from 'react-bootstrap/Table';

export default class ResultTable extends React.Component {
    renderTableData(){
        return this.props.data.map((syringe, index) => {
          const { NDC, gauge, length, volume, color, syringeStyle, needleStyle} = syringe; //referenceID
          if(volume == null){
            return (
                <tbody>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{NDC}</td>
                        <td>{gauge}G</td>
                        <td>{length} inch</td>
                        <td></td>
                        <td style={{backgroundColor: color}}></td>
                        <td></td>
                        <td>{needleStyle}</td>
                    </tr>
                </tbody>
            )
          }
          return (
                <tbody>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{NDC}</td>
                        <td>{gauge}G</td>
                        <td>{length} inch</td>
                        <td>{volume} milliliters</td>
                        <td style={{backgroundColor: color}}></td>
                        <td>{syringeStyle}</td>
                        <td>{needleStyle}</td>
                    </tr>
                </tbody>
          )
        })
      }
    
    renderTableHeader(){
        const header = [];
        Object.keys(this.props.data[0]).map((key) => {
            header.push(<th key={this.props.data.referenceID}>{key}</th>)
        })
        return (header);
    }

    

    render(){
        return(
            
            <table className='syringes' >
                <tbody>
                    <tr>{this.props.data && this.props.data[0] && this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                    
                </tbody>
            </table>
            
        )
    }
}