import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";
import Search from "./Search";

const weight =
  "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";

// App has 4 things: App, Search and HogList

//You can put the hogs in App or in the HogList. But it might be better to put it in App so that we keep the HogList completely dumb - they just take in props and show some HTML. A dumb component (presentational component - just to present things) can be only a functional component. Smart (controller components) have to be class components.

class App extends Component {
  //add state of the hogs

  //hogs is already a thing because at the top I can see that I'm importing hogs from a data file already given to me.
  state = {
    hogs: hogs,
    showGreasedOnly: false,
    sortBy: "none"
  };

  updateSortBy = sortType => {
    this.setState({
      sortBy: sortType
    });
  };

  toggleShowGreasedOnly = () => {
    this.setState({
      showGreasedOnly: !this.state.showGreasedOnly
    });
  };

  //now with the search filters I need to sort and filter. So it's better to filter first and then sort.
  getFilteredHogs = () => {
    const { hogs, showGreasedOnly } = this.state;
    //ternaries work even after a return
    return showGreasedOnly ? hogs.filter(hog => hog.greased) : hogs;
    //this works because .greased is true or false
  };

  //sort changes the original array so that is BAD. so we can slice it or copy the array.
  sortHogs = someHogs => {
    const { sortBy } = this.state;
    const hogsCopy = [...someHogs];

    if (sortBy === "name") {
      hogsCopy.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
    }

    if (sortBy === "weight") {
      hogsCopy.sort((a, b) => a[weight] - b[weight]);
    }

    return hogsCopy;
  };
  // I want to be able to display all these hogs on the page. The hoglist is in charge of mapping the hogs so I have to pass a prop to the HogList. i could pass just hogs but that would be from the file, so if I modify it, it wouldn't get through. So we need to pass down the props as this.state.hogs

  render() {
    const filteredHogs = this.getFilteredHogs();
    const sortedHogs = this.sortHogs(filteredHogs);

    return (
      <div className="App">
        <Nav />
        <Search
          updateSortBy={this.updateSortBy}
          toggleShowGreasedOnly={this.toggleShowGreasedOnly}
        />
        <HogList hogs={sortedHogs} />
      </div>
    );
  }
}

export default App;
