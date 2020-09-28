import React, { Component } from "react";
import './style.css';

class SolDetails extends Component {

  componentDidMount() {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {

      const newState = {
        sols: JSON.parse(xhr.responseText)
      }

      this.setState(newState);
    });

    xhr.open('GET', 'http://localhost:8080/sols');
    xhr.send();
  }

  render() {
    return (
      <section className="sol-details">
        <h1>{this.props.sol ? `Sol ${this.props.sol.name}` : "Select a Sol to continue"}</h1>      
        <h2>{this.props.sol ? `Max temperature: ${parseFloat(this.props.sol.maximum).toFixed(1)} °C` : ""}</h2>
        <h2>{this.props.sol ? `Min temperature: ${parseFloat(this.props.sol.minimum).toFixed(1)} °C` : ""}</h2>
        <h2>{this.props.sol ? `Avg temperature: ${parseFloat(this.props.sol.average).toFixed(1)} °C` : ""}</h2>
      </section>
    );
  }

}

export default SolDetails;
