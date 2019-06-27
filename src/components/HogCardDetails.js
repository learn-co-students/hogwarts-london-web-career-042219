import React, { Component } from "react";

class HogCardDetails extends Component {
  render() {
    const { name, greased, specialty, weight, highestMedal } = this.props.hog;
    const focusOnPig = this.props.focusOnPig;

    return (
      <div onClick={() => focusOnPig()} className="maxPigTile">
        <img
          src={require(`../hog-imgs/${name
            .toLowerCase()
            .replace(/ /g, "_")}.jpg`)}
          alt="pig profile"
        />{" "}
        <div>
          <h3>{name}</h3>
          <h3>Specialty</h3>
          {specialty}
          <h3>Greased</h3>
          {greased ? "Hella slippery" : "Sad dry pig"}
          <h3>Weight</h3>
          {weight > 2 ? "Bacon" : "Not yet bacon"}
          <h3>Highest Medal</h3>
          {highestMedal}
        </div>
      </div>
    );
  }
}

export default HogCardDetails;
