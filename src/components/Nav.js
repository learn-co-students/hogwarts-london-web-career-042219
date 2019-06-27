import piggy from "../porco.png";
import React, { Component } from "react";
import HogBasics from "./HogBasics";

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      show: "all",
      greasedButtonText: "Filter By Greased",
      sorted: "name"
    };
  }

  filterByGreased = e => {
    if (this.state.show === "all") {
      this.setState({
        show: "greased",
        greasedButtonText: "Show all pigs"
      });
    } else {
      this.setState({
        show: "all",
        greasedButtonText: "Filter By Greased"
      });
    }
  };

  hogsToRender = () => {
    let whichHogs = this.props.hogs;
    if (this.state.show === "greased") {
      whichHogs = whichHogs.filter(hog => hog.greased === true);
    }
    whichHogs = whichHogs.sort((a, b) => {
      if (a[this.state.sorted] < b[this.state.sorted]) {
        return -1;
      }
      if (a[this.state.sorted] > b[this.state.sorted]) {
        return 1;
      }
      return 0;
    });
    return whichHogs.map((hog, index) => <HogBasics key={index} hog={hog} />);
  };

  sortHogs = e => {
    console.log(e.target.value);
    this.setState({
      sorted: e.target.value
    });
  };

  render() {
    let hogs = this.hogsToRender();
    return (
      <div className="navWrapper">
        <span className="headerText">Hogwarts</span>
        <div className="TwirlyPig">
          <a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
            <img src={piggy} className="App-logo" alt="piggy" />
          </a>
          <button onClick={this.filterByGreased}>
            {this.state.greasedButtonText}
          </button>
          Sort By
          <select onChange={this.sortHogs}>
            <option>name</option>
            <option>weight</option>
          </select>
        </div>
        <br />
        <span className="normalText">A React App for County Fair Hog Fans</span>
        <br />
        <div className="ui grid container">{hogs}</div>
      </div>
    );
  }
}
