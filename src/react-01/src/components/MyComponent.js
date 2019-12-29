import React from "react";

class MyComp extends React.Component {
  render() {
    const whatToSay = "Hello world from MyComp";
    return (
      <div>
        <h1>Hello World from MyComp</h1>
        <h2>{whatToSay}</h2>
      </div>
    );
  }
}

export default MyComp;
