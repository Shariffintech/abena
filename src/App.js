import React from "react";
// import logo from "./logo.svg";
// import * as app from "./css/App";
import Mission from "./components/mission";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Strategy from "./components/strategy";
import Student from "./components/student";
import NavBar from "./components/navBar";
import Mission from "./components/mission";

//There should be 3 routes

// todo add nav bar with links to scroll to: our team, mission, why abena dms, api documentation, pricing (coming soon)
// link product hunt button to product hunt page
// setup emailing list through sendgrid after users join beta
// show place in line for educators

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/students" component={Student} />
      <Route exact path="/strategies" component={Strategy} />
      <Route exact path="/mission" component={Mission} />
    </Router>
  );
}

export default App;
