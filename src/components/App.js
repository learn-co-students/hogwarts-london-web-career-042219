import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Filter from "./Filter";
import HogContainer from "./HogContainer";
import HogCardDetails from "./HogCardDetails";
import hogs from "../porkers_data";

class App extends Component {
  state = {
    hogs: hogs,
    filter: "All",
    focused: null,
    sort: "None"
  };

  componentDidUpdate() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  focusOnPig = index => {
    let starPig = this.state.hogs.find((hog, arrIndex) => arrIndex === index);
    this.setState({ focused: starPig });
  };

  cycleFilter = () => {
    switch (this.state.filter) {
      case "All":
        this.setState({ filter: "Greased" });
        break;

      case "Greased":
        this.setState({ filter: "Ungreased" });
        break;

      case "Ungreased":
        this.setState({ filter: "All" });
        break;

      default:
        break;
    }
  };

  cycleSort = () => {
    let hogArray;
    switch (this.state.sort) {
      case "None":
        hogArray = hogs.sort(function(a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        this.setState({ sort: "By name" });
        this.setState({ hogs: hogArray });
        break;

      case "By name":
        hogArray = hogs.sort((b, a) => b.weight - a.weight);
        this.setState({ sort: "By weight (lightest)" });
        this.setState({ hogs: hogArray });
        break;

      case "By weight (lightest)":
        hogArray = hogs.sort((b, a) => a.weight - b.weight);
        this.setState({ sort: "By weight (heaviest)" });
        this.setState({ hogs: hogArray });
        break;

      case "By weight (heaviest)":
        hogArray = hogs.sort((b, a) => b.id - a.id);
        this.setState({ sort: "None" });
        this.setState({ hogs: hogArray });
        break;

      default:
        break;
    }
  };

  render() {
    const starPig = this.state.focused;
    return (
      <div className="App">
        <Nav />
        <Filter
          filter={this.state.filter}
          cycleFilter={this.cycleFilter}
          sort={this.state.sort}
          cycleSort={this.cycleSort}
        />
        {this.state.focused ? (
          <HogCardDetails hog={starPig} focusOnPig={this.focusOnPig} />
        ) : null}
        <HogContainer
          focusOnPig={this.focusOnPig}
          filter={this.state.filter}
          hogs={this.state.hogs}
        />
      </div>
    );
  }
}

export default App;
