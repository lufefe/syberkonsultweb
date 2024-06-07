import React from "react";
import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-center z-50 bg-indigo-700"
      style={{ scaleX: scrollYProgress }}
    ></motion.div>
  );
};

export default ProgressBar;
