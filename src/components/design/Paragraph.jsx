import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Paragraph = ({ paragraph }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <motion.p
      ref={container}
      className="flex font-semibold  p-4 max-w-[1280] text-n-1 flex-wrap text-4xl leading-relaxed"
      style={{ opacity: scrollYProgress }}
    >
      {paragraph}
    </motion.p>
  );
};

export default Paragraph;
