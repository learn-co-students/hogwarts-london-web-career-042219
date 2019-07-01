import React from "react";

const weight =
  "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";

class Hog extends React.Component {
  state = {
    showDetails: false
  };

  showDetails = () =>
    this.setState({
      showDetails: true
    });

  hideDetails = () =>
    this.setState({
      showDetails: false
    });

  render() {
    // const fileName= props.hog.name.split(' ').join('_').toLowerCase()
    // const fileName = props.hog.name.toLowerCase().replace(' ', '_')//this only replaces the first space that it sees.
    const fileName = this.props.hog.name.toLowerCase().replace(/ /g, "_"); //g means global the // means regular expression instead of string. global applies it to everything.

    //use require
    const imageSrc = require(`../hog-imgs/${fileName}.jpg`);

    // with {} I need 'return'
    return (
      <div style={{ margin: "25px" }}>
        <h2>{this.props.hog.name}</h2>
        <img src={imageSrc} alt={this.props.hog.name} />
        <br />
        {this.state.showDetails ? (
          <div>
            <p>Specialty: {this.props.hog.specialty}</p>
            <p>Weight: {this.props.hog[weight]}</p>
            <p>{this.props.hog.greased ? "Greased" : "Not Greased"}</p>
            <button onClick={this.hideDetails}>▲</button>
          </div>
        ) : (
          <button onClick={this.showDetails}>▼</button>
        )}
      </div>
    );
  }
}

export default Hog;

//to make the name match the file in the img folder, we need to lowercase it and then join it with an underscore

//A HOG
// name: 'Mudblood',
//     specialty: 'Mediocre magic',
//     greased: false,
//     'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
//     'highest medal achieved': 'bronze'
