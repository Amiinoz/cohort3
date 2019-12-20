import React from "react";

function OddComponent(props) {
  if (this.counter === (Number % 2 === 0))
    return (
      <div>
        <h1>I am Odd Component</h1>
      </div>
    );
}

export default OddComponent;
