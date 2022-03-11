import React from "react";
import { useState,useForm } from "react";
import Progress from "react-bulma-components";

import { motion, useViewportScroll } from "framer-motion"

export const CircleIndicator = () => {
  const { scrollYProgress } = useViewportScroll()

  return (
    <motion.path
      d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
      style={{ pathLength: scrollYProgress }}
    />
  )
}

// to do: add chat function with twilio record parent, teacher convo when completing this form

export default function IntakeForm(addStudent) {
  const [full_name, setName] = useState("Enter student name");
  const [date_of_birth,setDOB] = useState("Enter DOB");
  const [student_age, setStudentAge] = useState("Enter Age");
  const [team,setTeam] = useState("Enter students team");
  const [current_school,setSchool] = useState("Enter current school name");
  const [current_school_contact, setSchoolContact] = useState("Enter Admin Contact");
  const [room_number, setRoomNumber] = useState("Enter Student Room Number");
  const [previous_school,setPriorSchool] = useState("Enter prior school");
  const [overall_concern, setOverallConcern] = useState("Select overall concern");
  const [sleeping_patterns, setSleepingPatterns] = useState("Selet sleeping patterns");
  const [funding_stream, setFundingStream] = useState("Select Funding Stream");
  const [notes,setNotes] = useState("Add notes to student profile");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(full_name);

    addStudent({
      full_name: "",
      date_of_birth: "",
      student_age: "",
      team: [""],
      current_school: "",
      current_school_contact: "",
      room_number: "",
      prior_academies: [""],
      overall_concern: [""],
      primary_concern: "",
      sleeping_patterns: "",
      funding_stream: "",
      notes: [""],
      created_at: "",
    });

        setName("");

    
};

    return (
      <>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={full_name}
            onChange={(e) => setName(e.target.value)}
          />
          
        <input
        type="text"
        value={date_of_birth}
        onChange={(e) => setDOB(e.target.value)}
        />

        <input
        type="text"
        value = {student_age}
        onChange={(e) => setStudentAge(e.target.value)}
        />

        <input
        type="text"
        value = {team}
        onChange={(e) => setTeam(e.target.value)}
        />

        <input 
        type="text"
        value = {current_school}
        onChange={(e) => setSchool(e.target.value)}
        />

        <input 
        type="text"
        value = {current_school_contact}
        onChange={(e) => setSchoolContact(e.target.value)}
        />

        <input
        type="text"
        value = {room_number}
        onChange={(e) => setRoomNumber(e.target.value)}
        />

        <input
        type="text"
        value = {previous_school}
        onChange={(e) => setPriorSchool(e.target.value)}
        />

        <input
        type="text"
        value={overall_concern}
        onChange={(e) => setOverallConcern(e.target.value)}
        />

        <input
        type="text"
        value={sleeping_patterns}
        onChange={(e) => setSleepingPatterns(e.target.value)}
        />

        <input 
        type="text"
        value = {funding_stream}
        onChange={(e) => setFundingStream(e.target.value)}
        />


        <input 
        type="text"
        value = {notes}
        onChange={(e) => setNotes(e.target.value)}
        />

          <button>Submit</button>
        </form>
      </>
    );

}
