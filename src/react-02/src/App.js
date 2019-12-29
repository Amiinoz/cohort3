import React from "react";

import logo from "./logo.svg";
import "./App.css";
import * as SVGLoaders from "svg-loaders-react";
import { render } from "@testing-library/react";

import TicTacToe from "./components/TicTacToe";
import Accounts from "./components/Accounts";
import Cities from "./components/Cities";
const { BrowserRouter, NavLink, Route } = ReactRouterDOM;

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <ul>
          <li>
            <SVGLoaders.Bars />
            <a href='/TicTacToe'>TicTacToe</a>
          </li>
          <li>
            <SVGLoaders.Puff />
          </li>
          <li>
            <SVGLoaders.Grid />
          </li>
          <li>
            <SVGLoaders.TailSpin />
          </li>
        </ul>

        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
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
        <Accounts />
        <Cities />
        <TicTacToe />
        <BrowserRouter>{/* <Dashboard /> */}</BrowserRouter>
      </div>
    );
  }
}

export default App;
