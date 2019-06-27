import React, { Component } from "react";

class Hog extends Component {
  render() {
    const { name } = this.props.hog;
    const { focusOnPig, id } = this.props;

    return (
      <div className="pigTile">
        <div onClick={() => focusOnPig(id)}>
          <img
            src={require(`../hog-imgs/${name
              .toLowerCase()
              .replace(/ /g, "_")}.jpg`)}
            alt="pig profile"
          />
          <h3>{name}</h3>
        </div>
        {/* <button onClick={this.hideHog}>Hide</button> */}
      </div>
    );
  }
}

export default Hog;
