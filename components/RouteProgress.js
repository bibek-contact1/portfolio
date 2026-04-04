import { AnimatePresence, motion } from 'framer-motion';

export default function RouteProgress({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className='pointer-events-none fixed left-0 right-0 top-0 z-[120] h-1 overflow-hidden bg-transparent'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className='h-full w-1/3 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600'
            initial={{ x: '-40%' }}
            animate={{ x: '340%' }}
            transition={{ repeat: Infinity, duration: 0.9, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
