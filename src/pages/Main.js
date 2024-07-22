import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import ContactUs from "../components/ContactUs";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Hero />
        <Services />
        <About />
        <ContactUs />
      </motion.div>
    </>
  );
};

export default Main;
