import React from "react";
import "./App.module.css";
import Nav from "./Nav";
import MapBox from "./components/Map/Map";
import Tracker from "./components/Tracker";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import CountyState from "./components/state_county/src/CountyState";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/Tracker" component={Tracker} />
          <Route path="/Map" component={MapBox} />
          <Route path="/CountyState" component={CountyState} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
