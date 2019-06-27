import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogtileContainer from "./HogtileContainer";
import Details from "./Details";

class App extends Component {
  state = {
    hog: {},
    filter: "",
    sortBy: "name"
  };

  setHog = hog => {
    this.setState({ hog: hog });
  };

  setFilter = e => {
    this.setState({ filter: e.target.value });
  };

  setSortBy = e => {
    this.setState({ sortBy: e.target.value });
  };

  getFilteredPigs = () => {
    if (this.state.filter === "greased") {
      return hogs.filter(hog => hog.greased);
    }
    return hogs;
  };

  sortPigs = pigs => {
    const sortFuncs = {
      name: (a, b) => {
        return a.name.localeCompare(b.name);
      },
      weight: (a, b) => {
        return a.weight - b.weight;
      }
    };
    return pigs.sort(sortFuncs[this.state.sortBy]);
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <label for="filter">Grease Filter</label>
        <select id="filter" onChange={this.setFilter}>
          <option value="">All</option>
          <option value="greased">Greased</option>
        </select>
        <label for="sort">Sort By</label>
        <select id="sort" onChange={this.setSortBy}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        <HogtileContainer
          hogs={this.sortPigs(this.getFilteredPigs())}
          setHog={this.setHog}
        />
        <Details hog={this.state.hog} />
      </div>
    );
  }
}

export default App;
