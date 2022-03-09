import React, { useState } from "react";
// import Intakes from "./intakes";
import {motion, AnimatePresence}  from "framer-motion";

const Intake = () => {

    // const [selectedId, setSelectedId] = useState(null)
  return (
    <>

<motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  />
    </>
  );
};

export default Intake;
