import { motion } from 'framer-motion';

export default function VisionSection() {
  return (
    <section id='vision' className='mx-auto max-w-6xl px-6 py-20'>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className='rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900 p-10 text-white shadow-2xl'
      >
        <p className='section-kicker'>Entrepreneurship Vision</p>
        <h2 className='font-heading mt-4 text-3xl font-bold leading-tight sm:text-4xl'>
          Building businesses that solve real problems and create lasting value.
        </h2>
        <p className='mt-6 max-w-3xl text-base leading-relaxed text-slate-100 sm:text-lg'>
          My long-term ambition is to found and scale innovative ventures in Nepal and beyond. I want to combine strong marketing execution with ethical leadership to build businesses that grow sustainably, serve communities, and inspire the next generation of entrepreneurs.
        </p>
        <div className='mt-6 flex flex-wrap gap-3'>
          <span className='subtle-pill bg-white/15 text-white ring-1 ring-white/20'>Human-first growth</span>
          <span className='subtle-pill bg-white/15 text-white ring-1 ring-white/20'>Transparent leadership</span>
          <span className='subtle-pill bg-white/15 text-white ring-1 ring-white/20'>Value &gt; vanity metrics</span>
        </div>
      </motion.div>
    </section>
  );
}

