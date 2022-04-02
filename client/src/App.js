import React from "react";
import { Routes, Route } from "react-router-dom";
import Mission from "./components/home/mission";
import Strategy from "./components/strategies/loadStrategies";
import Student from "./components/students/student";
import Intake from "./components/students/intakeContainer";
import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";
import { Whoops404 } from "./components/error";
// import Loader from "react-loaders";


// to do: add a profiler in prod to see where I can improve performance

export default function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/strategies" element={<Strategy />} />
        <Route path="/home" element={<Home />} />
        <Route path="/students" element={<Student />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/intake" element={<Intake />} />

        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}
