import React, { Component } from "react";
import './style.css';

class SolItem extends Component {

  _selectSol(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.selectSol(this.props.name);
  }

  render() {
    return (
      <section className="sol-item" onClick={this._selectSol.bind(this)}>
        <h1><b>SOL {this.props.name}</b></h1>
        <p>Average temperature: {this.props.average}</p>
      </section>
    );
  }

}

export default SolItem;
