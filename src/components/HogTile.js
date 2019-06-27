import React from "react";

const Hogtile = props => {
  const { name } = props.hog;
  return (
    <div
      className="pigTile"
      onClick={() => {
        props.setHog(props.hog);
      }}
    >
      <h3>{name}</h3>
      <img
        src={require(`../hog-imgs/${name
          .toLowerCase()
          .replace(/ /g, "_")}.jpg`)}
        alt=""
      />
    </div>
  );
};

export default Hogtile;
