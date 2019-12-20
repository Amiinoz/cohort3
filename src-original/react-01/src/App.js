import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {

  constructor() {
    super();
    this.counter = 21;
  }
  return (
    <div className='App'>
    
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <h1>I am in control of this application and my name is Mohamed</h1>

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
      </header>
    </div>
  );
}

export default App;
