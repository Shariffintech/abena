
import React from "react";
import { Routes, Route } from "react-router-dom";
import Mission from "./components/home/mission";
import Strategy from "./components/strategies/strategies";
import Student from "./components/students/student";
import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";
import Intake from "./components/intake/intake";
import {Whoops404} from "./components/error";

// import logo from "./logo.svg";
// import * as app from "./css/App";

// to do: add nav bar with links to scroll to: team, mission, why abena dms, api documentation, pricing (coming soon) sections
// to do: link product hunt button to product hunt page
// to do: setup emailing list through sendgrid after users join beta
// to do: show (count) place in line for educators
// to do: add a profiler in prod to see where I can improve performance

export default function App() {

  // write functions, variables here


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/strategies" element={<Strategy />} />
        <Route path="/Home" component={Home} />
        <Route path="/students" element={<Student/>} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/intake" element={<Intake />} />
        <Route path="/strategies" element={<Strategy />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}
