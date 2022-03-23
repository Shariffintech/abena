import React from "react";
import "bulma/css/bulma.min.css";
import { useState,useForm } from "react-hook-form";
import { Form, Container, Button } from "react-bulma-components";
// import {Progress, Form , Field} from "react-bulma-components";
// import { motion, useViewportScroll } from "framer-motion";

// add progress bar for form
// export const CircleIndicator = () => {
//   const { scrollYProgress } = useViewportScroll();

//   return (
//     <motion.path
//       d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
//       style={{ pathLength: scrollYProgress }}
//     />
//   );
// };

// to do: add chat function with twilio record parent, teacher convo when completing this form


function IntakeForm() {
  

  const { Group, Label, Control } = { ...Form };
  
  const {register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data) => console.log(data);
  
  console.log(errors);


//   const [full_name, setName] = useState("Enter student name");
//   const [date_of_birth, setDOB] = useState("Enter DOB");
//   const [student_age, setStudentAge] = useState("Enter Age");
//   const [team, setTeam] = useState("Enter students team");
//   const [current_school, setSchool] = useState("Enter current school name");
//   const [current_school_contact, setSchoolContact] = useState(
//     "Enter Admin Contact"
//   );
//   const [room_number, setRoomNumber] = useState("Enter Student Room Number");
//   const [previous_school, setPriorSchool] = useState("Enter prior school");
//   const [overall_concern, setOverallConcern] = useState(
//     "Select overall concern"
//   );
//   const [sleeping_patterns, setSleepingPatterns] = useState(
//     "Selet sleeping patterns"
//   );
//   const [funding_stream, setFundingStream] = useState("Select Funding Stream");
//   const [notes, setNotes] = useState("Add notes to student profile");

  return (

      <form className="simpleForm" onSubmit={handleSubmit(onSubmit)}>
        <Group>
          <Label>First name</Label>
          <Control
            type="text"
            placeholder="First name"
            {...register("First name")}
          />
        </Group>

        <Group>
          <Label>Last Name</Label>
          <Control
            type="text"
            placeholder="Last name"
            {...register("Last name")}
          />
        </Group>
        <Group>
          <Label>Email</Label>
          <Control type="text" placeholder="Email" {...register("Email")} />
        </Group>
        <Group>
          <Label>Mobile number</Label>
          <Control
            type="tel"
            placeholder="Mobile number"
            {...register("Mobile number")}
          />
        </Group>
        <Group>
          <Label>Comments</Label>
          <Control as="textarea" {...register("Your comments")} />

          <Button type="submit">Send</Button>
        </Group>
      </form>

  );
}

export default IntakeForm;