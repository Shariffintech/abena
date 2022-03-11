import React, { useState } from "react";


  const [count, setCount] = useState(0);
  const [toggleStrategy, setToggleStrategy] = useState("On");
  const [favorite, setfavorite] = useState(false);
  const [loved, setloved] = useState(false);
  const [disliked, setdisliked] = useState(false);
  const [status, setstatus] = useState("Not Reviewed");

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const cardButtons = () => {
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
  }