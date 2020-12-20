import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  render() {
    const details = {
      name: "Tiger",
      number: 3891,
      endangered: true
    };
    return (
      <div className="App">
        <h3>Destructure Object...</h3>
        <Animal details={details} />
        <hr />
        <h3>Destructure Spread...</h3>
        <Animal1 {...details} />
      </div>
    );
  }
}

class Animal extends Component {
  render() {
    const { name, number, endangered } = this.props.details;
    return (
      <div>
        <p> name: {name}</p>
        <p> number: {number}</p>
        <p> endangered: {endangered ? "Yes" : "No"}</p>
      </div>
    );
  }
}
class Animal1 extends Component {
  render() {
    const { name, number, endangered } = this.props;
    return (
      <div>
        <p> name: {name}</p>
        <p> number: {number}</p>
        <p> endangered: {endangered ? "Yes" : "No"}</p>
      </div>
    );
  }
}

export default App;
