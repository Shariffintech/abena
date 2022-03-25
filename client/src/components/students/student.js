import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  addStudent,
  deleteStudent,
  getStudents,
  updateStudent,
} from "../../actions/actions";
import "bulma/css/bulma.min.css";
import { Card } from "react-bulma-components";
import IntakeForm from "./intakeForm";
import Intake from "./intakeContainer";
import { motion, Variants } from "framer-motion";

// to do populate students in classroom associated with teacher
// show students as animated carousels with framer
// const [intakes, setIntakes] = useState([]);

// // fetch intakes every time the component loads


function Student(props) {

    useEffect((classroom) => {
        fetch("http://localhost:3000/api/vi/classrooms/${classroom.id}/students/${student.id}")
          .then((resp) => resp.json())
          .then((intakes) => {
            console.log(intakes);
          });
      }, []);
      
    return ( 
        <div className="students-container">
      <Card>
        <Card.Image></Card.Image>
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


function mapDispatchToProps(dispatch) {
    return {
      addStudent: (student) => dispatch(addStudent(student)),
      deleteStudent: (id) => dispatch(deleteStudent(id)),
      getStudents: () => dispatch(getStudents()),
      updateStudent: (student) => dispatch(updateStudent(student)),
    };
  }

export default Student;

