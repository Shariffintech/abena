import React, { useState } from "react";
import IntakeForm from "./intakeForm";
import { motion, AnimatePresence } from "framer-motion";

const Intake = (props) => {
  // const [selectedId, setSelectedId] = useState(null)
  return (
    <>
      {/* <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      /> */}


      {/* <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        > */}
         <IntakeForm /> 
        {/* </motion.div>
    
      </AnimatePresence> */}
    </>
  );
};

export default Intake;