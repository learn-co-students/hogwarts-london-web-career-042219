import React from "react";
import Hogtile from "./HogTile";

class HogtileContainer extends React.Component {
  state = {
    filter: ""
  };

  generateTiles = () => {
    return this.props.hogs.map(hog => {
      return <Hogtile hog={hog} setHog={this.props.setHog} />;
    });
  };

  render() {
    return <div>{this.generateTiles()}</div>;
  }
}

export default HogtileContainer;
