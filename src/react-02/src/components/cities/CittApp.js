import React from "react";

class CittApp extends React.Component {
  constructor() {
    super();
    this.state = {
      cityName: "",
      longTitude: "",
      lanTatude: "",
      population: "",
      moveIn: "",
      moveOut: "",
      totalPopulation: ""
    };
  }
  render() {
    return <div>Hello from Cities</div>;
  }
}

export default CittApp;
