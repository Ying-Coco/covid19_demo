import React from "react";
import "./App.module.css";
import Nav from "./Nav";
import MapBox from "./components/Map/Map";
import Tracker from "./components/Tracker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/covid19-react/Map" component={MapBox} />
          <Route exact path="/covid19-react" component={Tracker} />
          <Route exact path="/covid19-react/Tracker" component={Tracker}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
