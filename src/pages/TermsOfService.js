import React from 'react'
import { motion } from "framer-motion";


const termsofservice = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <h1 className="h1 text-center">Terms of Service</h1>
  </motion.div>
  )
}

export default termsofservice