import React from "react";
import "./App.module.css";
import Nav from "./Nav";
import MapBox from "./components/Map/Map";
import Tracker from "./components/Tracker";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/Map" component={MapBox} />
          <Route exact path="/Tracker" component={Tracker} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
