import React, { Component } from "react";
import './style.css';

class SolItem extends Component {

  render() {
    return (
      <section className="sol-item">
        <h1><b>SOL {this.props.name}</b></h1>
        <p>Average temperature: {this.props.average}</p>
      </section>
    );
  }

}

export default SolItem;
