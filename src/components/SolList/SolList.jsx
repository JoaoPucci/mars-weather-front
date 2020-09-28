import React, { Component } from "react";
import SolItem from "../SolItem";
import './style.css'

class SolList extends Component {

  constructor() {
    super();

    this.state = {
      sols: []
    }
  }

  componentDidMount() {
    var xhr = new XMLHttpRequest()

    xhr.addEventListener('load', () => {

      const newState = {
        sols: JSON.parse(xhr.responseText)
      }

      this.setState(newState)
    });

    xhr.open('GET', 'http://localhost:8080/sols')
    xhr.send()
  }

  render() {
    return (
      <ul className="sol-list">
        {this.state.sols.map((sol, index) => {
          return (
            <li key={index}>
              <SolItem name={sol.name} average={sol.average} selectSol={this.props.selectSol.bind(this)}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default SolList;
