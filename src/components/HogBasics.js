import React, { Component } from "react";
import HogDetailed from "./HogDetailed";

export default class HogBasics extends Component {
  constructor() {
    super();
    this.state = {
      detailsShown: false
    }
  }

 getImage = hogName => {
    let formattedName = hogName
      .split(" ")
      .join("_")
      .toLowerCase();
    let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
    return pigPics;
  }

  showDetails = e => {
    this.setState({
      detailsShown: !this.state.detailsShown
    });
  };

  render() {
    const name = this.props.hog.name;
    if (this.state.detailsShown === false) {
      return (
        <div className="ui eight wide column" onClick={this.showDetails}>
          <h3>{name}</h3>
          <img src={this.getImage(name)} alt="Pig" />
        </div>
      );
    } else {
      return (
        <div className="ui eight wide column" onClick={this.showDetails}>
          <h3>{name}</h3>
          <img src={this.getImage(name)} alt="Pig" />
          <HogDetailed hog={this.props.hog} />
        </div>
      );
    }
  }
}
