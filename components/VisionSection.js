import { motion } from 'framer-motion';

export default function VisionSection() {
  return (
    <section id='vision' className='mx-auto max-w-6xl px-6 py-20'>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className='rounded-3xl bg-gradient-to-br from-[#0f766e] to-[#164e63] p-8 text-center text-white shadow-2xl shadow-[#0f766e]/20 sm:p-10'
      >
        <p className='text-[11px] font-bold uppercase tracking-[0.24em] text-[#f5c766]'>Entrepreneurship Vision</p>
        <h2 className='font-heading mt-4 text-3xl font-bold leading-tight sm:text-4xl'>
          Building businesses that solve real problems and create lasting value.
        </h2>
        <p className='mt-6 max-w-3xl text-base leading-relaxed text-slate-100 sm:text-lg'>
          My long-term ambition is to found and scale innovative ventures in Nepal and beyond. I want to combine strong marketing execution with ethical leadership to build businesses that grow sustainably, serve communities, and inspire the next generation of entrepreneurs.
        </p>
        <div className='mt-6 flex flex-wrap gap-3'>
          <span className='rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white'>Human-first growth</span>
          <span className='rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white'>Transparent leadership</span>
          <span className='rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white'>Value &gt; vanity metrics</span>
        </div>
      </motion.div>
    </section>
  );
}

