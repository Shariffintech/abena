
import React from "react";
import { Routes, Route } from "react-router-dom";
import Mission from "./components/home/mission";
import Strategy from "./components/strategies/loadStrategies";
import Student from "./components/students/student";
import Intake from "./components/students/intake";
import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";
import {Whoops404} from "./components/error";



// to do: add nav bar with links to scroll to: team, mission, why abena dms, api documentation, pricing (coming soon) sections
// to do: link product hunt button to product hunt page
// to do: setup emailing list through sendgrid after users join beta
// to do: show (count) place in line for educators
// to do: add a profiler in prod to see where I can improve performance

export default function App() {

  // write functions, variables here

  // add fetch request to backend to get students and educators
  // add fetch request to backend to get strategies
  // add fetch request to backend to create strategies
  // add fetch request to backend to create students



  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/strategies" element={<Strategy />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/students" element={<Student/>} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/student/new" element={<Intake />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}
