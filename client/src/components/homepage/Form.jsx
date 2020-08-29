import React, { Component } from 'react';


export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://51.81.32.218:4000/databaseTest?gauge=${this.state.value}`)
      .then(res => {
        //console.log(res);
        return res.json();
      })
      .then(data => {
        this.props.saveData(data);
      })
      .catch(console.log);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Gauge:
              <input
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <button>Find product</button>
      </form>
    )
  }
}