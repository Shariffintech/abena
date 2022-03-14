import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container} from "react-bulma-components";
// import { } from "react-bulma-components"

export default function Team(props) {
  // to do: upload images and uses react spring to animate containers


  return (
    <div className="team">
      <h1>Team</h1>
      <Container>
      
      <img
      className="team-image"
        src="https://user-images.githubusercontent.com/22308837/158008241-31da65bc-e53b-4822-b520-6566a0fe4b25.png"
        alt="Shawna is trengthing early childhood education classrooms."
      
      />
    
        <h2>Shawna</h2>
        <p>
            Shawna is a teacher and a mother of two. She has been teaching
            preschool since 2010 and has been teaching in the San Francisco.
        </p>

      <img
        className="team-image"
        src="https://user-images.githubusercontent.com/22308837/158008262-4151ccf9-7592-4b0d-833b-7118e43268ea.png"
        alt="Sharif is strengthing early childhood education in classrooms."
      />
     </Container>
    </div>
  );
}

