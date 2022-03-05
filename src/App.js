
import React from "react";
import { Routes, Route } from "react-router-dom";
import Mission from "./components/home/mission";
import Strategy from "./components/strategies/strategyCard";
import Student from "./components/students/student";
import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";
import Intake from "./components/intake/intake";
import {Whoops404} from "./components/error";

// import logo from "./logo.svg";
// import * as app from "./css/App";

// to do: T̶h̶e̶r̶e̶ s̶h̶o̶u̶l̶d̶ b̶e̶ 3̶ r̶o̶u̶t̶e̶s̶
// to do: add nav bar with links to scroll to: team, mission, why abena dms, api documentation, pricing (coming soon) sections
// to do: link product hunt button to product hunt page
// to do: setup emailing list through sendgrid after users join beta
// to do: show (count) place in line for educators
// to do: add a profiler in prod to see where I can improve performance

const greeting = "Hello world";

export default function App() {
  return (
    <div className="App">
      <h1>{greeting}</h1>
      <NavBar />
      <Routes>
        <Route path="/strategies" element={<Strategy />} />
        <Route path="/Home" component={Home} />
        <Route path="/students" element={<Student />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/intake" element={<Intake />} />
        <Route path="/strategies" element={<Strategy />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}
