import React, { Fragment } from "react";
import { Switch, Route  } from "react-router-dom";

import Sidenav from "./components/Sidenav";
import Home from "./components/Home";
import NewUser from "./containers/NewUser";
import NotFoundPage from "./components/NotFoundPage";
import CurrentUsers from "./containers/CurrentUsers";
import Search from "./containers/Search";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React. Test!
        </a>
      </header>
    </div>
=======
    <Fragment>
      <Sidenav/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/new-user" component={NewUser}/>
      <Route path="/current-users" component={CurrentUsers}/>
      <Route path="/search" component={Search}/>
      <Route component={NotFoundPage}/>
      </Switch>
    </Fragment>
>>>>>>> 17ffa39aafc5e2a230afe0afff69921cb4be927f
  );
}

export default App;
