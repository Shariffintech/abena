// import React from "react";
// import { useState, useForm } from "react";
// import {Progress, Form , Field} from "react-bulma-components";

// import { motion, useViewportScroll } from "framer-motion";

// export const CircleIndicator = () => {
//   const { scrollYProgress } = useViewportScroll();

//   return (
//     <motion.path
//       d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
//       style={{ pathLength: scrollYProgress }}
//     />
//   );
// };

// // to do: add chat function with twilio record parent, teacher convo when completing this form

// export default function IntakeForm(addStudent) {
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

//   //   const handleSubmit = (e) => {
//   //     e.preventDefault();
//   //     console.log(full_name);

//   //     addStudent({
//   //       full_name: "",
//   //       date_of_birth: "",
//   //       student_age: "",
//   //       team: [""],
//   //       current_school: "",
//   //       current_school_contact: "",
//   //       room_number: "",
//   //       prior_academies: [""],
//   //       overall_concern: [""],
//   //       primary_concern: "",
//   //       sleeping_patterns: "",
//   //       funding_stream: "",
//   //       notes: [""],
//   //       created_at: "",
//   //     });

//   //         setName("");

//   // };

//   const { Group, Control } = { ...Form };
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);
//   console.log(errors);

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)} className="intake-form">
//         <Field>
//           <Control>
//             <Form.Input
//               type="text"
//               placeholder="Enter student name"
//               name="full_name"
//               onChange={(e) => setName(e.target.value)}
//             />
//           </Control>
//         </Field>
//         <Field>
//           <Control>
//             <Form.Input
//               type="text"
//               placeholder="Enter DOB"
//               name="date_of_birth"
//               onChange={(e) => setDOB(e.target.value)}
//             />
//           </Control>
//         </Field>
//         <Field>
//           <Control>
//             <Form.Input
//               type="text"
//               placeholder="Enter Age"
//               name="student_age"
//               onChange={(e) => setStudentAge(e.target.value)}
//             />
//           </Control>
//         </Field>
//         <Field>
//           <Control>
//             <Form.Input
//               type="text"
//               placeholder="Enter Team"
//               name="team"
//               onChange={(e) => setTeam(e.target.value)}
//             />
//           </Control>
//         </Field>
//         <Field>
//           <Control>
//             <Form.Input
//               type="text"
//               placeholder="Enter current school name"
//               name="current_school"
//               onChange={(e) => setSchool(e.target.value)}
//             />
//           </Control>
//         </Field>
//         <Field>
//           <Control>
//             <Form.Input
//               type="text"
//               placeholder="Enter Admin Contact"
//               name="current_school_contact"
//               onChange={(e) => setSchoolContact(e.target.value)}
//             />
//           </Control>
//         </Field>
//         <Field>
//           <Control>
//             <Form.Input
//               type="text"
//               placeholder="Enter Student Room Number"
//               name="room_number"
//               onChange={(e) => setRoomNumber(e.target.value)}
//             />
//           </Control>
//         </Field>
//         <Field>
//           <Control>
//             <Form.Input
//               type="text"
//               placeholder="Enter Prior School"
//               name="prior_academies"
//               onChange={(e) => setPriorSchool(e.target.value)}
//             />
//           </Control>
//         </Field>
//         <Field>
//           <Control>
//             <Form.Input
//               type="text"
//               placeholder="Select Overall Concern"
//               name="overall_concern"
//               onChange={(e) => setOverallConcern(e.target.value)}
//            />
//           </Control>
//         </Field>
//         <Field>
//           <Control
//             type="select"
//             placeholder="Select sleeping patterns"
//             name="sleeping_patterns"
//             value={sleeping_patterns}
//             onChange={(e) => setSleepingPatterns(e.target.value)}
//           />
//         </Field>
//         <Field>
//           <Control>
//             <Form.Input
//               type="text"
//               placeholder="Select Funding Stream"
//               name="funding_stream"
//               onChange={(e) => setFundingStream(e.target.value)}
//             />
//           </Control>
//         </Field>
//         <Field>
//           <Control>
//             <Form.Input
//               type="text"
//               placeholder="Add notes to student profile"
//               name="notes"
//               onChange={(e) => setNotes(e.target.value)}
//             />
//           </Control>
//         </Field>

//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }



import React from 'react';
import { useForm } from 'react-hook-form';
import {Form, Container, Button}  from 'react-bulma-components';


import 'bulma/css/bulma.min.css';


const {Group, Label, Control} = {...Form}
export default function IntakeForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <Container>
    <form onSubmit={handleSubmit(onSubmit)} className="simpleForm">
      <Group>
        <Label>
          First name
        </Label>
        <Control type="text" placeholder="First name" {...register("First name")} />
      </Group>

      <Group>
        
        <Label>Last Name</Label>
        <Control type="text" placeholder="Last name" {...register("Last name")} />
      </Group>
      <Group>
        <Label>Email</Label>
        <Control type="text" placeholder="Email" {...register("Email")} />
      </Group>
      <Group>
        <Label>Mobile number</Label>
        <Control  type="tel" placeholder="Mobile number" {...register("Mobile number")} />
      </Group>
      <Group>
        <Label>Comments</Label>
        <Control as="textarea"  {...register("Your comments")} />

        <Button type="submit" >
          Send
        </Button>
      </Group>
    </form></Container>
  );
}