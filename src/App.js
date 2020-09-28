import React, { Component } from "react";
import SolList from "./components/SolList";
import SolDetails from "./components/SolDetails";
import './assets/App.css';
import './assets/index.css';

class App extends Component {

  constructor() {
    super();

    this.xhr = new XMLHttpRequest()
    this.xhr.addEventListener('load', this.udpateDetails.bind(this));

    this.state = {
      sol: null
    }
  }

  udpateDetails() {
    const newState = {
      sol: JSON.parse(this.xhr.responseText)
    }

    this.setState(newState)
  }

  selectSol(solName) {
    this.xhr.open('GET', `http://localhost:8080/sols/${solName}`)
    this.xhr.send()
  }

  render() {
    return (
      <section className="content">
        <SolList selectSol={this.selectSol.bind(this)} />
        <SolDetails sol={this.state.sol} />
      </section>
    );
  }
}

export default App;
