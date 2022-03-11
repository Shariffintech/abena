import React, { Component } from "react";
import { useEffect, useState } from "react";
import IntakeForm from "./intakeForm";
import Intake from "./intake";

export default function Intakes(props ) {
  // const [intakes, setIntakes] = useState([]);

  // // fetch intakes every time the component loads
  // useEffect(() => {
  //   fetch("http://localhost:3000/intakes")
  //     .then((resp) => resp.json())
  //     .then((intakes) => {
  //       console.log(intakes);
  //     });
  // }, []);


  const intakes = [{
    id: 1,
    name: "William Straus",
    consent_form_status: "not completed",
    close_support: "yes"

  }
]

  return (
    <div className="Intakes">
      <h1>Intakes Screen</h1>
      <ul>
        <section>
        {intakes.map((intake) => (
          <Intake
          
          name={intake.name}
          consent_form_status={intake.consent_form_status}
          close_support={intake.close_support}
          id={intake.id}
           />
        ))}
        </section>
      </ul>
    </div>
  );
}


function mapDispatchToProps(dispatch) {
  return {
    getIntakes: () => dispatch(getIntakes()),
  };
}
