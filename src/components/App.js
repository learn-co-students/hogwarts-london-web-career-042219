import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav hogs={hogs} />
      </div>
    );
  }
}

export default App;
