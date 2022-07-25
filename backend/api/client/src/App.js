import React from "react";
import { Routes, Route } from "react-router-dom";
import Mission from "./components/home/mission/mission";
import Strategy from "./components/strategies/loadStrategies";
import Student from "./components/students/student";
import Intake from "./components/students/intakeContainer";
import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";
import TeacherQna from "./components/qna/teacherQna";
import Blog from "./components/blog/blog";



// to do: add a profiler in prod to see where I can improve performance

export default function App() {
  return (
    <>
      {/* <Loader type="ball-triangle" onLoad={true} /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/strategies" element={<Strategy />} />
        <Route path="/home" element={<Home />} />
        <Route path="/students" element={<Student />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/intake" element={<Intake />} />
        <Route path="/teacherqna" element={<TeacherQna />} />
     
      </Routes>
    </>
  );
}
