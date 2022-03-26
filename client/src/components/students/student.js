import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bulma-components";
import {getStudents} from "./studentSlice.js";
import "bulma/css/bulma.min.css";
import IntakeForm from "./intakeForm";
import Intake from "./intakeContainer";
import { motion, Variants } from "framer-motion";

// to do populate students in classroom associated with teacher
// show students as animated carousels with framer
// const [intakes, setIntakes] = useState([]);

// // fetch intakes every time the component loads


function Student(props) {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStudents())
      }, []);
      
    return ( 
        <div className="students-container">
      <Card>
        <Card.Image>
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </Card.Image>
        <h1>Students</h1>
        <p>
          <button className="btn btn-primary" onClick={() => addStudent()}>
            Add Student
          </button>
        </p>
        <p>
          <Link to="/students/">Student 1</Link>
        </p>
      </Card>
    </div>

     );
}

export default Student;

