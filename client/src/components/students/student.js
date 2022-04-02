import React from "react";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Card, Columns, Notification, Section } from "react-bulma-components";
import {loadStrategies} from "./loadStudents";
// import {getStudents} from "./studentSlice.js";
import "bulma/css/bulma.min.css";
// import Intake from "./intakeContainer";
// import { motion, Variants } from "framer-motion";

// to do populate students in classroom associated with teacher
// show students as animated carousels with framer
// const [intakes, setIntakes] = useState([]);

// // fetch intakes every time the component loads

function Student(props) {
  

  return (
    <div className="students-container">
      <Card>
        <Card.Image>
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </Card.Image>
        <Card.Content>  
          <Card.Header>
            <span>{props.fullname}</span>
          </Card.Header>
          <Card.Header>
            <span>{props.overall_concern}</span>
          </Card.Header>
          <Card.Header>
            <span>{props.funding_stream}</span>
          </Card.Header>
          <Card.Header>
            <span>{props.sleeping_pattern}</span>
          </Card.Header>
          <Card.Header>
            <span>{props.prior_school}</span>
          </Card.Header>
          <Card.Header>
            <span>{props.team}</span>
          </Card.Header>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Student;
