// ================================================
// PageWrapper.jsx
// Purpose: Provides fade-in/out transition for routed pages
// Tools: Framer Motion
// ================================================

import { motion } from 'framer-motion';
import './PageWrapper.css';

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function PageWrapper({ children }) {
  return (
    <motion.div
      className='page-fade'
      variants={fadeVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
