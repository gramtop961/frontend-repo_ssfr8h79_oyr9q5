import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function PageTransitions({ children, locationKey }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div key={locationKey} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
