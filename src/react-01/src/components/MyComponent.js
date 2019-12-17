import React from "react";

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World from MyComp{this.WhatToSay}</h1>
        <button onClick={this.onPushMe}>You Bush Me</button>
      </div>
    );
  }
}

export default MyComponent;
