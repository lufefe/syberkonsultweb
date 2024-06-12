import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from "react";

const Paragraph = ({ paragraph }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");
  return (
    <p 
    ref={container}         
    className="flex font-thin leading-none p-4 max-w-[1280] text-n-1 flex-wrap text-5xl"
  >
  {
    words.map( (word, i) => {
      const start = i / words.length
      const end = start + (1 / words.length)
      return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
    })
  }
  </p>
  )
};

export default Paragraph;

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-3 mt-3">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
