import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import StepOneIntake from"./stepOneIntake";
import StepTwoIntake from"./stepTwoIntake";
import { useDispatch, useSelector } from "react-redux";
import { DateTime } from "luxon";
import { progressCircle } from "../utilityComponents/progressCircle";

// to do: add chat function with twilio record parent, teacher convo when completing this form

function IntakeForm() {
  const [primaryDiagnosis, setPrimaryDiagnosis] = useState("");
  
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
