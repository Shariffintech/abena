import React from "react";
import { Routes, Route } from "react-router-dom";
import Mission from "./components/home/mission";
import Strategy from "./components/strategies/strategy";
import Student from "./components/students/student";
import NavBar from "./components/navBar";
// import Home from "./components/home/home";
import Intake from "./components/intake/intake";

// import logo from "./logo.svg";
// import * as app from "./css/App";

// to do: T̶h̶e̶r̶e̶ s̶h̶o̶u̶l̶d̶ b̶e̶ 3̶ r̶o̶u̶t̶e̶s̶
// to do: add nav bar with links to scroll to: team, mission, why abena dms, api documentation, pricing (coming soon) sections
// to do: link product hunt button to product hunt page
// to do: setup emailing list through sendgrid after users join beta
// to do: show (count) place in line for educators

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/students" element={<Student />} />
        <Route path="/strategies" element={<Strategy />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/intake" element={<Intake />} />
      </Routes>
    </div>
  );
}

export default App;
