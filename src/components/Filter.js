import React, { Component } from "react";

class Filter extends Component {
  cycleFilter = this.props.cycleFilter;
  cycleSort = this.props.cycleSort;

  render() {
    return (
      <div>
        <button onClick={this.cycleFilter}>Showing: {this.props.filter}</button>
        <button onClick={this.cycleSort}>Sorted by: {this.props.sort}</button>
      </div>
    );
  }
}

export default Filter;
