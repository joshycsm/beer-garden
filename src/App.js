import React, { Component } from "react";
import "./App.css";
import BeerListing from "./BeerListing";

class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: [
        {
          id: 1,
          name: "Coors Light",
          imageUrl:
            "https://www.myamericanmarket.com/13215/coors-light-beer-bottle.jpg"
        },
        {
          id: 2,
          name: "Franz",
          imageUrl: "https://cdn.beeradvocate.com/im/beers/1946.jpg"
        }
      ]
    };
  }
  beers = () => {
    return this.state.beers.map(beer => {
      return (
        <li key={beer.id}>
          <BeerListing name={beer.name} imageUrl={beer.imageUrl} />
        </li>
      );
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Beer Garden!</h1>
        <div className="beer-list">
          <ul>{this.beers()}</ul>
        </div>
      </div>
    );
  }
}

export default App;
