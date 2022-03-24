import React from "react";
import "bulma/css/bulma.min.css";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bulma-components";
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
  
  return (

      <form className="simpleForm" onSubmit={handleSubmit(onSubmit)}>
        <Group>
          <Label>Student Full Name</Label>
          <Control>
            <input
              ref={register({
                required: "Please enter a name",
                })}
              type="text"
              placeholder="Student Full Name"
              id="student-name"
            />
          </Control>
        </Group>

        <Group>
          <Label>Overall Concern</Label>
          <Control>
            <input
              ref={register({
                required: "Please select a concern",
                })}
              type="text"
              placeholder="Overall Concern"
              id="overall-concern"
            />
          </Control>
        </Group>

        <Group>
          <Label>Funding Stream</Label>
          <Control>
            <input
              ref={register({
                required: "Please select a funding stream",
                })}
              type="text"
              placeholder="Funding Stream"
              id="funding-stream"
            />
          </Control>
        </Group>

        <Group>
          <Label>Sleeping Pattenrs</Label>
          <Control>
            <input
              ref={register({
                required: "Select a sleeping pattern",
                })}
              type="text"
              placeholder="Sleeping Pattern #1"
              id="sleeping-pattern-1"
            />
            </Control>
            </Group>

            <Group>
          <Label>Prior School</Label>
          <Control>
            <input
              ref={register({
                required: "Please enter a prior school",
                })}
              type="text"
              placeholder="Prior School"
              id="prior-school"
            />
          </Control>
        </Group>

        <Group>
          <Label>Team</Label>
          <Control>
            <input
              ref={register({
                required: "Please enter a team",
                })}
              type="text"
              placeholder="Team"
              id="team"
            />
          </Control>
        </Group>
        
          <Button type="submit">Submit Student</Button>
      </form>
  );
}

export default IntakeForm;