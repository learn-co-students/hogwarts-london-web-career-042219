import React, { Component } from "react";

export default class HogDetailed extends Component {
  render() {
    const { specialty, greased } = this.props.hog;
    const weight = this.props.hog["weight"];
    const medal = this.props.hog["highest medal achieved"];
    return (
      <div className="hog details">
        <p>Specialty: {specialty}</p>
        <p>Greased? {greased}</p>
        <p>Weight: {weight}</p>
        <p>Medal: {medal}</p>
      </div>
    );
  }
}
