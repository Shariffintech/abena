import React from "react";
import { Routes, Route } from "react-router-dom";
import Mission from "./components/home/mission/mission";
import Strategy from "./components/strategies/loadStrategies";
import Student from "./components/students/student";
import Intake from "./components/students/intakeContainer";
import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";
import Blog from "./components/blog/blog";
// import TeacherQna from "./components/qna/teacherQna";

// to do: add a profiler in prod to see where I can improve performance

export default function App() {
  return (
    <>
      {/* <Loader type="ball-triangle" onLoad={true} /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/strategies" element={<Strategy />} />
        <Route path="/home" elemeent={<Home />} />
        <Route path="/students" element={<Student />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/intake" element={<Intake />} />
        <Route path="/blog" element={<Blog />} />
        {/* teacherQna is a generic model that will be a tool to 
        find the source of academic articles in the future */}
        {/* <Route path="/teacherqna" element={<TeacherQna />} /> */}
     
      </Routes>
    </>
  );
}
