import React from "react";
import {ButtonGroup, Button, Box} from 'react-bulma-components';
import {motion} from "framer-motion";

function frameWorks(props) {
  // to do: load frameworks like a carousel

  return (
    <div className="frameworks pt-6">
      <h1 className="supported-frameworks"> Supported Frameworks</h1>

      <img
        className="frameworks-img"
        src={
          "https://user-images.githubusercontent.com/22308837/158068329-3fe91f90-8bc5-491b-b7d4-b133f77ecc43.png"
        }
        alt="frameworks"
      />
      <img
        className="frameworks-img-2"
        src={
          "https://user-images.githubusercontent.com/22308837/158068419-598dbe85-f736-4bb3-92ab-b0fdd2f139a4.png"
        }
        alt="frameworks"
      />

      <Box style={{ width: 650, height: 100, margin: 'auto',alignContent:'space-evenly', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Button.Group className="frameworks-buttons">
          <Button color="abena-purple" renderAs="span" size="large">
            SEL
          </Button>
          <Button color="abena-purple" renderAs="span" size="large">
          PBIS
          </Button>
          <Button color="abena-purple" renderAs="span"size="large">
            RTI
          </Button>
          <Button color="abena-purple" renderAs="span" size="large">
            MTSS
          </Button>

        </Button.Group>
      </Box>


    
    </div>
  );
}

export default frameWorks;
