import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import StepOneIntake from"./stepOneIntake";
import StepTwoIntake from"./stepTwoIntake";
import { useDispatch, useSelector } from "react-redux";
import { DateTime } from "luxon";
import { progressCircle } from "../utilityComponents/progressCircle";
import { nextFrame } from "@tensorflow/tfjs";

// to do: add chat function with twilio record parent, teacher convo when completing this form

function IntakeForm() {
  const [primaryDiagnosis, setPrimaryDiagnosis] = useState("");

  // nextStep = () => {
  //   const step = useSelector((state) => state.step);
  //   const dispatch = useDispatch();
  //   dispatch({
  //     type: "NEXT_STEP",
  //     payload: step + 1,

  //   });
  // }

  // prevStep = () => {
  //   const step = useSelector((state) => state.step);
  //   const dispatch = useDispatch();
  //   dispatch({
  //     type: "PREV_STEP",
  //     payload: step - 1,

  //   });
  // }

  handleChange = input => e => {
    setPrimaryDiagnosis(e.target.value);
  };
  
  return (
   
    <div className="intake-form-container">

      {primaryDiagnosis === "None" || "Select Primary Diagnosis" ? (
        <StepOneIntake />
      ) : (
        <StepTwoIntake />
      )}
      
    </div>

  );
}

export default IntakeForm;
