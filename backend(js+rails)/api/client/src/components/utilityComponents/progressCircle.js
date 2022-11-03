import React from "react";
import { motion, useViewportScroll } from "framer-motion";

// add progress bar for form
export const CircleIndicator = () => {
  const { scrollYProgress } = useViewportScroll();

  return (
    <motion.path
    className="progress-bar mt-6"
      d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
      style={{ pathLength: scrollYProgress }}
    />
  );
};