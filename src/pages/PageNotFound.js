import React, { useEffect } from "react";
import { motion } from "framer-motion";

const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found :(";
    window.scrollTo(0, 0);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative overflow-hidden"
    >
      <Content />
      <FuzzyOverlay />
    </motion.div>
  );
};

export default PageNotFound;

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      // You can download these PNGs here:
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        backgroundImage: 'url("https://www.hover.dev/black-noise.png")',
        // backgroundImage: 'url("/noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const Content = () => {
  return (
    <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8">
      <p className="text-center text-6xl font-black text-neutral-50">
        Page Not Found
      </p>
      <p className="text-center text-neutral-400">
        Getting lost along your path is part of finding the path you are meant
        to be on.
      </p>
      <div className="flex items-center justify-center gap-3">
        <button className="w-fit bg-neutral-200 px-4 py-2 font-semibold text-neutral-700 transition-colors hover:bg-neutral-50">
          <a href="/"> Home </a>
        </button>
      </div>
    </div>
  );
};
