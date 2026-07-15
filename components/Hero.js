import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id='home' className='relative px-4 pb-14 pt-6 sm:px-6 sm:pb-20 md:pt-24'>
      <div className='hero-gradient pointer-events-none absolute inset-0' />
      <div className='relative mx-auto grid max-w-6xl items-center gap-8 overflow-hidden rounded-3xl border border-slate-200/80 bg-white/92 px-5 py-10 text-slate-950 shadow-2xl shadow-slate-900/10 backdrop-blur sm:px-10 sm:py-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-14'>
        <div className='pointer-events-none absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#0f766e] via-[#c9a44f] to-[#38bdf8]' />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className='order-1 mx-auto w-full max-w-[20rem] sm:max-w-sm lg:order-2 lg:max-w-md'
        >
          <div className='relative overflow-hidden rounded-2xl border border-[#dbc079] bg-[#fff7df] p-3 shadow-2xl shadow-slate-900/15'>
            <Image
              src='/bibek-sunar-portrait.jpg'
              alt='Official portrait of Bibek Sunar, marketing professional from Nepal'
              width={1200}
              height={1800}
              priority
              className='h-auto w-full rounded-xl bg-black object-contain'
            />
            <div className='absolute inset-x-5 bottom-5 rounded-lg bg-slate-950/78 px-4 py-3 text-white shadow-xl backdrop-blur'>
              <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#b7ead8]'>Bibek Sunar</p>
              <p className='mt-1 text-sm font-medium text-white/90'>Marketing • Sales • Entrepreneurship</p>
            </div>
          </div>
        </motion.div>

        <div className='order-2 text-center lg:order-1 lg:text-left'>
          <motion.p
            initial={{ y: 14, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className='mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#cce5dc] bg-[#effaf5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0f766e] shadow-sm'
          >
            <span className='h-2 w-2 rounded-full bg-[#0f766e] shadow-[0_0_0_6px_rgba(15,118,110,0.16)]' />
            <span className='leading-relaxed'>Marketing Professional • Entrepreneur in progress</span>
          </motion.p>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='font-heading mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl lg:mx-0 lg:text-6xl'
          >
            Bibek <span className='text-gradient'>Sunar</span>
          </motion.h1>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className='mt-5 flex flex-wrap justify-center gap-3 text-sm text-slate-600 lg:justify-start'
          >
            <span className='rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700'>
              Based in Bharatpur, Nepal
            </span>
            <span className='rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700'>
              Marketing • Sales • Digital Marketing
            </span>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg lg:mx-0'
          >
            I am Bibek Sunar, a marketing graduate from Nepal with a strong passion for marketing, sales, and entrepreneurship. I aim to build impactful businesses and create meaningful value through innovative ideas.
          </motion.p>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className='mt-8 grid gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start'
          >
            <a href='#contact' className='rounded-full bg-[#0f766e] px-7 py-3 text-center text-sm font-bold text-white shadow-lg shadow-[#0f766e]/20 transition hover:bg-[#115e59]'>
              Contact Me
            </a>
            <a href='#projects-achievements' className='rounded-full border border-slate-300 bg-white px-7 py-3 text-center text-sm font-bold text-slate-800 transition hover:border-[#0f766e] hover:text-[#0f766e]'>
              View Projects
            </a>
            <a href='#about' className='rounded-full border border-slate-300 bg-white px-7 py-3 text-center text-sm font-bold text-slate-800 transition hover:border-[#0f766e] hover:text-[#0f766e]'>
              About Me
            </a>
          </motion.div>

          <div className='mt-8 grid gap-4 sm:grid-cols-2'>
            <div className='rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left'>
              <div className='mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#0f766e] font-semibold text-white shadow-lg shadow-[#0f766e]/20'>
                M
              </div>
              <div>
                <p className='text-sm font-semibold text-slate-950'>Marketing that converts</p>
                <p className='mt-1 text-sm text-slate-600'>Obsessed with data-backed storytelling, funnels, and repeatable growth.</p>
              </div>
            </div>
            <div className='rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left'>
              <div className='mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#c9a44f] font-semibold text-white shadow-lg shadow-[#c9a44f]/20'>
                E
              </div>
              <div>
                <p className='text-sm font-semibold text-slate-950'>Entrepreneurial drive</p>
                <p className='mt-1 text-sm text-slate-600'>Building and testing ideas that create value and real customer impact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
