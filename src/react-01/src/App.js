import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import EvenComponent from "./components/EvenComponent";
import OddComponent from "./components/OddComponent";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 21,
      myState: "TBD"
    };
    this.onPushMe = this.onPushMe.bind(this);
  }
  onPushMe = () => {
    console.log("I got Pushed");
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      };
    });
  };

  disOddOrEven() {
    if (this.state.counter % 2 === 0)
      return (
        <div>
          <h3>I am Even Component</h3>
        </div>
      );
    else {
      return (
        <div>
          <h3>I am Even Component</h3>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>
            I am in control of this application and my name is Mohamed{" "}
            {this.state.counter}
            {this.state.myState}
          </h1>
          <button onClick={this.onPushMe}>
            {this.state.disOddOrEven}
            Push Me
          </button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <MyComponent />
          <EvenComponent />
          <OddComponent />
        </header>
      </div>
    );
  }
}

export default App;
