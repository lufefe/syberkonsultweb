import React from 'react'
import { motion } from "framer-motion";

const privacypolicy = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <h1 className="h1 text-center">Privacy Policy</h1>
  </motion.div>
  )
}

export default privacypolicy