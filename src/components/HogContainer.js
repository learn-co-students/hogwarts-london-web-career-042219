import React, { Component } from "react";
import Hog from "./Hog";

class HogContainer extends Component {
  render() {
    return (
      <div id="hog-container">
        {this.props.hogs
          .filter(hog => {
            if (this.props.filter === "Greased") {
              return hog.greased === true;
            } else if (this.props.filter === "Ungreased") {
              return hog.greased === false;
            } else {
              return true;
            }
          })
          .map((hog, index) => (
            <Hog
              key={index}
              id={index}
              focusOnPig={this.props.focusOnPig}
              hog={hog}
            />
          ))}
      </div>
    );
  }
}

export default HogContainer;
