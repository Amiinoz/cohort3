import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Game from "./components/game/Game";
import AccApp from "./components/accounts/AccApp";
import CittApp from "./components/cities/CittApp";
import LinkList from "./components/linklist/LinkList";
import HomeIcon from "./images/home.svg";
import TicTacIcon from "./images/game.svg";
import AccIcon from "./images/bank.svg";
import CityIcon from "./images/city.svg";
import LinkListIcon from "./images/linklist.svg";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='classRecApp'>
          <ul>
            <li>
              <Link to='/Home'>
                <img src={HomeIcon} className='home-logo' alt='Home Page' />
              </Link>
              <icon fill='red' className='logo' width={50} height={50} />
            </li>
            <li>
              <Link to='/Game'>
                <img src={TicTacIcon} className='game-logo' alt='Tic Tac Toe' />
              </Link>
            </li>
            <li>
              <Link to='/AccApp'>
                <img src={AccIcon} alt='AccApp' />
              </Link>
            </li>
            <li>
              <Link to='/CittApp'>
                {" "}
                <img src={CityIcon} alt='CittApp' />
              </Link>
            </li>
            <li>
              <Link to='/LinkList'>
                {" "}
                <img src={LinkListIcon} alt='Link List' />
              </Link>
            </li>
          </ul>

          <hr />

          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path='/Home'>
              <Home />
            </Route>
            <Route path='/Game'>
              <Game />
            </Route>
            <Route path='/AccApp'>
              <AccApp />
            </Route>
            <Route path='/CittApp'>
              <CittApp />
            </Route>
            <Route path='/LinkList'>
              <LinkList />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

// You can think of these components as "pages"
// in your app.

export default App;
