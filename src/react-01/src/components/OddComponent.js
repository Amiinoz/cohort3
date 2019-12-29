import React from "react";

class OddComponent extends React.Component {
  render() {
    if (this.props.counter % 2 !== 0)
      return (
        <div>
          <h3>I am Odd Component</h3>
        </div>
      );
    else return null;
  }
}

export default OddComponent;
