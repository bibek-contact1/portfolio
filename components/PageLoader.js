import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className='fixed inset-0 z-[100] flex items-center justify-center bg-slate-950'
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className='h-20 w-20 rounded-full border-4 border-brand-500 border-t-transparent'
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
